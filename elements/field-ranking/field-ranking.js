/* Field ranking: mounts the homepage program matrix (compare.html and compare.css, in a shadow
 * root, as elements.js does on the homepage) in its completed state, sorted by the firm's saved
 * view of peak share. The analyst opens that sort from the Program header, changes one word of
 * the firm's instruction, and saves; the rows re-sort themselves. */
(function () {
	var ART_W = 620
	var roots = [].slice.call(document.querySelectorAll('[data-fr]'))
	if (!roots.length) return

	var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches
	var FINISHED = 9.0

	/* The saved view (efficacy first), and the order once tolerability goes first. */
	var START = ['P07', 'P01', 'P05', 'P03', 'P02', 'P04', 'P06', 'P09', 'P10', 'P08']
	var END = ['P03', 'P01', 'P05', 'P02', 'P07', 'P04', 'P06', 'P09', 'P10', 'P08']
	var OURS = 'P03'
	var CONSENSUS = 3 /* where the Street ranks our program; never an index it occupies */
	var LIFT = { P03: 3, P07: 1 } /* ours on top; the program that falls slides behind the rest */

	var SHADOW_CSS = [
		'.matrix-mock__toolbar{ display:none !important; }',
		'.matrix-mock tr.matrix-mock__row{ transition:none !important; position:relative; z-index:2; }',
		'.matrix-mock__tableWrapper{ position:relative; }',
		/* The grid under the rows, so a slot a row has left still reads as cells. */
		'.fr-grid{ position:absolute; left:0; top:0; pointer-events:none; }',
		'.fr-grid i{ position:absolute; background:#e5e5e5; }',
		'.matrix-mock tr.matrix-mock__row:nth-child(n+6){ display:table-row !important; }',
		'tr.matrix-mock__row > td{ background-color:var(--matrix-mock-bg); }',
		/* The sort, named where a table names it. */
		'.fr-sort{ position:absolute; right:10px; top:50%; transform:translateY(-50%); display:flex; align-items:center; gap:5px;',
		'  font-size:13px; font-weight:400; color:#8a8f98; white-space:nowrap; }',
		'.fr-sort svg{ width:9px; height:10px; }',
		/* Our program: where the Street has it, and where its rank goes next. */
		'.fr-note{ display:flex; flex-direction:column; align-items:flex-start; gap:4px; margin-top:10px; padding-left:2px; font-size:14px; line-height:18px; white-space:nowrap; }',
		'.fr-cons{ color:#8a8f98; font-weight:500; }',
		'.fr-link{ display:flex; align-items:center; gap:7px; color:#2a82cb; }',
		'.fr-link i{ flex:none; width:7px; height:7px; border-radius:50%; background:#2a82cb; }',
	].join('\n')

	roots.forEach(function (root) {
		fit(root)
		mount(root).then(function (ctx) {
			if (typeof gsap === 'undefined') return
			var tl = build(root, ctx)
			root.vsTimeline = tl
			if (reduced) { tl.pause(FINISHED); return }
			if (!window.__posFreeze) run(root, tl)
		})
	})

	function fit(root) {
		var set = function () {
			var w = root.clientWidth
			if (w) root.style.setProperty('--fr-fit', Math.min(1, w / ART_W).toFixed(4))
		}
		set()
		if ('ResizeObserver' in window) new ResizeObserver(set).observe(root)
		else window.addEventListener('resize', set)
	}

	function run(root, tl) {
		var visible = !('IntersectionObserver' in window)
		var go = function () { (visible && !document.hidden) ? tl.play() : tl.pause() }
		if (!visible) {
			new IntersectionObserver(function (entries) {
				visible = entries[0].isIntersecting
				go()
			}, { rootMargin: '80px' }).observe(root)
		}
		document.addEventListener('visibilitychange', go)
		go()
	}

	function el(tag, cls, html) {
		var e = document.createElement(tag)
		if (cls) e.className = cls
		if (html != null) e.innerHTML = html
		return e
	}

	function mount(root) {
		var host = root.querySelector('.fr-host')
		var shadow = host.attachShadow({ mode: 'open' })
		var link = el('link')
		link.rel = 'stylesheet'
		link.href = '/elements/compare/compare.css'
		shadow.appendChild(link)
		shadow.appendChild(el('style', null, SHADOW_CSS))
		var sheet = new Promise(function (res) { if (link.sheet) res(); else { link.onload = res; link.onerror = res } })
		return fetch('/elements/compare/compare.html').then(function (r) { return r.text() }).then(function (html) {
			var holder = el('div', null, html)
			while (holder.firstChild) shadow.appendChild(holder.firstChild)
			/* The matrix as the homepage leaves it: every row in, every cell resolved. */
			;[].forEach.call(shadow.querySelectorAll('tr.matrix-mock__row'), function (r) { r.classList.add('vs-in') })
			;[].forEach.call(shadow.querySelectorAll('[data-loading]'), function (c) { c.removeAttribute('data-loading') })
			var ctx = prepare(shadow)
			ctx.shadow = shadow
			ctx.host = host
			return sheet.then(function () { return document.fonts ? document.fonts.ready : null }).then(function () { return ctx })
		})
	}

	/* The saved view: rows in its order, row numbers as positions, the sort named in the header. */
	function prepare(shadow) {
		var ctx = { rows: {} }
		var trs = [].slice.call(shadow.querySelectorAll('tr.matrix-mock__row'))
		var tbody = trs[0].parentNode
		trs.forEach(function (tr) {
			var code = tr.querySelector('.matrix-mock__cell--company .matrix-mock__companyTicker').textContent.trim()
			ctx.rows[code] = { tr: tr, code: code, idx: tr.querySelector('.matrix-mock__indexCell') }
		})
		START.forEach(function (code, i) {
			var r = ctx.rows[code]
			tbody.appendChild(r.tr)
			r.tr.querySelector('.matrix-mock__indexNumber').textContent = String(i + 1)
			r.tr.querySelector('.matrix-mock__indexCheckbox').setAttribute('aria-label', 'Select row ' + (i + 1))
			r.tr.style.zIndex = LIFT[code] || 2
		})

		var head = shadow.querySelector('.matrix-mock__th--company')
		var sort = el('span', 'fr-sort',
			'<svg viewBox="0 0 9 10" fill="none"><path d="M4.5 1v8M1.5 6l3 3 3-3" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>Peak share')
		head.appendChild(sort)
		ctx.head = head
		ctx.sort = sort

		/* The matrix's own lines, laid under the rows: column dividers and row hairlines. */
		var wrap = shadow.querySelector('.matrix-mock__tableWrapper')
		var grid = el('div', 'fr-grid')
		wrap.insertBefore(grid, wrap.firstChild)
		ctx.grid = grid
		ctx.wrap = wrap

		var ours = ctx.rows[OURS].tr.querySelector('.matrix-mock__cell--company')
		ours.appendChild(el('div', 'fr-note',
			'<span class="fr-cons">Consensus #' + CONSENSUS + '</span><span class="fr-link"><i></i>Used in Valuation build</span>'))
		return ctx
	}

	function drawGrid(ctx) {
		var table = ctx.wrap.querySelector('.matrix-mock__table'), grid = ctx.grid
		var cells = [].slice.call(table.tHead.rows[0].cells)
		var first = ctx.rows[START[0]].tr, last = ctx.rows[START[START.length - 1]].tr
		var top = table.offsetTop + first.offsetTop, bottom = table.offsetTop + last.offsetTop + last.offsetHeight
		var html = ''
		cells.forEach(function (c) {
			html += '<i style="left:' + (table.offsetLeft + c.offsetLeft + c.offsetWidth - 0.5) + 'px;top:' + top + 'px;width:.5px;height:' + (bottom - top) + 'px"></i>'
		})
		START.forEach(function (code) {
			var tr = ctx.rows[code].tr
			html += '<i style="left:' + table.offsetLeft + 'px;top:' + (table.offsetTop + tr.offsetTop + tr.offsetHeight - 0.5) + 'px;width:' + table.offsetWidth + 'px;height:.5px"></i>'
		})
		grid.innerHTML = html
	}

	function build(root, ctx) {
		var card = root.querySelector('.fr-card'), host = ctx.host
		var pop = root.querySelector('.fr-pop'), cursor = root.querySelector('.fr-cursor'), ibeam = root.querySelector('.fr-ibeam')
		var q = function (s) { return pop.querySelector(s) }
		var ring = q('.fr-ring'), titleCaret = q('.fr-title .fr-caret')
		var sel = q('.fr-sel'), chars = [].slice.call(pop.querySelectorAll('.fr-typed i')), textCaret = q('.fr-text .fr-caret')
		var save = q('.fr-save')

		/* Card coordinates of a point on an element, measured when the tween starts. */
		var at = function (e, fx, fy) {
			var c = card.getBoundingClientRect(), r = e.getBoundingClientRect(), k = c.width / ART_W
			return { x: (r.left - c.left + r.width * fx) / k, y: (r.top - c.top + r.height * fy) / k }
		}

		drawGrid(ctx)

		/* The editor hangs from the header under the sort label, clear of every program pill and
		   of our program's two lines. */
		var edge = at(ctx.sort, 0, 0).x
		;[].forEach.call(ctx.shadow.querySelectorAll('.matrix-mock__companyStack, .fr-note > span'), function (e) {
			edge = Math.max(edge, at(e, 1, 0).x + 6)
		})
		pop.style.left = Math.round(edge) + 'px'
		pop.style.top = Math.round(at(ctx.head, 0, 1).y + 2) + 'px'

		var tl = gsap.timeline({ paused: true, repeat: -1, defaults: { ease: 'power2.out' } })
		var press = function (target, t) {
			tl.to(target, { scale: 0.88, duration: 0.05 }, t)
			tl.to(target, { scale: 1, duration: 0.07 }, t + 0.05)
		}
		var selAt = function (axis) { return function () { return at(sel.style.display === 'none' ? chars[0] : sel, 0.5, 0.5)[axis] } }

		/* The saved view, still. Then the hand arrives in the white margin above the matrix and
		   moves along it, dropping onto the sort only at the end, so it never crosses a row. */
		tl.fromTo(cursor, { x: 372, y: 6, opacity: 0, scale: 1 }, { opacity: 1, duration: 0.15 }, 1.0)
		tl.to(cursor, { x: function () { return at(ctx.sort, 0.62, 0.5).x - 1 }, duration: 0.7, ease: 'power2.inOut' }, 1.05)
		tl.to(cursor, { y: function () { return at(ctx.sort, 0.62, 0.5).y - 1 }, duration: 0.7, ease: 'power3.in' }, 1.05)
		tl.fromTo(ctx.head, { backgroundColor: 'rgba(244,244,244,0)' }, { backgroundColor: 'rgba(244,244,244,1)', duration: 0.12 }, 1.7)
		tl.fromTo(ctx.sort, { color: '#8a8f98' }, { color: '#262626', duration: 0.12 }, 1.7)
		press(cursor, 1.95)

		/* The firm's view, in its own words. */
		tl.fromTo(pop, { visibility: 'hidden', opacity: 0, y: -4, scale: 0.86 }, { visibility: 'visible', opacity: 1, y: 0, scale: 0.88, duration: 0.18, ease: 'power3.out' }, 2.0)

		/* One word changes: past standard of care, prescribers here choose on tolerability. */
		tl.to(cursor, { x: selAt('x'), y: selAt('y'), duration: 0.6, ease: 'power2.inOut' }, 2.95)
		tl.set(cursor, { opacity: 0 }, 3.3)
		tl.fromTo(ibeam, { opacity: 0, x: selAt('x'), y: selAt('y'), scale: 1 }, { opacity: 1, duration: 0.01 }, 3.3)
		tl.to(ibeam, { scale: 0.9, duration: 0.035 }, 3.58)
		tl.to(ibeam, { scale: 1, duration: 0.035 }, 3.615)
		tl.to(ibeam, { scale: 0.9, duration: 0.035 }, 3.65)
		tl.to(ibeam, { scale: 1, duration: 0.035 }, 3.685)
		tl.fromTo(sel, { backgroundColor: 'rgba(180,213,254,0)' }, { backgroundColor: 'rgba(180,213,254,1)', duration: 0.01 }, 3.65)
		tl.fromTo([ring, titleCaret], { opacity: 1 }, { opacity: 0, duration: 0.03 }, 3.58)
		tl.set(sel, { display: 'none' }, 3.95)
		tl.set(textCaret, { display: 'inline-block' }, 3.95)
		var jitter = [0, 0.012, -0.01, 0.015, -0.008, 0.01, -0.012, 0.008, 0.014, -0.01, 0.006, 0]
		chars.forEach(function (c, i) { tl.set(c, { display: 'inline' }, 3.95 + i * 0.07 + jitter[i]) })
		tl.to(ibeam, { y: '+=3', opacity: 0, duration: 0.2 }, 4.1)

		/* Save. */
		tl.fromTo(cursor, { x: selAt('x'), y: selAt('y') }, { opacity: 1, duration: 0.15 }, 5.45)
		tl.to(cursor, { x: function () { return at(save, 0.5, 0.55).x }, y: function () { return at(save, 0.5, 0.55).y }, duration: 0.55, ease: 'power2.inOut' }, 5.6)
		tl.fromTo(save, { backgroundColor: '#0a0a0a' }, { backgroundColor: '#262626', duration: 0.15 }, 6.15)
		press(cursor, 6.3)
		tl.to(save, { backgroundColor: '#000000', y: 0.5, duration: 0.05 }, 6.3)
		tl.to(pop, { opacity: 0, y: -2, scale: 0.867, duration: 0.16, ease: 'power2.in' }, 6.4)
		tl.set(pop, { visibility: 'hidden' }, 6.58)
		tl.to(ctx.head, { backgroundColor: 'rgba(244,244,244,0)', duration: 0.16 }, 6.4)
		tl.to(ctx.sort, { color: '#8a8f98', duration: 0.16 }, 6.4)
		tl.to(cursor, { opacity: 0, duration: 0.2 }, 6.38)

		/* The rows re-sort themselves, together. The row numbers are positions and stay put. */
		var offset = function (code) {
			var tr = ctx.rows[code].tr, y = ctx.rows[START[0]].tr.offsetTop
			for (var i = 0; END[i] !== code; i++) y += ctx.rows[END[i]].tr.offsetHeight
			return y - tr.offsetTop
		}
		var moving = END.filter(function (code, i) { return START[i] !== code })
		moving.forEach(function (code) {
			var r = ctx.rows[code]
			tl.to(r.tr, { y: function () { return offset(code) }, duration: 1.05, ease: 'power3.inOut' }, 6.7)
			tl.to(r.idx, { y: function () { return -offset(code) }, duration: 1.05, ease: 'power3.inOut' }, 6.7)
		})
		var lift = [].slice.call(ctx.rows[OURS].tr.querySelectorAll(':scope > td'))
		tl.fromTo(lift, { filter: 'drop-shadow(0px 0px 1px rgba(17,20,28,0)) drop-shadow(0px 6px 9px rgba(17,20,28,0))' }, { filter: 'drop-shadow(0px 0px 1px rgba(17,20,28,0.2)) drop-shadow(0px 6px 9px rgba(17,20,28,0.12))', duration: 0.15 }, 6.7)
		tl.to(lift, { filter: 'drop-shadow(0px 0px 1px rgba(17,20,28,0)) drop-shadow(0px 6px 9px rgba(17,20,28,0))', duration: 0.2 }, 7.55)
		tl.set(lift, { filter: 'none' }, 7.75)

		/* Hold, dip to white, start again from the saved view. */
		tl.to(host, { opacity: 0, duration: 0.45, ease: 'power1.in' }, 12.1)
		moving.forEach(function (code) { tl.set([ctx.rows[code].tr, ctx.rows[code].idx], { y: 0 }, 12.55) })
		tl.to(host, { opacity: 1, duration: 0.45, ease: 'power1.out' }, 12.55)
		return tl
	}
})()
