/* Cycles each closing panel's audience line while it is on screen. */
import { TextScramble } from './text-scramble.js';

const HOLD = 800;   /* cycle()'s own default */

document.querySelectorAll('[data-scramble]').forEach(function (el) {
	const phrases = JSON.parse(el.getAttribute('data-scramble'));
	if (!phrases.length) return;

	/* Rewritten every frame, so it is hidden from assistive tech; the panel
	   carries a static label instead. */
	el.setAttribute('aria-hidden', 'true');

	const reduced = window.matchMedia
		&& window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (reduced) { el.textContent = phrases[0]; return; }

	/* Same construction as cycle(), just with a handle on the loop. */
	const fx = new TextScramble(el);
	let i = 0, running = false, timer = null;

	const step = function () {
		if (!running) return;
		fx.setText(phrases[i]).then(function () {
			i = (i + 1) % phrases.length;
			timer = setTimeout(step, HOLD);
		});
	};
	const start = function () { if (!running) { running = true; step(); } };
	const stop = function () {
		running = false;
		clearTimeout(timer);
		cancelAnimationFrame(fx.frameRequest);
	};

	if ('IntersectionObserver' in window) {
		new IntersectionObserver(function (entries) {
			entries[0].isIntersecting ? start() : stop();
		}, { rootMargin: '140px' }).observe(el);
	} else {
		start();
	}

	/* A backgrounded tab gets no frames and can strand the line mid-morph. */
	document.addEventListener('visibilitychange', function () {
		document.hidden ? stop() : (el.getBoundingClientRect().top < innerHeight && start());
	});
});
