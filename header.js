/* Shared navigation and sticky-header behavior for standalone pages. */
(function () {
	'use strict';
	var header = document.getElementById('header_sticky');
	if (!header) return;

	/* Standalone pages use a dependency-free mobile menu. */
	var menuId = 'vs-mobile-menu';
	var menuIcon = '<svg class="vs-menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>';
	var toggle = document.createElement('button');
	toggle.className = 'vs-mobile-menu-toggle';
	toggle.type = 'button';
	toggle.setAttribute('aria-controls', menuId);
	toggle.setAttribute('aria-expanded', 'false');
	toggle.setAttribute('aria-label', 'Open navigation');
	toggle.innerHTML = menuIcon;
	header.appendChild(toggle);

	var route = window.location.pathname.replace(/\/+$/, '') || '/';
	var items = [
		['/finance/', 'Finance'],
		['/therapeutics/', 'Therapeutics'],
		['/partnerships/', 'Partnerships'],
		['/research/', 'Research'],
		['/get-in-touch/', 'Get in touch']
	];
	var menu = document.createElement('div');
	menu.id = menuId;
	menu.className = 'vs-mobile-menu';
	menu.setAttribute('aria-hidden', 'true');
	menu.innerHTML = '<nav aria-label="Primary navigation"><div class="vs-mobile-menu-line" data-menu-line></div>' + items.map(function (item, index) {
		var path = item[0].replace(/\/+$/, '') || '/';
		var contact = index === items.length - 1 ? ' vs-mobile-menu-contact' : '';
		return '<a class="vs-mobile-menu-link' + contact + '" href="' + item[0] + '" data-menu-opacity' + (path === route ? ' aria-current="page"' : '') + '>' + item[1] + '</a><div class="vs-mobile-menu-line" data-menu-line></div>';
	}).join('') + '</nav><div class="vs-mobile-menu-social" data-menu-opacity><a href="https://www.linkedin.com/company/varosync/" target="_blank" rel="noopener noreferrer">LINKEDIN</a><a href="https://x.com/var0sync/" target="_blank" rel="noopener noreferrer">X</a></div>';
	var backdrop = document.createElement('div');
	backdrop.className = 'vs-mobile-menu-backdrop';
	backdrop.setAttribute('aria-hidden', 'true');
	document.body.appendChild(backdrop);
	document.body.appendChild(menu);
	var menuLines = menu.querySelectorAll('[data-menu-line]');
	var menuItems = menu.querySelectorAll('[data-menu-opacity]');
	/* The header's own rule steps aside while the menu is open, as the homepage menu's does. */
	var headerRule = header.querySelector('[data-header-bottom-line]');
	var isOpen = false;

	function menuHeight() {
		return Math.max(0, window.innerHeight - header.offsetHeight);
	}

	function setMenu(open) {
		var changed = open !== isOpen;
		isOpen = open;
		toggle.setAttribute('aria-expanded', String(open));
		toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
		menu.setAttribute('aria-hidden', String(!open));
		menu.classList.toggle('is-open', open);
		backdrop.classList.toggle('is-open', open);
		document.body.classList.toggle('vs-mobile-menu-open', open);

		if (typeof gsap === 'undefined') {
			menu.style.opacity = open ? '1' : '0';
			menu.style.visibility = open ? 'visible' : 'hidden';
			backdrop.style.height = open ? menuHeight() + 'px' : '0px';
			if (headerRule && changed) headerRule.style.width = open ? '0px' : '100%';
			return;
		}

		gsap.killTweensOf([menu, backdrop, menuLines, menuItems]);
		if (headerRule && changed) gsap.killTweensOf(headerRule);
		if (open) {
			var openTimeline = gsap.timeline();
			openTimeline.to(backdrop, { height: menuHeight(), duration: .8, ease: 'power4.inOut' });
			openTimeline.fromTo(menu, { autoAlpha: 0 }, { autoAlpha: 1, duration: .8, ease: 'power4.inOut' }, '<');
			openTimeline.fromTo(menuLines, { width: 0 }, { width: '100%', duration: .8, stagger: .05, ease: 'power4.inOut' }, '<+=.1');
			openTimeline.fromTo(menuItems, { autoAlpha: 0 }, { autoAlpha: 1, duration: .8, stagger: .05, ease: 'power4.inOut' }, '<+=.4');
			if (headerRule && changed) openTimeline.to(headerRule, { width: 0, duration: .8, ease: 'power4.inOut' }, 0);
		} else {
			var closeTimeline = gsap.timeline();
			closeTimeline.to(menuItems, { autoAlpha: 0, duration: .8, stagger: -.05, ease: 'power4.inOut' });
			closeTimeline.to(menuLines, { width: 0, duration: .8, stagger: -.05, ease: 'power4.inOut' }, '<+=.1');
			closeTimeline.to(backdrop, { height: 0, duration: .8, ease: 'power4.inOut' }, '<+=.5');
			closeTimeline.to(menu, { autoAlpha: 0, duration: 1, ease: 'power4.inOut' }, '<');
			if (headerRule && changed) closeTimeline.to(headerRule, { width: '100%', duration: .8, ease: 'power4.inOut' }, '<');
		}
	}
	toggle.addEventListener('click', function () {
		setMenu(toggle.getAttribute('aria-expanded') !== 'true');
	});
	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') setMenu(false);
	});
	window.addEventListener('resize', function () {
		if (window.innerWidth >= 1024) setMenu(false);
	});

	/* Split and partnerships heroes animate this rule in their page scripts. */
	var rule = header.querySelector('[data-header-bottom-line]');
	var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var splitHero = document.querySelector('.pg-hero--split');
	var partnershipsHero = document.querySelector('[data-partnerships-hero]');
	if (rule && !partnershipsHero && (!splitHero || reduced || typeof gsap === 'undefined')) {
		if (reduced || typeof gsap === 'undefined') {
			rule.style.width = '100%';
		} else {
			requestAnimationFrame(function () {
				gsap.to(rule, { duration: .8, width: '100%', ease: 'power3.inOut' });
			});
		}
	}

	if (typeof gsap === 'undefined') return;   /* nav remains usable without motion */

	var windowWidth = window.innerWidth;

	const anim_text_slide = document.querySelectorAll('[data-anim-text-slide]')
	if(anim_text_slide && windowWidth >= 1024) {
		anim_text_slide.forEach(btn => {
			const hidden_span = btn.querySelector('.label_wrap span:first-of-type')
			const default_span = btn.querySelector('.label_wrap span:nth-of-type(2)')
			const left_arrow = btn.querySelector('[data-left-bottom-arrow]')
			const right_arrow = btn.querySelector('[data-right-bottom-arrow]')
			gsap.set(hidden_span, { opacity: 0, yPercent: 100 })

			btn.addEventListener('mouseenter', function () {
				if(windowWidth < 1024) return
				gsap.to(hidden_span, {yPercent:0,opacity:1,duration:0.5,ease:'power3'})
				gsap.to(default_span, {yPercent:-100,opacity:0,duration:.5,ease:'power3'})
				if(left_arrow) {
					gsap.to(left_arrow, {y:-left_arrow.offsetTop + 3,x:-2,duration:0.5,rotateZ:90,ease:'power3'})
				}
				if(right_arrow) {
					gsap.to(right_arrow, {y:right_arrow.offsetParent.offsetHeight - (right_arrow.offsetHeight + 3),x:2,rotateZ:90,duration:.5,ease:'power3'})
				}
			})
			btn.addEventListener('mouseleave', function () {
				gsap.to(hidden_span, {yPercent:100,opacity:0,duration:.5,ease:'power3'})
				gsap.to(default_span, {yPercent:0,opacity:1,duration:.5,ease:'power3'})
				if(left_arrow) {
					gsap.to(left_arrow, {y:0,duration:.5,x:0,rotateZ:0,ease:'power3'})
				}
				if(right_arrow) {
					gsap.to(right_arrow, {y:0,rotateZ:0,x:0,duration:.5,ease:'power3'})
				}
			})
		})
	}

	/* Keep the interaction breakpoint in sync after resize. */
	window.addEventListener('resize', function () { windowWidth = window.innerWidth; });
})();
