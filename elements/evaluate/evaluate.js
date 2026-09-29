/* Per-pill alpha field for the source marquee. Work is gated by visibility and
 * unchanged masks are not written again. */
(() => {
  const root = document.querySelector('[data-evaluate-source-marquee] .bento__marquee');
  if (!root) return;

  /* A host-level edge mask replaces the per-pill mask when available. */
  const host = root.closest('[data-vs-element="evaluate"]');
  if (host && getComputedStyle(host.querySelector('[data-evaluate-source-marquee]')).maskImage !== 'none') return;

  const pills = Array.from(root.querySelectorAll('.bento__pill'));
  const fadeInside = 28;
  const fadeOutside = 20;

  const clamp = value => Math.min(1, Math.max(0, value));
  const smoothstep = value => value * value * (3 - 2 * value);

  function pillLocalReveal(side, progress) {
    const direction = side === 'left' ? 'to right' : 'to left';
    const innerAlpha = smoothstep(progress);
    const edgeAlpha = smoothstep(clamp((progress - .55) / .45));
    const mix = amount => edgeAlpha + (innerAlpha - edgeAlpha) * amount;
    const alpha = value => value.toFixed(3);

    return `linear-gradient(${direction},
      rgba(0,0,0,${alpha(edgeAlpha)}) 0%,
      rgba(0,0,0,${alpha(mix(.08))}) 18%,
      rgba(0,0,0,${alpha(mix(.28))}) 38%,
      rgba(0,0,0,${alpha(mix(.62))}) 62%,
      rgba(0,0,0,${alpha(mix(.88))}) 82%,
      rgba(0,0,0,${alpha(innerAlpha)}) 100%)`;
  }

  /* Last value written per pill. */
  const applied = new Array(pills.length).fill(null);

  function updatePillMasks() {
    const bounds = root.getBoundingClientRect();
    const rects = pills.map(pill => pill.getBoundingClientRect());

    rects.forEach((rect, index) => {
      const pill = pills[index];
      const range = fadeInside + fadeOutside;
      const leftProgress = clamp(
        (rect.left - (bounds.left - fadeOutside)) / range,
      );
      const rightProgress = clamp(
        ((bounds.right + fadeOutside) - rect.right) / range,
      );
      const progress = Math.min(leftProgress, rightProgress);

      let value;
      if (progress < .999) {
        const side = leftProgress <= rightProgress ? 'left' : 'right';
        value = pillLocalReveal(side, progress);
      } else {
        value = 'none';
      }

      if (applied[index] === value) return;
      applied[index] = value;
      pill.style.opacity = '1';
      pill.style.webkitMaskImage = value;
      pill.style.maskImage = value;
    });
  }

  let frame = 0

  /* Transformed, clipped cards make intersection observers unreliable here. */
  function onScreen() {
    const r = root.getBoundingClientRect()
    if (r.width === 0 && r.height === 0) return false
    const m = 200
    return r.bottom > -m && r.top < innerHeight + m &&
           r.right > -m && r.left < innerWidth + m
  }

  let wasOn = false
  function tick() {
    const on = onScreen()
    /* Recalculate every mask after returning to the viewport. */
    if (on && !wasOn) applied.fill(null)
    wasOn = on
    if (on) updatePillMasks()
    frame = requestAnimationFrame(tick)
  }

  function sync() {
    const shouldRun = document.visibilityState !== 'hidden'
    if (shouldRun && !frame) frame = requestAnimationFrame(tick)
    else if (!shouldRun && frame) {
      cancelAnimationFrame(frame)
      frame = 0
    }
  }

  document.addEventListener('visibilitychange', sync)
  sync()

  /* Prevent an unmasked first frame. */
  updatePillMasks();
})();
