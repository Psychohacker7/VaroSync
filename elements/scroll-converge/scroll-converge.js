// scroll-converge — a cloud of instanced cubes that resolves into a photograph
// at a chosen scroll position. Drop-in element; see README.md for the theory.
//
//   import { createScrollConverge } from './scroll-converge.js';
//   const fx = createScrollConverge({ image: '/img/final.jpg' });
//   // later: fx.destroy()
//
// EVERYTHING here is the logic. Nothing about copy, layout or which picture.
import * as THREE from 'three';

const DEFAULTS = {
  image: null,          // required — the picture it resolves into
  mount: document.body, // canvas is prepended here
  rows: 224,            // vertical grid resolution → instances = rows² × imageRatio
  targetZ: 180,         // camera z where the picture is exactly resolved
  startZ: null,         // camera z at progress 0 (default targetZ/5 = deep inside)
  spread: null,         // depth scatter range (default 2·targetZ·0.99)
  size: 1,              // cube edge in world units
  ease: 0.12,           // camera lerp per frame; lower = heavier
  progress: 'page',     // 'page' | HTMLElement (scoped) | () => 0..1
  fit: 'viewport',      // 'viewport' = size to window | 'mount' = size to the mount box
  frame: null,          // null | 'contain' | 'cover' | 'width' — how the resolved
                        // picture is framed. Adjusts fov so it fits the box.
  cssVar: '--converge-progress', // progress mirrored here for CSS to react to
  onReady: null,
};

/**
 * Progress for a PINNED plate: 0 when the plate reaches its sticky line,
 * 1 while it is still pinned, so the finished picture is HELD before release.
 *
 *   <div class="runway">            height = plateHeight + scrubDistance
 *     <div class="plate"></div>     position: sticky; top: <offset>
 *   </div>
 *
 * A sticky plate holds still for exactly (runwayHeight - plateHeight); that
 * distance is the whole scrub. Reading the runway's top edge against its own
 * sticky offset gives progress without measuring scroll position or page
 * height, and it stays correct when content above the runway changes height.
 *
 * `hold` is the fraction of the pin reserved AFTER progress reaches 1. The
 * camera eases toward its target (see `ease`), so it arrives a beat late; with
 * hold = 0 the plate releases while the picture is still assembling and the
 * resolved image is never actually seen. The reserved tail is what makes the
 * sequence end ON the picture.
 *
 *   progress: pinnedProgress(runwayEl, plateEl, { offset: 64 })
 */
export function pinnedProgress(runway, plate, { offset = 0, hold = 0.18 } = {}) {
  const h = Math.min(0.9, Math.max(0, hold));
  return () => {
    const r = runway.getBoundingClientRect();
    const travel = r.height - plate.getBoundingClientRect().height;
    if (travel <= 0) return 0;
    const raw = (offset - r.top) / travel;          // 0..1 across the whole pin
    const scrub = raw / (1 - h);                    // finish early, hold the rest
    return Math.min(1, Math.max(0, scrub));
  };
}

export function createScrollConverge(opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  if (!o.image) throw new Error('scroll-converge: `image` is required');
  const targetZ = o.targetZ;
  const startZ = o.startZ ?? targetZ / 5;
  const spread = o.spread ?? 2 * targetZ * 0.99;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 2, 0.5, 1000);
  camera.position.set(0, 0, reduced ? targetZ : startZ);

  // ---- THE PLACEMENT INVARIANT -------------------------------------------
  // At depth z the instance is D = targetZ - z from the resolve viewpoint.
  // Scaling it by s = D/targetZ makes its projected size (s/D = 1/targetZ) and
  // projected position (x·s/D = x/targetZ) independent of z. So from targetZ
  // every cube lands on its flat-grid pixel however scattered it is in depth.
  const place = (x, y, z) => {
    const s = (targetZ - z) / targetZ;
    return { s, p: new THREE.Vector3(x * s, y * s, z) };
  };

  let mesh = null, raf = true;
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    const ratio = img.width / img.height;      // aspect from the file: any picture works
    const nRow = o.rows, nCol = Math.max(1, (nRow * ratio) | 0);
    const geom = new THREE.BoxGeometry(o.size, o.size, o.size).translate(0, 0, -0.5 * o.size);
    mesh = new THREE.InstancedMesh(geom, new THREE.MeshBasicMaterial(), nCol * nRow);

    const m = new THREE.Matrix4(), scl = new THREE.Matrix4();
    for (let i = 0, c = 0; i < nRow; ++i) {
      for (let j = 0; j < nCol; ++j, ++c) {
        const { p, s } = place(
          (j - nCol / 2 + 0.5) * o.size,
          (nRow / 2 - i + 0.5) * o.size,
          reduced ? 0 : THREE.MathUtils.randFloatSpread(spread) * o.size,
        );
        // identity() first: setPosition writes only the translation column, so a
        // reused matrix keeps the last instance's scale and compounds it.
        m.identity().setPosition(p).multiply(scl.makeScale(s, s, s));
        mesh.setMatrixAt(c, m);
      }
    }
    mesh.instanceMatrix.needsUpdate = true;

    const can = document.createElement('canvas');
    can.width = nCol; can.height = nRow;
    const ctx = can.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, nCol, nRow);
    const { data } = ctx.getImageData(0, 0, nCol, nRow);   // needs CORS-clean image
    const col = new THREE.Color();
    for (let i = 0, n = nCol * nRow; i < n; ++i) {
      // three ≥0.152 manages colour — declare these bytes sRGB or it washes out
      col.setRGB(data[i*4]/255, data[i*4+1]/255, data[i*4+2]/255, THREE.SRGBColorSpace);
      mesh.setColorAt(i, col);
    }
    mesh.instanceColor.needsUpdate = true;
    scene.add(mesh);
    grid = { w: nCol * o.size, h: nRow * o.size };
    resize();                       // now that the grid is known, frame it
    o.onReady?.({ instances: nCol * nRow, ratio });
  };
  img.src = o.image;

  // ---- PROGRESS SOURCE ----------------------------------------------------
  // 'page'  → whole-document scroll, resolves at the very bottom
  // element → that element's own pass through the viewport
  // fn      → supply your own 0..1
  const readProgress =
    typeof o.progress === 'function' ? o.progress
    : o.progress === 'page'
      ? () => {
          const H = document.documentElement.scrollHeight - innerHeight;
          return H > 0 ? clamp(scrollY / H) : 1;
        }
      : () => {
          const r = o.progress.getBoundingClientRect();
          const span = r.height - innerHeight;
          return span > 0 ? clamp(-r.top / span) : clamp(-r.top / r.height);
        };
  const clamp = (v) => Math.min(1, Math.max(0, v));

  let want = camera.position.z;
  const onScroll = () => {
    const p = readProgress();
    want = startZ + (targetZ - startZ) * p;
    document.documentElement.style.setProperty(o.cssVar, p.toFixed(4));
  };
  if (!reduced) {
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    onScroll();
  }

  // ---- SIZING -------------------------------------------------------------
  // 'viewport': the original behaviour — a fixed backdrop for the whole page.
  // 'mount': the canvas fills its container, so the effect can live inside a
  // card, a column or any bordered box with margins around it.
  const box = () => o.fit === 'mount'
    ? { w: o.mount.clientWidth || 1, h: o.mount.clientHeight || 1 }
    : { w: innerWidth, h: innerHeight };

  // Framing. The resolved grid is nCol x nRow world units wide at targetZ, so
  // the fov that exactly fits it is derivable — no magic numbers, any picture.
  let grid = null;   // { w, h } set once the image has loaded
  const applyFrame = () => {
    if (!o.frame || !grid) return;
    const { w, h } = box(), aspect = w / h;
    const vfovFor = (units) => 2 * Math.atan(units / (2 * targetZ)) * (180 / Math.PI);
    const byHeight = vfovFor(grid.h);
    const byWidth  = vfovFor(grid.w / aspect);
    camera.fov =
      o.frame === 'width'  ? byWidth :
      o.frame === 'cover'  ? Math.min(byWidth, byHeight) :
                             Math.max(byWidth, byHeight);   // 'contain'
  };

  const resize = () => {
    const { w, h } = box();
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    applyFrame();
    camera.updateProjectionMatrix();
  };
  addEventListener('resize', resize);
  // A container can change size without the window doing anything.
  let ro = null;
  if (o.fit === 'mount' && typeof ResizeObserver !== 'undefined') {
    ro = new ResizeObserver(resize);
    ro.observe(o.mount);
  }
  resize();

  renderer.setAnimationLoop(() => {
    if (!raf) return;
    if (!reduced) {
      const gap = want - camera.position.z;
      // At the end of a scrub the picture must actually ARRIVE, and stop.
      // A plain lerp is asymptotic: with ease 0.12 the camera needs ~31 frames
      // to close the gap, so on a normal-speed scroll (1000-3000 px/s) a pinned
      // plate releases while the image is still assembling. Past the last 2% of
      // travel, converge decisively and then snap exactly, so the final frame is
      // static rather than forever creeping.
      const terminal = want >= targetZ - (targetZ - startZ) * 0.02;
      const k = terminal ? Math.max(o.ease, 0.35) : o.ease;
      camera.position.z += gap * k;
      if (Math.abs(want - camera.position.z) < 0.05) camera.position.z = want;
    }
    renderer.render(scene, camera);
  });

  // stop drawing when the tab is hidden
  const onVis = () => { raf = !document.hidden; };
  document.addEventListener('visibilitychange', onVis);

  renderer.domElement.dataset.scrollConverge = '';
  if (o.fit === 'mount') {
    // The canvas fills the mount; the mount must establish a containing block.
    if (getComputedStyle(o.mount).position === 'static') o.mount.style.position = 'relative';
    Object.assign(renderer.domElement.style, {
      position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block',
    });
  }
  o.mount.prepend(renderer.domElement);

  return {
    canvas: renderer.domElement,
    camera,
    get progress() { return readProgress(); },
    /** Draw one frame now. The loop is rAF-driven and pauses when the tab is
     *  hidden, so this is what you call to force a paint (tests, screenshots,
     *  or driving the scene from an external ticker). */
    render() { renderer.render(scene, camera); },
    destroy() {
      renderer.setAnimationLoop(null);
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
      removeEventListener('resize', resize);
      ro?.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      mesh?.geometry.dispose(); mesh?.material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
