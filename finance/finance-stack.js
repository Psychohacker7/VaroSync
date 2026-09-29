/* Finance feature stack: an element plays only while its card is uncovered. Once the next card
 * slides over it, its loop pauses where it is, and it resumes when that card moves off again.
 * Each element exposes its timeline as root.vsTimeline and runs its own on-screen checks; this
 * only adds the covered case, which on-screen checks cannot see. */
(function () {
	if (window.__posFreeze) return
	if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return
	var cards = [].slice.call(document.querySelectorAll('.fin-card'))
	if (cards.length < 2) return
	var roots = cards.map(function (c) { return c.querySelector('[data-pos], [data-fr], [data-cc], [data-sn]') })

	var check = function () {
		var vh = window.innerHeight
		cards.forEach(function (card, i) {
			var tl = roots[i] && roots[i].vsTimeline
			if (!tl) return
			var r = card.getBoundingClientRect()
			var next = cards[i + 1]
			var covered = next ? next.getBoundingClientRect().top < r.top + r.height * 0.5 : false
			var onScreen = r.bottom > 0 && r.top < vh && !document.hidden
			if (covered && !tl.paused()) tl.pause()
			else if (!covered && onScreen && tl.paused()) tl.play()
		})
	}

	var queued = false
	var schedule = function () {
		if (queued) return
		queued = true
		requestAnimationFrame(function () { queued = false; check() })
	}
	window.addEventListener('scroll', schedule, { passive: true })
	window.addEventListener('resize', schedule, { passive: true })
	document.addEventListener('visibilitychange', schedule)
	/* The elements start their loops on their own, some after fetching markup; catch up with them. */
	setInterval(check, 1000)
	check()
})()
