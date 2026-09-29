/* Mounts and sizes the homepage process-card visuals. Compare uses a shadow
 * root to isolate its broad table styles from the page. */

const LG = matchMedia('(min-width:1024px)')

/* The cards move horizontally, so observe the process section and retain a
 * timed fallback for browsers that do not report the transformed intersection. */
function whenNear(el, fn) {
  let done = false
  const once = () => {
    if (done) return
    done = true
    fn()
  }

  if ('IntersectionObserver' in window) {
    const target = el.closest('#process_block') || el
    const io = new IntersectionObserver((entries, obs) => {
      if (entries.some((e) => e.isIntersecting)) {
        obs.disconnect()
        once()
      }
    }, { rootMargin: '100% 0px' })
    io.observe(target)
  }

  /* Keep the fallback clear of the opening animation and first paint. */
  const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 0))
  setTimeout(() => idle(once, { timeout: 1000 }), 3200)
}

async function mountCompare(mount) {
  if (mount.querySelector('.vs-el-inner')) return
  /* Keep the outer mount available as the narrow-screen scroll port. */
  const host = document.createElement('div')
  host.className = 'vs-el-inner'
  /* :host() matches this inner element, so copy the fit mode onto it. */
  const fit = mount.getAttribute('data-fit')
  if (fit) host.setAttribute('data-fit', fit)
  mount.append(host)
  /* Size it now: on a slow phone this can land after every timed fit below,
     which would leave the table unscaled and cropped in its card. */
  requestAnimationFrame(fitElements)
  const shadow = host.attachShadow({ mode: 'open' })

  const link = Object.assign(document.createElement('link'), {
    rel: 'stylesheet',
    href: '/elements/compare/compare.css',
  })
  shadow.append(link)

  /* Reveal after styles load, with a timeout so a failed request cannot hide it. */
  let revealed = false
  const reveal = () => {
    if (revealed) return
    revealed = true
    mount.setAttribute('data-vs-ready', '')
  }
  if (link.sheet) reveal()
  else {
    link.addEventListener('load', reveal, { once: true })
    link.addEventListener('error', reveal, { once: true })
  }
  setTimeout(reveal, 3000)

  try {
    const res = await fetch('/elements/compare/compare.html')
    if (!res.ok) throw new Error('HTTP ' + res.status)
    const holder = document.createElement('div')
    holder.innerHTML = await res.text()
    shadow.append(...holder.childNodes)

    const { mount: factory } = await import('/elements/compare/compare.js')
    mount.__vs = factory(shadow)
  } catch (err) {
    console.warn('[elements] compare did not mount:', err)
    reveal()
  }
}

function boot() {
  const compare = document.querySelector('[data-vs-element="compare"]')
  if (compare) whenNear(compare, () => mountCompare(compare))
}

boot()
LG.addEventListener('change', boot)

/* Scale fixed-layout artwork to the card's available band. */
function fitElements() {
  document.querySelectorAll('[data-vs-element]').forEach((mount) => {
    const inner = mount.querySelector(
      '[data-evaluate-source-marquee], [data-investigate-project-loop], ' +
      '[data-conclude-packet], .vs-el-inner')
    if (!inner) return
    const bw = mount.clientWidth
    const bh = mount.clientHeight
    let nw = inner.offsetWidth
    let nh = inner.offsetHeight
    if (!bw || !bh || !nw || !nh) return

    /* Conclude has intentional empty inset, so fit its rendered artwork bounds. */
    let cap = 1
    if (inner.matches('[data-conclude-packet]')) {
      const scale = (new DOMMatrix(getComputedStyle(inner).transform).a) || 1
      let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity
      inner.querySelectorAll('*').forEach((el) => {
        const r = el.getBoundingClientRect()
        if (!r.width || !r.height) return
        x1 = Math.min(x1, r.left); y1 = Math.min(y1, r.top)
        x2 = Math.max(x2, r.right); y2 = Math.max(y2, r.bottom)
      })
      if (isFinite(x1) && scale > 0) {
        /* Divide out the current scale to keep repeated measurements stable. */
        nw = Math.min(nw, (x2 - x1) / scale)
        nh = Math.min(nh, (y2 - y1) / scale)
        cap = 1.6
      }
    }

    const fit = Math.min(cap, bw / nw, bh / nh)
    mount.style.setProperty('--vs-fit', fit.toFixed(3))
  })
}

let fitTimer
const scheduleFit = () => { clearTimeout(fitTimer); fitTimer = setTimeout(fitElements, 120) }
window.addEventListener('resize', scheduleFit)
window.addEventListener('load', fitElements)
if (document.readyState === 'complete') fitElements()
else document.addEventListener('DOMContentLoaded', fitElements)
/* Compare arrives asynchronously, so measure again after it mounts. */
setTimeout(fitElements, 1200)
setTimeout(fitElements, 4200)
/* And whenever a card's box changes size for any other reason (fonts, images
   above it, the phone's toolbar), not only on window resize. */
if (window.ResizeObserver) {
  const boxes = new ResizeObserver(scheduleFit)
  document.querySelectorAll('[data-vs-element]').forEach((mount) => boxes.observe(mount))
}
