/* Closing plate on the finance page. The plate and its copy are held below the header over the
   same distance the homepage brief keeps its copy parked: the image's height less the copy's.
   Then the plate scrolls on while the copy stays parked, until the two feet meet. When the page
   ends too soon for that, the copy makes up the difference by drifting down the picture while
   the plate is held. On desktop the picture assembles across that whole way and comes together
   as the copy lands, with the button rising in the same last beat; on phones it assembles while
   the plate is held. Three and the element load only when the section comes near. */
const ELEMENT = '/elements/scroll-converge/scroll-converge.js'

/* On phones, the share of the pin spent holding the finished picture before the plate lets go. */
const HOLD = .15

/* On desktop, the button rises over this last share of the way, as the photograph sharpens. */
const POP = .15

/* On desktop, the share kept of the space above the footer that a full settle would need. The
   rest is cut so the page does not end on a large gap; the copy's drift covers what that cuts. */
const END_SPACE = .35

const section = document.querySelector('[data-fin-converge]')
if (section && canRun()) arm(section)

function canRun() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    const probe = document.createElement('canvas')
    return !!(probe.getContext('webgl2') || probe.getContext('webgl'))
  } catch (e) {
    return false
  }
}

function arm(section) {
  const runway = section.querySelector('[data-fin-converge-runway]')
  const plate = section.querySelector('[data-fin-converge-plate]')
  const pin = section.querySelector('[data-fin-converge-pin]')
  /* The effect samples the picture at about 172x130, so it gets a small copy
     (data-fin-converge-sample) rather than waiting on the full photo. */
  const image = plate.dataset.finConvergeSample || plate.querySelector('img').getAttribute('src')
  const desktop = matchMedia('(min-width:1024px)')
  const host = section.parentElement.lastElementChild
  const footer = document.querySelector('.lc-footer')
  let pinned = null
  let progress = () => 0
  let offset = 0
  let scrub = 0
  let pinH = 0
  let reach = Infinity
  let travel = 0
  let drift = 0
  let landing = 0

  /* The plate's sticky top is the pin's offset, so it is read back from CSS rather than repeated. */
  function layout() {
    const plateH = plate.offsetHeight
    pinH = pin.offsetHeight
    if (desktop.matches) {
      scrub = Math.max(plateH - pinH, plateH * .25)
      section.style.setProperty('--fin-scrub', scrub + 'px')
    } else {
      scrub = 0
      section.style.removeProperty('--fin-scrub')
    }
    offset = parseFloat(getComputedStyle(plate).top) || 0

    /* Each pin ends when the runway's bottom rises to the foot of what is pinned: the plate on
       phones, the copy beside it on desktop, which parks for longer. That takes a viewport less the
       park line and that element of page beneath the runway. The section sits near the footer,
       so when the page is shorter than that the difference is added below the last block; on
       desktop only END_SPACE of it, measured with the gap the page already leaves. */
    const last = desktop.matches ? pinH : plateH
    const tail = parseFloat(host.style.marginBottom) || 0
    const runwayBottom = runway.getBoundingClientRect().bottom + scrollY
    const below = document.documentElement.scrollHeight - runwayBottom - tail
    const full = Math.max(0, Math.ceil(innerHeight - offset - last - below) + 1)
    let add = full
    if (desktop.matches && footer) {
      const gap = footer.getBoundingClientRect().top - host.getBoundingClientRect().bottom - tail
      add = Math.max(0, Math.round(END_SPACE * (gap + full) - gap))
    }
    host.style.marginBottom = add + 'px'

    /* How far into the pin the page can actually scroll, and so how much of the copy's way down
       the picture the page's end would cut off. That much becomes the drift. */
    const maxY = document.documentElement.scrollHeight - innerHeight
    reach = offset - (runway.getBoundingClientRect().top + scrollY) + maxY
    travel = desktop.matches ? Math.max(0, plateH - pinH) : 0
    drift = travel - Math.min(travel, Math.max(0, reach - scrub))
    landing = Math.min(reach, scrub + travel)

    if (pinned) progress = desktop.matches ? way : pinned(runway, plate, { offset, hold: HOLD })
    track()
  }

  /* Desktop: 0 as the plate reaches its line, 1 as the copy lands on the picture's foot. */
  function way() {
    const scrolled = offset - runway.getBoundingClientRect().top
    return landing > 0 ? Math.min(1, Math.max(0, scrolled / landing)) : 1
  }

  /* On desktop the copy drifts down while the plate is held, then holds while the picture scrolls
     up to meet it, so the two feet meet where the page ends; the button rises in the last beat of
     that way, as the picture comes together. On phones, where the copy is not held, it rises while
     the finished picture holds, and is up as the plate lets go. */
  function track() {
    const r = runway.getBoundingClientRect()
    const scrolled = offset - r.top
    let t
    if (desktop.matches) {
      const drifted = scrub > 0 ? drift * Math.min(1, Math.max(0, scrolled / scrub)) : 0
      section.style.setProperty('--fin-drift', drifted.toFixed(2) + 'px')
      t = (way() - (1 - POP)) / POP
    } else {
      const held = r.height - plate.offsetHeight
      t = held > 0 ? (scrolled - held * (1 - HOLD)) / (held * HOLD) : 1
    }
    section.style.setProperty('--fin-act', Math.min(1, Math.max(0, t)).toFixed(4))
  }

  function disarm() {
    section.classList.remove('is-armed')
    removeEventListener('scroll', track)
    for (const prop of ['--fin-scrub', '--fin-act', '--fin-drift']) section.style.removeProperty(prop)
    host.style.marginBottom = ''
  }

  section.classList.add('is-armed')
  layout()
  addEventListener('scroll', track, { passive: true })
  const sizes = new ResizeObserver(layout)
  sizes.observe(plate)
  sizes.observe(pin)
  if (footer) sizes.observe(footer)
  if (host !== section) sizes.observe(host)
  addEventListener('resize', layout)
  desktop.addEventListener('change', layout)

  /* Fetch the element, three and the sample now, not when the reader is
     already on the section: on a phone network they arrived only after the
     reader had scrolled past, so the picture never assembled. The renderer is
     still built only when the section comes near. */
  const element = import(ELEMENT)
  element.catch(() => {})
  const warm = new Image()
  warm.crossOrigin = 'anonymous'
  warm.src = image

  const near = new IntersectionObserver((entries) => {
    if (!entries.some((e) => e.isIntersecting)) return
    near.disconnect()
    start()
  }, { rootMargin: '0px 0px 150% 0px' })
  near.observe(section)

  async function start() {
    try {
      const { createScrollConverge, pinnedProgress } = await element
      pinned = pinnedProgress
      layout()
      section.fx = createScrollConverge({
        image,
        mount: plate,
        fit: 'mount',
        frame: 'cover',
        rows: 130,
        ease: 1,
        progress: () => progress(),
        onReady: () => section.classList.add('is-ready'),
      })
    } catch (e) {
      sizes.disconnect()
      disarm()
    }
  }
}
