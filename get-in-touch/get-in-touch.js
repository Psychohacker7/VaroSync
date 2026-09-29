/* Contact forms (get in touch, brochure request): bot check, submission, and the sent state,
   which books a call only on a page that carries the calendar. */
(function () {
	'use strict';

	/* First-party endpoint (functions/api/enquiry.js): enquiries are stored in
	   Varosync's own database before anything is emailed, rather than handed to
	   a third-party form service. */
	var FORM_ENDPOINT = '/api/enquiry';

	/* The build injects the real site key from site.config.json into #vs-infra.
	   The fallback is Cloudflare's always-pass test key, for local serving. */
	var TURNSTILE_SITE_KEY = (function () {
		try {
			var cfg = JSON.parse(document.getElementById('vs-infra').textContent);
			if (cfg && cfg.turnstile) return cfg.turnstile;
		} catch (e) {}
		return '1x00000000000000000000AA';
	})();

	/* Shown when a submission genuinely fails. Plain on purpose — reword freely,
	   but keep the email address: it is the visitor's only way to still reach
	   you when the form cannot. */
	var SUBMIT_FAILED = 'This did not send. Please try again, or email partnerships@varosync.com directly.';

	var CAL_LINK = 'varosync/intro';
	var CAL_NAMESPACE = 'intro';
	var HONEYPOTS = ['website', 'company', 'subject', 'message', 'fax', 'address'];

	/* Entrances start only after the page stops being pre-hidden, or they would resolve unseen. */
	var afterPreHide = function (fn) {
		if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
		else fn();
	};

	var form = document.getElementById('git-form');
	var root = document.getElementById('git');
	var sentWrap = document.getElementById('git-sent');
	var submit = document.getElementById('git-submit');
	if (!form) return;

	/* Tags a form's submissions so each page's requests can be told apart in the inbox. */
	var request = form.getAttribute('data-request') || '';

	/* Analytics. window.vsTrack (infra/consent.js) sends nothing unless the
	   visitor allowed analytics; without it these calls are no-ops. */
	var FORM_NAME = request ? request.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') : 'get_in_touch';
	var track = function (name, params) {
		try { if (window.vsTrack) window.vsTrack(name, params); } catch (e) {}
	};
	var started = false;
	form.addEventListener('input', function () {
		if (started) return;
		started = true;
		// Not form_start: GA4 reserves that name and drops the event.
		track('lead_form_start', { form_name: FORM_NAME });
	});

	var el = {
		email: document.getElementById('git-email'),
		name: document.getElementById('git-name'),
		org: document.getElementById('git-org'),
		industry: document.getElementById('git-industry'),
		role: document.getElementById('git-role'),
		decision: document.getElementById('git-decision')
	};

	var tried = false;
	var busy = false;
	var token = '';
	var captchaUp = false;
	/* Turnstile rendered but cannot produce a token: an error code (for
	   example a hostname not yet added to the widget), a blocked iframe, or no
	   token within CAPTCHA_WAIT_MS. From then on the form submits WITHOUT one;
	   the server stores it as unverified and still emails it. Blocking here
	   would lock a real lead out with no way through. */
	var captchaFailed = false;
	var CAPTCHA_WAIT_MS = 15000;
	/* Set once the widget renders. A Turnstile token is single-use: after an
	   attempt the server has checked, only a fresh token can pass again. */
	var resetCaptcha = function () {};

	/* -------------------------------------------------- the page's entrance */

	/* Use the same restrained rise-and-stagger language as the rest of the
	   site. The class is applied only after every target exists, so a script
	   failure leaves the ordinary, fully visible page in place. The photograph
	   settles at the same time; the masked statement keeps its own font-aware
	   timing below. */
	(function enterPage() {
		var items = [document.querySelector('.git-mark')]
			.concat(Array.prototype.slice.call(form.querySelectorAll('.git-field')))
			.concat([
				document.querySelector('.git-cap'),
				submit,
				document.querySelector('.git-fine'),
				document.querySelector('.git-foot')
			])
			.filter(Boolean);

		items.forEach(function (item, index) {
			item.classList.add('git-enter-item');
			item.style.setProperty('--enter-delay', (70 + index * 55) + 'ms');
		});

		root.classList.add('has-intro');
		var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		var show = function () { root.classList.add('is-entered'); };
		if (reduced) { show(); return; }

		/* Two frames guarantee the staged transforms have painted before their
		   destination class lands. The failsafe protects the form if a browser
		   throttles those frames while the tab is opening in the background. */
		afterPreHide(function () {
			requestAnimationFrame(function () {
				requestAnimationFrame(show);
			});
			setTimeout(show, 1200);
		});
	})();

	/* Add the word reveal only after the readable heading is present. */
	(function reveal() {
		var hue = document.querySelector('.git-hue');
		var h1 = hue && hue.querySelector('h1');
		if (!hue || !h1) return;

		var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) { hue.classList.add('is-in'); return; }

		var STEP = 70;   /* ms between words */
		var words = h1.textContent.split(/\s+/).filter(Boolean);

		h1.textContent = '';
		words.forEach(function (word, i) {
			var outer = document.createElement('span');
			outer.className = 'w';
			var inner = document.createElement('i');
			inner.textContent = word;
			inner.style.setProperty('--d', (i * STEP) + 'ms');
			outer.appendChild(inner);
			h1.appendChild(outer);
			if (i < words.length - 1) h1.appendChild(document.createTextNode(' '));
		});

		/* The card waits for the last word, plus a beat. */
		hue.style.setProperty('--pd', (words.length * STEP + 260) + 'ms');
		hue.classList.add('has-anim');

		var start = function () {
			afterPreHide(function () {
				requestAnimationFrame(function () {
					requestAnimationFrame(function () { hue.classList.add('is-in'); });
				});
			});
		};

		/* Hold until the face is ready so the words do not rise in a fallback
		   and re-flow mid-animation. Capped, so a slow font never strands it. */
		var fired = false;
		var go = function () { if (!fired) { fired = true; start(); } };
		if (document.fonts && document.fonts.ready) { document.fonts.ready.then(go); }
		setTimeout(go, 1200);
	})();

	/* --------------------------------------- align the line to the heading */

	/* The statement's right edge is meant to land on the last letter of
	   "picture", so the measure is taken from the heading itself rather than
	   guessed in ch. Re-taken whenever the panel resizes, because the heading is
	   fluid and wraps on narrow screens — when it does, its width is the full
	   column and the line simply follows it. */
	(function measure() {
		var hue = document.querySelector('.git-hue');
		var h1 = hue && hue.querySelector('h1');
		if (!hue || !h1) return;

		/* Where the second word of the heading starts. The reveal wraps each word
		   in a span, so usually that is just the second span; under reduced motion
		   the heading is still one text node, so fall back to a Range. */
		var secondWordLeft = function () {
			var ws = h1.querySelectorAll('.w');
			if (ws.length > 1) return ws[1].getBoundingClientRect().left;
			var node = h1.firstChild;
			if (!node || node.nodeType !== 3) return 0;
			var text = node.nodeValue;
			var m = /^\s*\S+\s+/.exec(text);
			if (!m) return 0;
			var r = document.createRange();
			r.setStart(node, m[0].length);
			r.setEnd(node, text.length);
			var rects = r.getClientRects();
			return rects.length ? rects[0].left : 0;
		};

		var last = '';
		var apply = function () {
			var box = h1.getBoundingClientRect();
			var w = Math.ceil(box.width);
			if (!w) return;

			/* The line hangs off the second word: its left edge sits under the "t"
			   of "the", its right edge on the last letter of "picture". */
			var indent = Math.max(0, Math.round(secondWordLeft() - box.left));
			/* Dropped entirely if it would squeeze the line past reading width. */
			if (w - indent < 170) indent = 0;

			var key = w + ':' + indent;
			if (key === last) return;   /* guard against a resize feedback loop */
			last = key;

			hue.style.setProperty('--indent', indent + 'px');
			hue.style.setProperty('--measure', (w - indent) + 'px');
		};

		apply();
		if (document.fonts && document.fonts.ready) { document.fonts.ready.then(apply); }

		if (window.ResizeObserver) {
			/* Observe the heading, not the panel: the panel's own height reacts to
			   the line re-wrapping, which would feed back into the observer. */
			new ResizeObserver(apply).observe(h1);
		} else {
			window.addEventListener('resize', apply);
		}
	})();

	/* ---------------------------------------------------------- validation */

	function values() {
		return {
			email: el.email.value,
			name: el.name.value,
			org: el.org.value,
			industry: el.industry.value,
			role: el.role.value,
			decision: el.decision.value
		};
	}

	function computeErrors() {
		var f = values();
		var e = { email: '', name: '', org: '', industry: '', role: '', captcha: '' };

		if (!f.email.trim()) e.email = 'Enter your work email.';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a complete email address.';

		if (!f.name.trim()) e.name = 'Enter your name.';
		if (!f.org.trim()) e.org = 'Enter your organization.';
		if (!f.industry) e.industry = 'Select your industry.';
		if (!f.role.trim()) e.role = 'Enter your role or title.';

		if (captchaUp && !token && !captchaFailed) e.captcha = 'Verification is still running. Try again in a moment, or email partnerships@varosync.com.';

		return e;
	}

	var errNodes = {
		email: document.getElementById('git-email-err'),
		name: document.getElementById('git-name-err'),
		org: document.getElementById('git-org-err'),
		industry: document.getElementById('git-industry-err'),
		role: document.getElementById('git-role-err'),
		captcha: document.getElementById('captcha-err')
	};

	function paint() {
		var e = computeErrors();
		Object.keys(errNodes).forEach(function (k) {
			var node = errNodes[k];
			if (!node) return;
			var msg = tried ? e[k] : '';
			node.textContent = msg;
			node.hidden = !msg;
			var input = el[k];
			if (input) input.setAttribute('aria-invalid', msg ? 'true' : 'false');
		});
		return e;
	}

	function isValid(e) {
		return Object.keys(e).every(function (k) { return !e[k]; });
	}

	form.addEventListener('input', paint);
	form.addEventListener('change', function () {
		el.industry.classList.toggle('is-empty', !el.industry.value);
		paint();
	});

	/* ---------------------------------------------------------- submission */

	form.addEventListener('submit', function (ev) {
		ev.preventDefault();
		tried = true;
		var errors = paint();
		if (busy) return;
		if (!isValid(errors)) {
			track('form_error', { form_name: FORM_NAME, error_type: errors.captcha ? 'verification_pending' : 'validation' });
			return;
		}

		/* A filled honeypot is flagged, not dropped. Browser autofill has a history
		   of filling fields named "company" or "address" despite autocomplete="off",
		   and dropping here would leave a real lead clicking Submit with nothing
		   happening. The server stores it as spam and never emails it. */
		var trapped = false;
		for (var i = 0; i < HONEYPOTS.length; i++) {
			var hp = form.elements[HONEYPOTS[i]];
			if (hp && hp.value) { trapped = true; break; }
		}

		busy = true;
		submit.disabled = true;
		submit.textContent = 'Submitting…';

		var f = values();
		var payload = {
			email: f.email, name: f.name, org: f.org,
			industry: f.industry, role: f.role, decision: f.decision,
			turnstileToken: token
		};
		if (request) payload.request = request;
		if (trapped) payload.hp = 1;

		/* Where this visitor came from (infra/attribution.js), so the enquiry
		   arrives already labelled with its source and campaign. */
		if (window.vsAttribution) {
			try {
				var attr = window.vsAttribution.fields();
				for (var k in attr) if (attr[k]) payload[k] = attr[k];
			} catch (e) {}
		}

		var reset = function () {
			busy = false;
			submit.disabled = false;
			submit.textContent = 'Submit';
		};

		var done = function () {
			reset();
			/* Only on a confirmed server success: the lead is stored. */
			track('generate_lead', { form_name: FORM_NAME, lead_source: FORM_NAME });
			showSent(f);
		};

		/* A failure must never show the sent state. Previously a network error
		   fell through to "sent", so a visitor believed they had made contact
		   while their message went nowhere. */
		var failed = function () {
			reset();
			resetCaptcha();
			track('form_error', { form_name: FORM_NAME, error_type: 'submit_failed' });
			showFailure();
		};

		if (!FORM_ENDPOINT) {
			console.info('[get-in-touch] no endpoint set — payload:', payload);
			done();
			return;
		}

		var stale = document.getElementById('git-submit-err');
		if (stale) stale.hidden = true;

		/* A stalled request must not leave the button on "Submitting…" forever. */
		var ctrl = typeof AbortController === 'function' ? new AbortController() : null;
		var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 20000) : null;

		fetch(FORM_ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify(payload),
			signal: ctrl ? ctrl.signal : undefined
		}).then(function (res) {
			if (timer) clearTimeout(timer);
			if (res.ok) done();
			else failed();
		}, function () {
			if (timer) clearTimeout(timer);
			failed();
		});
	});

	function showFailure() {
		var node = document.getElementById('git-submit-err');
		if (!node) {
			node = document.createElement('p');
			node.className = 'git-err';
			node.id = 'git-submit-err';
			node.setAttribute('role', 'alert');
			submit.insertAdjacentElement('afterend', node);
		}
		node.textContent = SUBMIT_FAILED;
		node.hidden = false;
	}

	/* ---------------------------------------------------------- sent state */

	function showSent(f) {
		root.classList.add('is-sent');
		form.hidden = true;
		sentWrap.hidden = false;
		window.scrollTo(0, 0);
		if (document.getElementById('git-cal')) showCalendar(f);
	}

	(function turnstile() {
		var SCRIPT_ID = 'cf-turnstile';
		if (!document.getElementById(SCRIPT_ID)) {
			var s = document.createElement('script');
			s.id = SCRIPT_ID;
			s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
			s.async = true;
			s.defer = true;
			document.head.appendChild(s);
		}

		var mount = document.getElementById('git-turnstile');
		var widget = null;
		var ticks = 0;

		var poll = setInterval(function () {
			ticks++;
			if (ticks > 120) { clearInterval(poll); return; }
			if (!window.turnstile || !mount || widget !== null) return;

			widget = window.turnstile.render(mount, {
				sitekey: TURNSTILE_SITE_KEY,
				appearance: 'interaction-only',
				callback: function (t) { token = t; captchaFailed = false; paint(); },
				'expired-callback': function () { token = ''; paint(); },
				'error-callback': function () { token = ''; captchaFailed = true; paint(); }
			});
			captchaUp = true;
			/* Watchdog for a widget that never answers either way. */
			setTimeout(function () {
				if (!token) { captchaFailed = true; paint(); }
			}, CAPTCHA_WAIT_MS);
			resetCaptcha = function () {
				token = '';
				try { window.turnstile.reset(widget); } catch (e) {}
			};
			clearInterval(poll);
		}, 100);
	})();

	/* ------------------------------------------------ booking calendar */

	/* The embedded calendar sets cookies on Cal.com's own domain, so it sits
	   behind the Preferences category of the cookie settings. Without it the
	   visitor gets a plain link to book on cal.com, and a one-click way to
	   allow Preferences and show the calendar here. */
	var infraCfg = (function () {
		try { return JSON.parse(document.getElementById('vs-infra').textContent) || {}; } catch (e) { return {}; }
	})();
	var calCopy = (infraCfg.copy && infraCfg.copy.calendar) || {};
	var lastForm = null;

	function calAllowed() {
		try {
			var c = window.vsConsent && window.vsConsent.current();
			return !!(c && c.functional);
		} catch (e) { return false; }
	}

	function showCalendar(f) {
		lastForm = f;
		if (calAllowed()) { requestAnimationFrame(function () { mountCal(f); }); return; }
		/* No consent layer loaded at all (local source serving): behave as before. */
		if (!window.vsConsent) { requestAnimationFrame(function () { mountCal(f); }); return; }
		showCalChoice();
	}

	function showCalChoice() {
		var wrap = document.getElementById('git-cal');
		if (!wrap || calMounted) return;
		wrap.classList.remove('is-loading');
		wrap.classList.add('is-optin');
		if (document.getElementById('git-cal-optin')) return;

		var fallback = document.getElementById('git-cal-fallback');
		var direct = fallback && fallback.querySelector('a') ? fallback.querySelector('a').getAttribute('href') : 'https://cal.com/' + CAL_LINK;

		var box = document.createElement('p');
		box.className = 'git-cal-fallback git-cal-optin';
		box.id = 'git-cal-optin';
		box.appendChild(document.createTextNode((calCopy.blocked || 'The booking calendar is embedded from Cal.com and needs Preferences cookies.') + ' '));
		var link = document.createElement('a');
		link.href = direct;
		link.target = '_blank';
		link.rel = 'noreferrer';
		link.textContent = calCopy.open || 'Book on Cal.com';
		box.appendChild(link);
		box.appendChild(document.createTextNode(' \u00b7 '));
		var allow = document.createElement('button');
		allow.type = 'button';
		allow.className = 'git-cal-allow';
		allow.textContent = calCopy.allow || 'Allow and show it here';
		allow.addEventListener('click', function () {
			var v = window.vsConsent;
			var c = (v && (v.current() || v.withGpc(v.DENIED))) || {};
			/* Consent to Preferences only; every other choice stays as it was. */
			if (v) v.write({ functional: true, analytics: !!c.analytics, marketing: !!c.marketing }, 'save');
		});
		box.appendChild(allow);
		wrap.insertBefore(box, wrap.firstChild);
	}

	window.addEventListener('vs:consent', function (e) {
		if (!e.detail || !e.detail.functional || !lastForm || calMounted) return;
		var box = document.getElementById('git-cal-optin');
		if (box) box.remove();
		var wrap = document.getElementById('git-cal');
		if (wrap) { wrap.classList.remove('is-optin'); wrap.classList.add('is-loading'); }
		mountCal(lastForm);
	});

	function loadCal() {
		(function (C, A, L) {
			var p = function (a, ar) { a.q.push(ar); };
			var d = C.document;
			C.Cal = C.Cal || function () {
				var cal = C.Cal;
				var ar = arguments;
				if (!cal.loaded) {
					cal.ns = {};
					cal.q = cal.q || [];
					d.head.appendChild(d.createElement('script')).src = A;
					cal.loaded = true;
				}
				if (ar[0] === L) {
					var api = function () { p(api, arguments); };
					var namespace = ar[1];
					api.q = api.q || [];
					if (typeof namespace === 'string') {
						cal.ns[namespace] = cal.ns[namespace] || api;
						p(cal.ns[namespace], ar);
						p(cal, ['initNamespace', namespace]);
					} else {
						p(cal, ar);
					}
					return;
				}
				p(cal, ar);
			};
		})(window, 'https://app.cal.com/embed/embed.js', 'init');
	}

	var calMounted = false;

	function mountCal(f) {
		if (calMounted) return;
		calMounted = true;

		loadCal();

		var config = {
			layout: 'month_view',
			theme: 'light',
			name: f.name,
			email: f.email
		};
		/* Only name and email prefill the booking. The visitor's question stays
		   with the enquiry and is not passed to Cal.com. */

		window.Cal('init', CAL_NAMESPACE, {});
		window.Cal.ns[CAL_NAMESPACE]('inline', {
			elementOrSelector: '#git-cal-mount',
			calLink: CAL_LINK,
			config: config
		});

		/* A booked call is the strongest signal on the site. */
		window.Cal.ns[CAL_NAMESPACE]('on', {
			action: 'bookingSuccessfulV2',
			callback: function () { track('schedule_meeting', { form_name: FORM_NAME }); }
		});

		watchCal();
	}

	function watchCal() {
		var wrap = document.getElementById('git-cal');
		var fallback = document.getElementById('git-cal-fallback');
		var landed = false;

		var poll = setInterval(function () {
			var frame = wrap.querySelector('iframe');
			if (frame && frame.getBoundingClientRect().height > 420) {
				landed = true;
				wrap.classList.remove('is-loading');
				wrap.classList.add('is-ready');
				clearInterval(poll);
				clearTimeout(giveUp);
			}
		}, 250);

		var giveUp = setTimeout(function () {
			clearInterval(poll);
			if (landed) return;
			wrap.classList.remove('is-loading');
			wrap.classList.add('is-failed');
			if (fallback) fallback.hidden = false;
		}, 25000);
	}
})();
