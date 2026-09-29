/* Probability of success: fits each [data-pos] artboard to its container and runs its loop
 * while it is on screen. The markup's own state is the finished frame, so without GSAP,
 * or under reduced motion, the element is simply complete. */
(function () {
	var ART_W = 620
	var roots = [].slice.call(document.querySelectorAll('[data-pos]'))
	if (!roots.length) return

	var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches

	/* Slider geometry the cursor has to hit, in card pixels. */
	var TRACK_X = 28, TRACK_W = 564, TRACK_Y = 373
	var at = function (p) { return p / 0.5 * TRACK_W }

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
			if (w) root.style.setProperty('--pos-fit', Math.min(1, w / ART_W).toFixed(4))
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
		var px = function (el, prop) { return parseFloat(getComputedStyle(el).getPropertyValue(prop)) }

		var stage = q('.pos-stage'), card = q('.pos-card')
		var cursor = q('.pos-cursor'), carry = q('.pos-carry')
		var ref = q('.pos-scene--ref'), adj = q('.pos-scene--adj')
		var titleRef = q('.pos-title--ref'), titleAdj = q('.pos-title--adj')
		var RULE = 'rgba(9,20,35,.07)', CLEAR = 'rgba(9,20,35,0)', GREY = '#e4e6ea'

		gsap.set([ref, titleRef], { visibility: 'visible' })

		/* Card-space boxes, measured before anything moves. The ratio keeps them right
		   whatever zoom the artboard is shown at. */
		var cardBox = card.getBoundingClientRect(), k = cardBox.width / ART_W || 1
		var box = function (el) {
			var r = el.getBoundingClientRect()
			return { x: (r.left - cardBox.left) / k, y: (r.top - cardBox.top) / k, w: r.width / k, h: r.height / k }
		}
		var sum = q('.pos-sum', ref), sumRate = q('.pos-rate', sum), sumName = q('.pos-name', sum)
		var baseMark = q('.pos-basemark', adj), track = q('.pos-track', adj)
		var from = box(sumRate), to = box(baseMark), hit = box(sumName)
		var rateColor = getComputedStyle(sumRate).backgroundColor

		var tl = gsap.timeline({ paused: true, repeat: -1, defaults: { ease: 'power2.out' } })
		var IN = { opacity: 0 }

		/* The card, then its frame. */
		tl.fromTo(card, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45 }, 0.05)
		tl.fromTo(titleRef, IN, { opacity: 1, duration: 0.4 }, 0.45)
		tl.fromTo(q('.pos-cols', ref), IN, { opacity: 1, duration: 0.35 }, 0.7)
		tl.fromTo(q('.pos-rule', ref), { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, 0.7)

		/* Filters in reading order. Each bar starts where the row above left it. */
		var prevN = 0
		qa('.pos-srow', ref).forEach(function (row, i) {
			var t = 1.0 + i * 0.45
			var n = q('.pos-n', row), rate = q('.pos-rate', row), ghost = q('.pos-ghost', row)
			var start = parseFloat(rate.parentNode.dataset.from) || 0
			if (i) tl.fromTo(row, { borderTopColor: CLEAR }, { borderTopColor: RULE, duration: 0.3 }, t)
			tl.fromTo(q('.pos-name', row), IN, { opacity: 1, duration: 0.3 }, t)
			tl.fromTo(q('.pos-line', row), { scaleX: 0 }, { scaleX: 1, duration: 0.35 }, t + 0.08)
			tl.fromTo([n, rate], IN, { opacity: 1, duration: 0.2 }, t + 0.1)
			tl.fromTo(n, { width: prevN }, { width: px(n, '--w'), duration: 0.45, ease: 'power2.inOut' }, t + 0.12)
			if (ghost) tl.fromTo(ghost, IN, { opacity: 1, duration: 0.2 }, t + 0.12)
			tl.fromTo(rate, { width: start }, { width: px(rate, '--w'), duration: 0.5, ease: 'power2.inOut' }, t + 0.2)
			prevN = px(n, '--w')
		})

		/* The class the odds rest on lands last. */
		tl.fromTo(sum, { borderTopColor: CLEAR }, { borderTopColor: 'rgba(9,20,35,.16)', duration: 0.3 }, 3.0)
		tl.fromTo(sumName, IN, { opacity: 1, duration: 0.3 }, 3.05)
		tl.fromTo(q('.pos-n', sum), { width: 0 }, { width: px(q('.pos-n', sum), '--w'), duration: 0.35 }, 3.1)
		tl.fromTo(sumRate, { width: 0, opacity: 1 }, { width: from.w, duration: 0.45 }, 3.15)

		/* The hand-off: the cursor takes the reference class, the rest of the table clears,
		   and its base rate travels down to become the mark the adjustments start from. */
		tl.fromTo(cursor, { x: 560, y: 440, opacity: 0, scale: 1 },
			{ x: hit.x + hit.w * 0.55 - 1.2, y: hit.y + hit.h / 2 - 1.2, opacity: 1, duration: 0.6 }, 3.95)
		tl.to(cursor, { scale: 0.88, duration: 0.1 }, 4.6)
		tl.fromTo(sum, { backgroundColor: CLEAR, boxShadow: '0 0 0 8px rgba(9,20,35,0)' },
			{ backgroundColor: 'rgba(9,20,35,.045)', boxShadow: '0 0 0 8px rgba(9,20,35,.045)', duration: 0.18 }, 4.6)
		tl.to(cursor, { scale: 1, duration: 0.1 }, 4.72)

		tl.to([q('.pos-cols', ref), q('.pos-rule', ref)].concat(qa('.pos-srow', ref)),
			{ opacity: 0, y: -8, duration: 0.4, ease: 'power2.in', stagger: 0.03 }, 4.75)
		tl.to([sumName, q('.pos-n', sum)], { opacity: 0, duration: 0.3, ease: 'power1.in' }, 4.78)
		tl.to(sum, { backgroundColor: CLEAR, boxShadow: '0 0 0 8px rgba(9,20,35,0)', borderTopColor: CLEAR, duration: 0.3 }, 4.78)
		tl.to(titleRef, { opacity: 0, duration: 0.3, ease: 'power1.in' }, 4.78)
		tl.to(cursor, { x: '+=26', y: '+=34', opacity: 0, duration: 0.35, ease: 'power1.in' }, 4.85)

		tl.fromTo(carry, IN, { opacity: 1, duration: 0.01 }, 4.8)
		tl.to(sumRate, { opacity: 0, duration: 0.01 }, 4.8)
		/* It flies as a bar, centred on its own box, and only becomes the tick as it lands. */
		tl.fromTo(carry,
			{ x: from.x + from.w / 2, y: from.y + from.h / 2, xPercent: -50, yPercent: -50,
				width: from.w, height: from.h, backgroundColor: rateColor, borderRadius: 3 },
			{ x: to.x + to.w / 2, y: to.y + to.h / 2, width: 28,
				duration: 0.5, ease: 'power3.inOut', immediateRender: false }, 4.8)
		tl.to(carry, { width: to.w, backgroundColor: 'rgba(9,20,35,.55)', borderRadius: 1, duration: 0.12, ease: 'power2.in' }, 5.3)
		tl.to(carry, { height: to.h, duration: 0.14, ease: 'power2.out' }, 5.42)
		tl.fromTo(titleAdj, IN, { opacity: 1, duration: 0.4 }, 4.98)

		/* The scale grows out from the base rate it was handed. */
		tl.fromTo(baseMark, IN, { opacity: 0.55, duration: 0.01 }, 5.56)
		tl.to(carry, { opacity: 0, duration: 0.01 }, 5.57)
		tl.fromTo(track, { scaleX: 0, transformOrigin: (0.20 / 0.5 * 100) + '% 50%' },
			{ scaleX: 1, duration: 0.65, ease: 'power2.inOut' }, 5.5)
		var marks = q('.pos-marks', adj)
		tl.fromTo([q('.lo', marks), q('.hi', marks), q('.base', marks)], IN, { opacity: 1, duration: 0.3 }, 5.95)

		/* Categories: findings arrive grey, then take the colour of what they say. */
		tl.fromTo(q('.pos-cols', adj), IN, { opacity: 1, duration: 0.35 }, 5.55)
		tl.fromTo(q('.pos-rule', adj), { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, 5.55)
		qa('.pos-frow', adj).forEach(function (row, i) {
			var t = 5.85 + i * 0.3
			if (i) tl.fromTo(row, { borderTopColor: CLEAR }, { borderTopColor: RULE, duration: 0.3 }, t)
			tl.fromTo(q('.pos-name', row), IN, { opacity: 1, duration: 0.3 }, t)
			qa('.pos-find .pos-line', row).forEach(function (line, j) {
				var c = getComputedStyle(line).backgroundColor
				tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.3 }, t + 0.08 + j * 0.05)
				tl.fromTo(line, { backgroundColor: GREY }, { backgroundColor: c, duration: 0.35, ease: 'power1.inOut' }, t + 0.38 + j * 0.05)
			})
			tl.fromTo(q('.pos-src', row), IN, { opacity: 1, duration: 0.3 }, t + 0.16)
			tl.fromTo(q('.pos-eff', row), IN, { opacity: 1, duration: 0.3 }, t)
			tl.fromTo(q('.pos-eff i', row), { scaleX: 0 }, { scaleX: 1, duration: 0.4 }, t + 0.42)
		})
		tl.fromTo(q('.pos-legend', adj), { opacity: 0, borderTopColor: CLEAR }, { opacity: 1, borderTopColor: RULE, duration: 0.35 }, 7.85)

		/* Fern's proposal, then the analyst's own call. */
		tl.fromTo(q('.pos-prop', adj), { scaleY: 0, opacity: 0 }, { scaleY: 1, opacity: 0.72, duration: 0.35 }, 8.15)

		var thumb = q('.pos-thumb', adj), knob = q('i', thumb), you = q('.you', marks)
		var press = TRACK_X + at(0.29), final = TRACK_X + at(0.23)
		tl.fromTo(thumb, { left: at(0.29) }, { left: at(0.29), duration: 0.01 }, 8.45)
		tl.fromTo(knob, { scale: 0 }, { scale: 1, duration: 0.3, ease: 'back.out(1.8)' }, 8.45)
		tl.fromTo(cursor, { x: 640, y: 470, opacity: 0, scale: 1 },
			{ x: press - 1.2, y: TRACK_Y - 1.2, opacity: 1, duration: 0.6, immediateRender: false }, 8.65)
		tl.to(cursor, { scale: 0.88, duration: 0.1 }, 9.3)
		tl.to(knob, { scale: 1.12, duration: 0.15 }, 9.3)
		tl.to(cursor, { x: final - 1.2, duration: 0.75, ease: 'power2.inOut' }, 9.45)
		tl.to(thumb, { left: at(0.23), duration: 0.75, ease: 'power2.inOut' }, 9.45)
		tl.to([cursor, knob], { scale: 1, duration: 0.12 }, 10.25)
		tl.fromTo(you, IN, { opacity: 1, duration: 0.3 }, 10.27)
		tl.to(cursor, { x: final + 20, y: TRACK_Y - 56, opacity: 0, duration: 0.45, ease: 'power1.in' }, 10.5)

		/* Hold, then dissolve and start again. */
		tl.to(stage, { opacity: 0, duration: 0.55, ease: 'power1.inOut' }, 11.4)
		tl.to({}, { duration: 0.15 }, 11.95)
		return tl
	}
})()
