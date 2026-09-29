/* Reveal section-page content with fallbacks for reduced browser support. */
(function () {
	var nodes = [].slice.call(document.querySelectorAll('[data-arrive]'));
	if (!nodes.length) return;

	function showAll() {
		nodes.forEach(function (n) { n.classList.add('is-here'); });
	}

	if (!('IntersectionObserver' in window)) { showAll(); return; }

	var fired = false;
	var io = new IntersectionObserver(function (entries) {
		entries.forEach(function (e) {
			if (!e.isIntersecting) return;
			fired = true;
			e.target.classList.add('is-here');
			io.unobserve(e.target);
		});
	}, { rootMargin: '-10% 0px -5% 0px' });

	nodes.forEach(function (n) { io.observe(n); });

	/* Never leave content hidden if the observer stalls. */
	setTimeout(function () { if (!fired) showAll(); }, 2200);
})();

/* Section-page hero arrival. The completed hero remains the fallback state. */
(function () {
	var hero = document.querySelector('.pg-hero--split');
	if (!hero) return;

	var settled = false;
	function show() { settled = true; hero.setAttribute('data-hero', 'in'); }

	var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduced || typeof gsap === 'undefined' || typeof SplitText === 'undefined') { show(); return; }

	var h1      = hero.querySelector('h1');
	var cap     = hero.querySelector('.pg-hero-cap');
	var act     = hero.querySelector('.pg-hero-act');
	var cue     = hero.nextElementSibling;
	if (cue && !cue.classList.contains('pg-hero-scroll')) cue = null;
	var wipe    = hero.querySelector('.pg-hero-wipe');
	var shot    = hero.querySelector('.pg-hero-shot img');
	var rule    = document.querySelector('[data-header-bottom-line]');
	var divide  = hero.querySelector('.pg-hero-divide');
	var base    = hero.querySelector('.pg-hero-base');

	if (rule) gsap.set(rule, { width: 0 });

	setTimeout(function () { if (!settled) show(); }, 2500);

	var ready = (document.fonts && document.fonts.ready) || Promise.resolve();
	Promise.race([ready, new Promise(function (r) { setTimeout(r, 1200); })]).then(build);

	function build() {
		if (settled) return;   /* the failsafe already showed it — leave it alone */

		var h1Text = h1.textContent;
		var split = new SplitText(h1, { type: 'lines,chars', linesClass: 'pg-line' });
		var chars = split.chars;
		h1.setAttribute('aria-label', h1Text);
		split.lines.forEach(function (l) { l.setAttribute('aria-hidden', 'true'); });

		/* Staged BEFORE [data-hero="in"] flips, so the inline opacity is already
		   on every animated node when the stylesheet stops hiding them. */
		gsap.set(chars, { yPercent: 110, autoAlpha: 0 });
		gsap.set([cap, act, cue].filter(Boolean), { y: 18, autoAlpha: 0 });
		if (wipe) gsap.set(wipe, { scaleY: 1 });
		if (shot) gsap.set(shot, { scale: 1.08 });
		if (divide) gsap.set(divide, { scaleY: 0 });
		if (base) gsap.set(base, { scaleX: 0 });
		show();

		var tl = gsap.timeline({
			onComplete: function () {
				split.revert();
				h1.removeAttribute('aria-label');
				gsap.set(h1, { clearProps: 'transform' });
			},
		});

		if (rule) tl.to(rule, { duration: .8, width: '100%', ease: 'power3.inOut' }, 0);
		if (divide) tl.to(divide, { duration: .8, scaleY: 1, ease: 'power3.inOut' }, 0);
		if (base) tl.to(base, { duration: .8, scaleX: 1, ease: 'power3.inOut' }, 0);

		/* PHASE ONE — the letters appear, each rising out of its own line mask. */
		tl.to(chars, {
			duration: .72, yPercent: 0, autoAlpha: 1,
			stagger: { each: .014, from: 'start' }, ease: 'power3.out',
		}, .18);

		/* PHASE TWO — and then the whole headline goes up. Started under the tail
		   of the stagger rather than after it, so the two read as one movement
		   that lifts, not as a reveal followed by a separate nudge. */
		tl.from(h1, { duration: 1.1, y: 22, ease: 'power3.out' }, .42);

		/* The plate is uncovered by a panel shrinking upward while the image
		   releases its overscale — the still-photograph version of the same move. */
		if (wipe) tl.to(wipe, { duration: 1.05, scaleY: 0, ease: 'power3.inOut' }, .3);
		if (shot) tl.to(shot, { duration: 1.4, scale: 1, ease: 'power3.out' }, .3);

		/* The copy under the plate, then the button at the foot of the left
		   half, then the scroll cue below the closing rule — in the order the
		   page is read, each a beat behind the rule that frames it. */
		if (cap) tl.to(cap, { duration: .9, y: 0, autoAlpha: 1, ease: 'power3.out' }, .62);
		if (act) tl.to(act, { duration: .9, y: 0, autoAlpha: 1, ease: 'power3.out' }, .74);
		if (cue) tl.to(cue, { duration: .7, y: 0, autoAlpha: 1, ease: 'power3.out' }, .95);
	}
})();
