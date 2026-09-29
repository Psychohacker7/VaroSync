

export const LOGO = {
  viewBox: '0 0 388 399',
  paths: [
    'M60.49,90.62C.03,90.24-18.77,184.35,38.82,205.76c6.81,3.28,14.31,5.62,21.22,8.4,18.8,7.69,31.43,28.21,37.38,47.12,3.68,15.1-5.82,30.12-8.43,45.32-7.05,23.01-3.81,48.14,10.97,67.13,46.96,64.65,162.25-14.79,118.8-84.32-21.92-35.22-79.1-24.43-95.5-65.12-7.65-15.04-9.66-31.47-1.85-46.81,16.93-43.08-13.35-88.75-60.93-86.85Z',
    'M46.95,255.84c-7.74-17.51-32.49-17.89-42.45-2.49-6.71,10.33-3.69,25.54,6.04,32.97,21.39,15.33,47.18-6.41,36.49-30.3l-.09-.19Z',
    'M324.86,3.16c-43.7-12.38-95.4,14.98-106.83,60-4.07,23.48,4.08,50.37-2.12,73.61-7.52,22.29-33.98,19.97-52.4,26.03-24.17,7.1-26.32,43.63-7.17,56.68,3.64,2.5,8.03,4.09,13.09,4.39,50.52,3.48,28.92-45.66,61.94-60.38,5.54-1.88,11.05-1.62,17.5-.45C378.09,213.9,443.75,38.74,325.07,3.22l-.21-.06Z',
  ],
};


const K = 0.5523;   // circle-to-cubic constant


function blobPath(cx, cy, rx, ry, wob = 0, seed = 1) {
  const q = [0, 1, 2, 3].map((i) => 1 + wob * Math.sin(seed * 7.13 + i * 2.399));
  
  const s = 2 / Math.sqrt((q[1] + q[3]) * (q[0] + q[2]));
  const r = (i) => q[i] * s;
  const rN = ry * r(0), rE = rx * r(1), rS = ry * r(2), rW = rx * r(3);
  const oN = rE * K, oE = rS * K, oS = rW * K, oW = rN * K;
  return `M${cx},${cy - rN} ` +
    `C${cx + oN},${cy - rN} ${cx + rE},${cy - oW} ${cx + rE},${cy} ` +
    `C${cx + rE},${cy + oE} ${cx + oE},${cy + rS} ${cx},${cy + rS} ` +
    `C${cx - oS},${cy + rS} ${cx - rW},${cy + oS} ${cx - rW},${cy} ` +
    `C${cx - rW},${cy - oW} ${cx - oW},${cy - rN} ${cx},${cy - rN} Z`;
}


export const SEEDS = [
  
  blobPath(178, 212, 123, 123, 0.05),   // main body lobe
  blobPath(150, 255, 24.5, 24.5, 0.10),   // the small dot, buried low and left
  blobPath(210, 186, 123, 123, 0.04, 3),   // top-right lobe
];


export const WAIST = [
  blobPath(126, 251, 84, 116, 0.10, 4),   // lobe at true mass, tangent
  blobPath(105, 259, 24.5, 24.5, 0.14, 6),   // the dot, drifting out
  blobPath(267, 124, 99, 91, 0.09, 7),   // lobe at true mass, tangent
];


export const MIDS = [
  blobPath(107, 248, 84, 116, 0.16, 2),   // bottom cell
  blobPath(25, 267, 24.5, 24.5, 0.20, 5),   // the bud — already home
  blobPath(291, 104, 99, 91, 0.15, 9),   // top cell
];




export const BLOB =
  'M194,104 C246,102 292,138 294,194 C296,250 250,296 194,296 ' +
  'C138,296 92,252 94,196 C96,140 142,106 194,104 Z';


const DEFAULTS = Object.freeze({
  duration: 3000,      // ms for one division
  goo: 50,             // peak blur — higher = thicker, more viscous necking
  wobble: 8,           // peak displacement at full agitation (kept light)
  baseFreq: 0.013,     // turbulence scale (jittered at runtime)
  churn: 0.9,          // how erratic the noise is (0 = smooth drift, 1 = chaotic)
  holdStart: 0.17,     // fraction spent alive-but-undivided at the start
  settle: 0.88,        // liquid fully cleared by here; pure logo after
  fade: 0.22,          // length of the soft landing into `settle`

  
  
  
  
  waistSplit: 0.58,

  acts: [
    { move: [0.07, 0.40], morph: [0.48, 0.72] },   // 0 bottom mass
    
    { move: [0.50, 0.72], morph: [0.78, 0.92] },   // 1 the bud
    { move: [0.09, 0.40], morph: [0.78, 0.96] },   // 2 top mass
  ],

  
  eases: [
    [0.55, 0.00, 0.25, 1],   // body
    [0.42, 0.00, 0.30, 1],   // dot
    [0.50, 0.00, 0.28, 1],   // top-right
  ],

  

  gooHold: 0.06,       // viscosity stays full this long, then decays smoothly
  
  
  gooEnd: 0.70,        // blur reaches zero here, not at `settle`
  events: [0.10, 0.64],   // (legacy) no longer drives separation
  
  tears: [0.36, 0.63],
  
  
  peakLead: 0.045,     // how far before a tear the agitation peaks
  onset: 0.075,        // the "start" — ramp up into the peak
  calm: 0.090,         // the "slow down" — ramp back to a full stop
  
  restless: 0.2,
  tensionDrop: 0.58,   // how much surface tension is LOST at each tear (permanent)
  tensionWidth: 0.05,  // how abrupt that loss is
});


function cubicBezier(x1, y1, x2, y2) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sampleX = (t) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t) => ((ay * t + by) * t + cy) * t;
  const slopeX  = (t) => (3 * ax * t + 2 * bx) * t + cx;
  return (x) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) {           // Newton-Raphson
      const err = sampleX(t) - x;
      if (Math.abs(err) < 1e-6) break;
      const d = slopeX(t);
      if (Math.abs(d) < 1e-6) break;
      t -= err / d;
    }
    return sampleY(t);
  };
}

const easeMorph = cubicBezier(0.35, 0, 0.055, 1);   // longer, gentler glide home


const hash = (n) => { const s = Math.sin(n * 127.1) * 43758.5453; return s - Math.floor(s); };
const vnoise = (x) => {
  const i = Math.floor(x), f = x - i;
  const u = f * f * (3 - 2 * f);
  return hash(i) * (1 - u) + hash(i + 1) * u;
};

const smoothstep = (u) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));


function landing(t, { settle, fade }) {
  if (t <= settle - fade) return 1;
  if (t >= settle) return 0;
  return 1 - smoothstep((t - (settle - fade)) / fade);
}


function gooEnvelope(t, o) {
  if (t >= o.settle) return 0;
  const u = clampU((t - o.gooHold) / ((o.gooEnd ?? o.settle) - o.gooHold));
  return (1 - smoothstep(u)) * landing(t, o);
}
const clampU = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);



function agitation(t, o) {
  let a = o.restless;
  for (const e of (o.tears || o.events)) {
    const pk = e - o.peakLead;
    const v = t <= pk
      ? smoothstep((t - (pk - o.onset)) / o.onset)        // START
      : 1 - smoothstep((t - pk) / o.calm);                // SLOW DOWN → STOP
    a = Math.max(a, v);
  }
  return Math.min(1, Math.max(0, a)) * landing(t, o);
}

export function createLogoMitosis(root, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const svg = root.querySelector('svg');
  const morphPath = root.querySelector('[data-morph]');
  const blur = root.querySelector('[data-goo-blur]');
  const turb = root.querySelector('[data-turb]');
  const disp = root.querySelector('[data-disp]');

  if (typeof flubber === 'undefined') throw new Error('flubber not loaded');

  const stretchI = LOGO.paths.map((_, i) => flubber.interpolate(SEEDS[i], WAIST[i], { maxSegmentLength: 2 }));
  const partI    = LOGO.paths.map((_, i) => flubber.interpolate(WAIST[i], MIDS[i],  { maxSegmentLength: 2 }));
  const moveI = LOGO.paths.map((_, i) => (e) =>
    (e <= o.waistSplit
      ? stretchI[i](e / o.waistSplit)
      : partI[i]((e - o.waistSplit) / (1 - o.waistSplit))));
  const morphI = LOGO.paths.map((t, i) => flubber.interpolate(MIDS[i], t,        { maxSegmentLength: 2 }));
  const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
  const pieceEase = LOGO.paths.map((_, i) => {
    const e = (o.eases || [])[i];
    return e ? cubicBezier(e[0], e[1], e[2], e[3]) : easeMorph;
  });
  const span = (t, w) => clamp01((t - w[0]) / (w[1] - w[0]));

  let raf = null, t0 = null, playing = false, done = false;

  function apply(t) {
    const tc = Math.min(1, Math.max(0, t));
    morphPath.setAttribute('d', LOGO.paths.map((_, i) => {
      const a = o.acts[i];
      const mp = span(tc, a.morph);
      return mp > 0
        ? morphI[i](easeMorph(mp))                      // taking its shape
        : moveI[i](pieceEase[i](span(tc, a.move)));     // travelling
    }).join(' '));

    const gooE = gooEnvelope(tc, o);
    const agit = agitation(tc, o);
    blur.setAttribute('stdDeviation', (o.goo * gooE).toFixed(2));

    const ms = performance.now();
    const c = o.churn * (0.35 + 1.15 * agit);
    const nSeed  = vnoise(ms * 0.0009 * (0.4 + c));
    const nFreq  = vnoise(ms * 0.0017 * (0.4 + c) + 31.7);
    const nScale = vnoise(ms * 0.0031 * (0.4 + c) + 77.3);
    turb.setAttribute('seed', (nSeed * 100).toFixed(2));
    turb.setAttribute('baseFrequency', (o.baseFreq * (1 + c * (nFreq * 1.8 - 0.75))).toFixed(5));
    disp.setAttribute('scale', (o.wobble * agit * (1 + c * (nScale - 0.5) * 0.7)).toFixed(2));
    root.style.setProperty('--mitosis-progress', tc.toFixed(3));
  }

  
  function frame(now) {
    if (t0 === null) t0 = now;
    const t = (now - t0) / o.duration;
    apply(t);
    if (t < 1) { raf = requestAnimationFrame(frame); return; }
    playing = false;
    done = true;
    apply(1);                     // land exactly on the mark, never past it
    o.onDone && o.onDone(api);
  }

  const api = {
    
    play() {
      if (done && o.once) return api;
      cancelAnimationFrame(raf); t0 = null; playing = true; done = false;
      raf = requestAnimationFrame(frame); return api;
    },
    stop() { cancelAnimationFrame(raf); playing = false; return api; },
    seek(t) { api.stop(); apply(t); return api; },   // scrub-friendly
    
    reset() { done = false; return api; },
    get playing() { return playing; },
    get done() { return done; },
    options: o,
  };

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { apply(1); done = true; }
  else apply(0);
  return api;
}


export function mount(el, opts = {}) {
  el.innerHTML = markupFor(`liquid-${++uid}`);
  const fx = createLogoMitosis(el, opts);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return fx;
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      io.disconnect();            // fire once, then stop watching entirely
      fx.play();
    }
  }, { threshold: opts.threshold ?? 0.35 });
  io.observe(el);
  return fx;
}


let uid = 0;
function markupFor(id) {
  return `
<svg viewBox="${LOGO.viewBox}" fill="currentColor" role="img" aria-label="Logo forming">
  <defs>
    <filter id="${id}" x="-35%" y="-35%" width="170%" height="170%"
            color-interpolation-filters="sRGB">
      <feTurbulence data-turb type="fractalNoise" baseFrequency="0.013"
                    numOctaves="3" seed="0" result="turb"/>
      <feDisplacementMap data-disp in="SourceGraphic" in2="turb" scale="0"
                         xChannelSelector="R" yChannelSelector="G" result="wobbled"/>
      <feGaussianBlur data-goo-blur in="wobbled" stdDeviation="0" result="blur"/>
      <feColorMatrix in="blur" mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 38 -15"/>
    </filter>
  </defs>
  <g filter="url(#${id})"><path data-morph d=""/></g>
</svg>`;
}
