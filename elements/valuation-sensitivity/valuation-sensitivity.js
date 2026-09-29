/* Valuation sensitivity: fits each [data-sn] artboard to its container and runs its loop while
 * it is on screen. The markup's own state is the finished frame, so without GSAP, or under
 * reduced motion, the element is simply complete. */
(function () {
	var ART_W = 620
	var roots = [].slice.call(document.querySelectorAll('[data-sn]'))
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
			if (w) root.style.setProperty('--sn-fit', Math.min(1, w / ART_W).toFixed(4))
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

		var stage = q('.sn-stage'), card = q('.sn-card'), cursor = q('.sn-cursor'), detail = q('.sn-detail')
		var rate = q('.sn-lever--rate'), rateThumb = q('.thumb', rate), rateKnob = q('.thumb i', rate)
		var cells = qa('.sn-cell')

		/* Cells start at their values before the input moves; the finished frame's colours
		   come with the recompute. */
		cells.forEach(function (c) {
			c._post = getComputedStyle(c).backgroundColor
			c.style.background = c.dataset.pre
			c._b = c.querySelector('b')
			c._wPost = parseFloat(getComputedStyle(c).getPropertyValue('--w'))
			c._b.style.width = c.dataset.wpre + 'px'
		})

		var tl = gsap.timeline({ paused: true, repeat: -1, defaults: { ease: 'power2.out' } })

		/* Title and inputs. */
		tl.fromTo(card, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45 }, 0.05)
		tl.fromTo(q('.sn-title'), IN, { opacity: 1, duration: 0.4 }, 0.35)
		qa('.sn-lever').forEach(function (lv, i) {
			var t = 0.55 + i * 0.12
			tl.fromTo(q('.k', lv), IN, { opacity: 1, duration: 0.3 }, t)
			tl.fromTo(q('.track', lv), { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power2.inOut' }, t)
			tl.fromTo(q('.thumb i', lv), { scale: 0 }, { scale: 1, duration: 0.3, ease: 'back.out(1.8)' }, t + 0.35)
		})
		tl.fromTo(rateThumb, { '--t': '30%' }, { '--t': '30%', duration: 0.01 }, 0.55)

		/* The table, row by row. */
		tl.fromTo([q('.sn-axis')].concat(qa('.sn-col')), IN, { opacity: 1, duration: 0.3, stagger: 0.04 }, 0.95)
		tl.fromTo(q('.sn-headrule'), { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, 0.95)
		qa('.sn-row').forEach(function (row, r) {
			var t = 1.15 + r * 0.22
			tl.fromTo(row, IN, { opacity: 1, duration: 0.3 }, t)
			tl.fromTo(qa('.sn-cell[data-r="' + r + '"]'), IN, { opacity: 1, duration: 0.3, stagger: 0.05 }, t + 0.05)
			tl.fromTo(qa('.sn-rowrule')[r], { scaleX: 0 }, { scaleX: 1, duration: 0.4 }, t + 0.1)
		})
		tl.fromTo(q('.sn-base'), { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.35 }, 2.55)
		tl.fromTo(q('.sn-legend .b'), IN, { opacity: 1, duration: 0.3 }, 2.65)

		/* The discount rate goes up, and the whole table recomputes. */
		var L = 28, W = 264, Y = 92
		tl.fromTo(cursor, { x: 600, y: 300, opacity: 0, scale: 1 }, { x: L + W * 0.30 - 1.2, y: Y - 1.2, opacity: 1, duration: 0.6 }, 3.1)
		tl.to(cursor, { scale: 0.88, duration: 0.1 }, 3.75)
		tl.to(rateKnob, { scale: 1.12, duration: 0.15 }, 3.75)
		tl.to(cursor, { x: L + W * 0.55 - 1.2, duration: 0.8, ease: 'power2.inOut' }, 3.9)
		tl.to(rateThumb, { '--t': '55%', duration: 0.8, ease: 'power2.inOut' }, 3.9)
		cells.forEach(function (c) {
			var d = (+c.dataset.r + +c.dataset.c) * 0.05
			tl.to(c, { backgroundColor: c._post, duration: 0.5, ease: 'power1.inOut' }, 4.0 + d)
			tl.fromTo(c._b, { width: +c.dataset.wpre }, { width: c._wPost, duration: 0.5, ease: 'power1.inOut' }, 4.0 + d)
		})
		tl.to([cursor, rateKnob], { scale: 1, duration: 0.12 }, 4.75)
		tl.to(cursor, { x: '+=40', y: '+=60', opacity: 0, duration: 0.45, ease: 'power1.in' }, 4.9)

		/* The reader opens the base case: the cell grows into its valuation build. */
		var base = q('.sn-base')
		var cell = { left: parseFloat(base.style.left), top: parseFloat(base.style.top), width: 88.4, height: 44, borderRadius: 6 }
		var full = { left: 0, top: 0, width: 620, height: 440, borderRadius: 16 }
		tl.fromTo(cursor, { x: 600, y: 420, opacity: 0, scale: 1 },
			{ x: cell.left + 44 - 1.2, y: cell.top + 22 - 1.2, opacity: 1, duration: 0.6, immediateRender: false }, 5.3)
		tl.to(cursor, { scale: 0.88, duration: 0.1 }, 5.95)
		tl.to(base, { boxShadow: '0 0 0 4px rgba(182,217,243,.45)', duration: 0.15 }, 5.95)
		tl.to(cursor, { scale: 1, opacity: 0, duration: 0.3 }, 6.07)
		tl.fromTo(detail, { visibility: 'hidden' }, { visibility: 'visible', duration: 0.01 }, 6.1)
		tl.fromTo(detail, cell, Object.assign({ duration: 0.6, ease: 'power3.inOut' }, full), 6.1)

		var head = q('.sn-head', detail), cols = q('.sn-cols', detail), method = q('.sn-method', detail)
		var menu = q('.sn-menu', detail), pick = q('.sn-menu .pick', detail)
		var items = qa('.sn-body > *', detail)
		var R = function (k) { return q('[data-k="' + k + '"]', detail) }
		var nb = function (k) { return q('.nb', R(k)) }
		var roy = R('roy'), pos = R('pos')
		var FLASH = 'rgba(42,130,203,.08)', CLEARB = 'rgba(42,130,203,0)'
		var flash = function (keys, t) {
			keys.forEach(function (k, i) {
				tl.fromTo(R(k), { backgroundColor: CLEARB }, { backgroundColor: FLASH, duration: 0.18, yoyo: true, repeat: 1, ease: 'sine.inOut' }, t + i * 0.05)
			})
		}

		/* The house model fills in: the frame, then each line in reading order. */
		tl.fromTo(qa(':scope > *', head), IN, { opacity: 1, duration: 0.3, stagger: 0.07 }, 6.65)
		tl.fromTo(cols, IN, { opacity: 1, duration: 0.3 }, 6.8)
		var t = 6.95
		items.forEach(function (it) {
			if (it === roy) return
			if (it.classList.contains('sn-rule')) {
				tl.fromTo(it, { scaleX: 0, transformOrigin: '0 50%' }, { scaleX: 1, duration: 0.35 }, t)
				t += 0.05
				return
			}
			if (it.classList.contains('sn-sec') || it.classList.contains('sn-add')) {
				tl.fromTo(it, IN, { opacity: 1, duration: 0.3 }, t)
				t += 0.08
				return
			}
			tl.fromTo(q('.li', it), IN, { opacity: 1, duration: 0.28 }, t)
			qa('.bs .gl', it).forEach(function (g) { tl.fromTo(g, { scaleX: 0, transformOrigin: '0 50%' }, { scaleX: 1, duration: 0.35 }, t + 0.05) })
			var l = q('.bs .b1 ~ .b2, .bs > .lk, .bs > .vs, .bs > .rt', it)
			if (l) tl.fromTo(l, IN, { opacity: 1, duration: 0.3 }, t + 0.12)
			tl.fromTo(q('.vl', it), IN, { opacity: 1, duration: 0.25 }, t + 0.08)
			var b = q('.nb', it)
			if (b) tl.fromTo(b, { scaleX: 0, transformOrigin: '100% 50%' }, { scaleX: 1, duration: 0.3 }, t + 0.1)
			t += 0.12
		})

		/* Edit one: the firm's method. Risk moves out of the probability line and into the rate;
		   the rate is implied by Fern's PoS. Every value it touches recomputes in place. */
		var mx = 620 - 28 - 40, my = 26 + 10
		tl.fromTo(cursor, { x: 600, y: 200, opacity: 0, scale: 1 },
			{ x: mx - 1.2, y: my - 1.2, opacity: 1, duration: 0.55, immediateRender: false }, 9.25)
		tl.to(cursor, { scale: 0.88, duration: 0.1 }, 9.85)
		tl.to(cursor, { scale: 1, duration: 0.1 }, 9.95)
		tl.fromTo(method, { backgroundColor: 'rgba(25,34,45,.04)' }, { backgroundColor: 'rgba(25,34,45,.08)', duration: 0.15 }, 9.85)
		tl.fromTo(menu, { visibility: 'hidden', opacity: 0, scale: 0.97 }, { visibility: 'visible', opacity: 1, scale: 1, duration: 0.2 }, 9.9)
		tl.to(cursor, { x: 620 - 26 - 192 + 64 - 1.2, y: 56 + 4 + 28 + 14 - 1.2, duration: 0.4, ease: 'power2.inOut' }, 10.1)
		tl.fromTo(pick, { backgroundColor: 'rgba(25,34,45,0)' }, { backgroundColor: 'rgba(25,34,45,.05)', duration: 0.15 }, 10.42)
		tl.to(cursor, { scale: 0.88, duration: 0.1 }, 10.6)
		tl.to(cursor, { scale: 1, duration: 0.1 }, 10.7)
		tl.to(menu, { opacity: 0, duration: 0.15 }, 10.72)
		tl.set(menu, { visibility: 'hidden' }, 10.88)
		tl.to(method, { backgroundColor: 'rgba(25,34,45,.04)', duration: 0.2 }, 10.72)
		tl.set(q('.m1', method), { display: 'none' }, 10.75)
		tl.set(q('.m2', method), { display: 'inline' }, 10.75)
		tl.fromTo(q('.m2', method), IN, { opacity: 1, duration: 0.25 }, 10.75)
		tl.to(pos, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.inOut' }, 10.8)
		;['sub', 'tot'].forEach(function (k) {
			tl.set(q('.l1', R(k)), { display: 'none' }, 10.95)
			tl.set(q('.l2', R(k)), { display: 'inline' }, 10.95)
			tl.fromTo(q('.l2', R(k)), IN, { opacity: 1, duration: 0.3 }, 10.95)
		})
		tl.set(q('.b1', R('sub')), { display: 'none' }, 10.95)
		tl.set(q('.b2', R('sub')), { display: 'flex' }, 10.95)
		tl.fromTo(q('.b2', R('sub')), { opacity: 0, x: -4 }, { opacity: 1, x: 0, duration: 0.35 }, 10.95)
		var dcf = { rev: 38, opex: 32, tax: 26, sub: 34, rd: 28, tot: 38, eq: 42 }
		Object.keys(dcf).forEach(function (k) { tl.to(nb(k), { width: dcf[k], duration: 0.4, ease: 'power2.inOut' }, 11.0) })
		flash(['rev', 'opex', 'tax', 'sub', 'rd', 'tot', 'eq'], 11.0)
		tl.set(q('.d0', R('eq')), { display: 'none' }, 11.3)
		tl.set(q('.d1', R('eq')), { display: 'inline' }, 11.3)
		tl.to(cursor, { x: '-=40', y: '+=50', opacity: 0, duration: 0.35, ease: 'power1.in' }, 10.85)

		/* Edit two: a house line. A partner royalty comes off before tax, and everything below it
		   recomputes. */
		var ax = 28 + 30, ay = 86 + 20 + 24 + 24 + 24 + 10
		tl.fromTo(cursor, { x: 300, y: 320, opacity: 0, scale: 1 },
			{ x: ax - 1.2, y: ay - 1.2, opacity: 1, duration: 0.5, immediateRender: false }, 11.7)
		tl.to(cursor, { scale: 0.88, duration: 0.1 }, 12.25)
		tl.to(cursor, { scale: 1, duration: 0.1 }, 12.35)
		tl.fromTo(roy, { height: 0 }, { height: 24, duration: 0.35, ease: 'power2.inOut' }, 12.3)
		tl.fromTo(q('.li', roy), IN, { opacity: 1, duration: 0.3 }, 12.5)
		tl.fromTo(q('.rt', roy), IN, { opacity: 1, duration: 0.3 }, 12.58)
		tl.fromTo(q('.vl', roy), IN, { opacity: 1, duration: 0.25 }, 12.62)
		tl.fromTo(q('.nb', roy), { scaleX: 0, transformOrigin: '100% 50%' }, { scaleX: 1, duration: 0.3 }, 12.64)
		tl.fromTo(roy, { backgroundColor: CLEARB }, { backgroundColor: 'rgba(42,130,203,.06)', duration: 0.3 }, 12.5)
		tl.to(roy, { backgroundColor: CLEARB, duration: 0.6 }, 13.5)
		var royv = { tax: 24, sub: 28, tot: 30, eq: 34 }
		Object.keys(royv).forEach(function (k) { tl.to(nb(k), { width: royv[k], duration: 0.4, ease: 'power2.inOut' }, 12.8) })
		flash(['tax', 'sub', 'tot', 'eq'], 12.8)
		tl.set(q('.d1', R('eq')), { display: 'none' }, 13.1)
		tl.set(q('.d2', R('eq')), { display: 'inline' }, 13.1)
		tl.to(cursor, { x: '+=40', y: '+=60', opacity: 0, duration: 0.4, ease: 'power1.in' }, 12.55)

		/* Back into the cell. */
		var content = [head, cols, q('.sn-body', detail)]
		tl.to(content, { opacity: 0, duration: 0.2 }, 14.3)
		tl.to(detail, Object.assign({ duration: 0.45, ease: 'power3.inOut' }, cell), 14.4)
		tl.to(detail, { visibility: 'hidden', duration: 0.01 }, 14.86)
		tl.to(base, { boxShadow: '0 0 0 0px rgba(182,217,243,0)', duration: 0.5 }, 14.9)

		tl.set(q('.sn-title .t1'), { display: 'none' }, 14.95)
		tl.set(q('.sn-title .t2'), { display: 'inline' }, 14.95)
		tl.fromTo(q('.sn-title .t2'), IN, { opacity: 1, duration: 0.35 }, 14.95)

		/* The table follows the house model: every cell re-foots, and the shading moves a band
		   toward rose against the market cap. */
		cells.forEach(function (c) {
			var d = (+c.dataset.r + +c.dataset.c) * 0.04
			tl.to(c._b, { width: Math.max(5, Math.round(c._wPost * 0.78)), duration: 0.5, ease: 'power1.inOut' }, 14.95 + d)
			tl.to(c, { backgroundColor: c.dataset.post2, duration: 0.5, ease: 'power1.inOut' }, 14.95 + d)
		})
		tl.fromTo(q('.sn-legend .m'), IN, { opacity: 1, duration: 0.3 }, 2.7)

		/* Hold, dissolve, start again. */
		tl.to(stage, { opacity: 0, duration: 0.55, ease: 'power1.inOut' }, 15.9)
		tl.to({}, { duration: 0.15 }, 16.45)
		return tl
	}
})()
