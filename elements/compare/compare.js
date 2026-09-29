/* Drives the matrix through a row-by-row resolve, hold, and reset cycle. */

const ENTER_STEP = 190
const CELL_MIN = 190
const CELL_MAX = 460
const ROW_OVERLAP = 0.5
const START_DELAY = 320
const HOLD_MS = 3000
const EXIT_STEP = 110

const rand = (a, b) => a + Math.random() * (b - a)

export function mount(root) {
  const matrix = root.querySelector('.matrix-mock')
  if (!matrix) return { destroy() {} }

  const rows = Array.from(root.querySelectorAll('tr.matrix-mock__row'))
  const cells = Array.from(root.querySelectorAll('.matrix-mock__cell[data-loading]'))
  if (!cells.length) return { destroy() {} }

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
  const timers = new Set()
  const later = (fn, ms) => {
    const id = setTimeout(() => { timers.delete(id); fn() }, ms)
    timers.add(id)
    return id
  }
  const clearAll = () => { timers.forEach(clearTimeout); timers.clear() }

  const byRow = rows.map((r) =>
    Array.from(r.querySelectorAll('.matrix-mock__cell[data-loading]'))
      .sort((a, b) => a.cellIndex - b.cellIndex))

  const resolve = (cell) => {
    cell.removeAttribute('data-loading')
    cell.classList.add('vs-pop')
  }
  const unresolve = (cell) => {
    cell.classList.remove('vs-pop')
    cell.setAttribute('data-loading', '')
  }
  const reset = () => {
    clearAll()
    rows.forEach((r) => r.classList.remove('vs-in'))
    cells.forEach((c) => {
      c.classList.remove('vs-pop')
      c.setAttribute('data-loading', '')
    })
  }

  let running = false

  function cycle() {
    let cursor = START_DELAY
    byRow.forEach((rowCells, i) => {
      const rowAt = START_DELAY + i * ENTER_STEP
      later(() => rows[i].classList.add('vs-in'), rowAt)
      /* Keep completion uneven while preserving the left-to-right dependency. */
      let at = Math.max(cursor, rowAt + 260)
      rowCells.forEach((cell) => {
        later(() => resolve(cell), at)
        at += rand(CELL_MIN, CELL_MAX)
      })
      cursor = rowAt + (at - rowAt) * ROW_OVERLAP
    })
    const filled = cursor + CELL_MAX * 2

    /* Reset rows from the bottom so resolved cells never disappear in view. */
    const exitAt = filled + HOLD_MS
    rows.forEach((row, i) => {
      const k = rows.length - 1 - i
      later(() => {
        row.classList.remove('vs-in')
        later(() => byRow[i].forEach(unresolve), 420)
      }, exitAt + k * EXIT_STEP)
    })

    later(cycle, exitAt + rows.length * EXIT_STEP + 620)
  }

  function run() {
    if (running) return
    running = true

    if (reduced) {
      cells.forEach((c) => c.removeAttribute('data-loading'))
      rows.forEach((r) => r.classList.add('vs-in'))
      return
    }
    cycle()
  }

  /* Gate on the card because the process section intersects before this panel. */
  const card = matrix.getRootNode().host?.closest('.item_process')
  const inFrame = () => {
    const r = (card || matrix).getBoundingClientRect()
    return r.left < innerWidth * 0.55 && r.right > innerWidth * 0.2 &&
           r.top < innerHeight && r.bottom > 0
  }
  /* Use a small hysteresis band so the animation cannot chatter at an edge. */
  const away = () => {
    const r = (card || matrix).getBoundingClientRect()
    return r.left > innerWidth * 0.60 || r.right < innerWidth * 0.1 ||
           r.top > innerHeight || r.bottom < 0
  }

  let raf = 0
  const check = () => {
    raf = 0
    if (!running && inFrame()) run()
    /* Re-arm after the reader leaves the card. */
    else if (running && away()) { running = false; reset() }
  }
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(check) }

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  /* The transformed scroller can move without a native scroll event. */
  const poll = setInterval(check, 350)
  check()

  return {
    destroy() {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
      clearInterval(poll)
      clearAll()
    },
  }
}
