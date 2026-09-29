/* Catalyst calendar: fits each [data-cc] artboard to its container and runs its loop while it
 * is on screen. The markup's own state is the finished frame, so without GSAP, or under
 * reduced motion, the element is simply complete. */
(function () {
	var ART_W = 620
	var roots = [].slice.call(document.querySelectorAll('[data-cc]'))
	if (!roots.length) return

	var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches

	roots.forEach(function (root) {
		fit(root)
		if (reduced || typeof gsap === 'undefined') return
		var tl = build(root)
		root.vsTimeline = tl
		if (!window.__posFreeze) run(root, tl)
	})

	function fit(root) {
		var set = function () {
			var w = root.clientWidth
			if (w) root.style.setProperty('--cc-fit', Math.min(1, w / ART_W).toFixed(4))
		}
		set()
		if ('ResizeObserver' in window) new ResizeObserver(set).observe(root)
		else window.addEventListener('resize', set)
	}

	function run(root, tl) {
		var visible = !('IntersectionObserver' in window)
		var ready = false
		var go = function () { (ready && visible && !document.hidden) ? tl.play() : tl.pause() }
		if (!visible) {
			new IntersectionObserver(function (entries) {
				visible = entries[0].isIntersecting
				go()
			}, { rootMargin: '80px' }).observe(root)
		}
		document.addEventListener('visibilitychange', go)
		var start = function () { ready = true; go() }
		document.fonts && document.fonts.ready ? document.fonts.ready.then(start) : start()
	}

	function build(root) {
		var q = function (s, el) { return (el || root).querySelector(s) }
		var qa = function (s, el) { return [].slice.call((el || root).querySelectorAll(s)) }
		var IN = { opacity: 0 }
		var GREY = '#cdd1d7', LINE = '#e1e4e8'

		var stage = q('.cc-stage'), card = q('.cc-card'), pop = q('.cc-pop'), news = q('.cc-news')

		/* Type the news headline in, character by character. */
		var what = q('.what', news), text = what.textContent
		what.textContent = ''
		var chars = text.split('').map(function (ch) {
			var s = document.createElement('span')
			s.textContent = ch
			what.appendChild(s)
			return s
		})

		var tl = gsap.timeline({ paused: true, repeat: -1, defaults: { ease: 'power2.out' } })

		/* The month: frame, days, dates, today. */
		tl.fromTo(card, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45 }, 0.05)
		tl.fromTo(q('.cc-title'), IN, { opacity: 1, duration: 0.4 }, 0.35)
		tl.fromTo(qa('.cc-wd'), IN, { opacity: 1, duration: 0.3, stagger: 0.04 }, 0.55)
		tl.fromTo(qa('.cc-hr'), { scaleX: 0 }, { scaleX: 1, duration: 0.5, stagger: 0.05, ease: 'power2.inOut' }, 0.6)
		tl.fromTo(qa('.cc-vr'), { scaleY: 0 }, { scaleY: 1, duration: 0.5, stagger: 0.05, ease: 'power2.inOut' }, 0.7)
		tl.fromTo(qa('.cc-date:not(.is-today)'), IN, {
			opacity: 1, duration: 0.25, stagger: 0.02,
		}, 0.95)
		tl.fromTo(q('.cc-today'), { scale: 0 }, { scale: 1, duration: 0.3, ease: 'back.out(2)' }, 1.35)
		tl.fromTo(q('.cc-date.is-today'), IN, { opacity: 1, duration: 0.2 }, 1.45)

		/* What is scheduled, in reading order. The month looks calm and complete. */
		var evs = qa('.cc-ev:not(.cc-news)')
		evs.forEach(function (ev, i) {
			var t = 1.6 + i * 0.16
			tl.fromTo(ev, { opacity: 0, y: 4 }, { opacity: ev.classList.contains('past') ? 0.5 : 1, y: 0, duration: 0.35 }, t)
			tl.fromTo(q('.rule', ev), { scaleY: 0 }, { scaleY: 1, duration: 0.3 }, t)
			tl.fromTo(q('.line', ev), { scaleX: 0 }, { scaleX: 1, duration: 0.35 }, t + 0.08)
		})

		/* News that was never on the calendar lands on today. */
		tl.fromTo(news, IN, { opacity: 1, duration: 0.01 }, 3.7)
		tl.fromTo(q('.rule', news), { scaleY: 0 }, { scaleY: 1, duration: 0.3 }, 3.7)
		tl.fromTo(q('.co', news), { scaleX: 0 }, { scaleX: 1, duration: 0.3 }, 3.82)
		tl.fromTo(chars, IN, { opacity: 1, duration: 0.01, stagger: 0.04, ease: 'none' }, 3.98)

		/* The rest of the month is reread. Most of it is untouched. */
		qa('.cc-ev.dim').forEach(function (ev, i) {
			tl.to(ev, { opacity: 0.55, duration: 0.35, ease: 'power1.inOut' }, 5.0 + i * 0.08)
		})

		/* Two entries are touched, each for a scientific reason. */
		;['green', 'amber'].forEach(function (s, k) {
			var t = 5.8 + k * 0.7
			var ev = q('.cc-ev[data-s="' + s + '"]'), tint = q('.cc-tint[data-s="' + s + '"]')
			var rule = q('.rule', ev), line = q('.line', ev)
			var ruleC = getComputedStyle(rule).backgroundColor, lineC = getComputedStyle(line).backgroundColor
			tl.fromTo(tint, IN, { opacity: 1, duration: 0.45, ease: 'power1.inOut' }, t)
			tl.fromTo(rule, { backgroundColor: GREY }, { backgroundColor: ruleC, duration: 0.35, immediateRender: true }, t)
			tl.fromTo(line, { backgroundColor: LINE }, { backgroundColor: lineC, duration: 0.35, immediateRender: true }, t)
			tl.fromTo(q('.cc-reason[data-s="' + s + '"]'), { opacity: 0, y: 3 }, { opacity: 1, y: 0, duration: 0.35 }, t + 0.2)
		})

		/* What changed for the amber entry. */
		tl.fromTo(pop, { opacity: 0, scale: 0.96, x: -6 }, { opacity: 1, scale: 1, x: 0, duration: 0.4 }, 7.3)
		tl.fromTo(qa('.head b, .head span', pop), IN, { opacity: 1, duration: 0.3, stagger: 0.08 }, 7.5)
		tl.fromTo(q('.sep', pop), { scaleX: 0 }, { scaleX: 1, duration: 0.35 }, 7.7)
		tl.fromTo(q('.bar .k', pop), IN, { opacity: 1, duration: 0.3 }, 7.85)
		tl.fromTo(q('.bar .old', pop), IN, { opacity: 1, duration: 0.3 }, 8.0)
		tl.fromTo(q('.bar .old i', pop), { scaleX: 0 }, { scaleX: 1, duration: 0.25, ease: 'power1.inOut' }, 8.25)
		tl.fromTo(q('.bar .new', pop), { opacity: 0, y: 3 }, { opacity: 1, y: 0, duration: 0.3 }, 8.45)
		tl.fromTo(q('.src', pop), IN, { opacity: 1, duration: 0.3 }, 8.75)

		/* Hold, then dissolve and start again. */
		tl.to(stage, { opacity: 0, duration: 0.55, ease: 'power1.inOut' }, 10.9)
		tl.to({}, { duration: 0.15 }, 11.45)
		return tl
	}
})()
