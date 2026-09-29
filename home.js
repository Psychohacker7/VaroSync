const $ = jQuery
let windowWidth = $(window).width()
$(window).on('resize', function() {
	windowWidth = $(window).width()
})
gsap.config({ nullTargetWarn: false })
let transitionOffset = 400
let webglState = {
	isInitialized: false,
	isLoading: true,
	/* true once WebGL has failed to start, or was lost. Every loader that waits
	   for the model treats this as "done" — see webglUnavailable(). */
	failed: false,
	loadingProgress: 0,
	isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
/* WebGL could not start (no GPU — common on corporate virtual desktops —
   blocked by policy, or old hardware) or the context was lost. The page must
   not wait for a model that will never render: mark the state failed so every
   loader waiting on it moves on at once, hide the empty canvas, and set
   html.no-webgl so the design can show a static image in the model's place.
   Called only after a real failure; nothing is sniffed in advance. */
function webglUnavailable(canvas) {
	webglState.failed = true
	webglState.isLoading = false
	webglState.isInitialized = false
	document.documentElement.classList.add('no-webgl')
	if (canvas) canvas.style.display = 'none'
	document.dispatchEvent(new CustomEvent('webglFailed'))
}

/* Can this browser actually give us what the renderer needs? The bundled
   three.js requires WebGL2 (WebGL1 support was removed in r163). Asking for a
   context on a scratch canvas IS the attempt — if the browser cannot provide
   one, that is the failure, caught before three.js logs its own error — and
   the scratch context is released at once so it holds no GPU slot. */
function webgl2Available() {
	try {
		const probe = document.createElement('canvas')
		const gl = probe.getContext('webgl2')
		if (!gl) return false
		const lose = gl.getExtension('WEBGL_lose_context')
		if (lose) lose.loseContext()
		return true
	} catch (e) {
		return false
	}
}

const WEBGL_BAND = 0.70

const WEBGL_STICK_WIDE = 0.42
const WEBGL_STICK_NARROW = 0.24

const stickFrac = () => (window.innerWidth >= 992 ? WEBGL_STICK_WIDE : WEBGL_STICK_NARROW)
const WEBGL_STICK = WEBGL_STICK_WIDE
let scroll

initPageTransitions()

function initLoaderHome() {

	const LETTER = '.vs-lockup--loader [data-letter]'
	const LOCKUP = '.vs-lockup--loader'

	var tl = gsap.timeline()
	tl.set('html', {cursor:'wait'}, 0)
	tl.call(function() { scroll.stop() }, null, 0)

	function riseDistance() {
		const wd = document.querySelector(LOCKUP + ' .vs-word')
		if(!wd) return $(window).height()
		const r = wd.getBoundingClientRect()
		return (window.innerHeight - r.top) + r.height * .5
	}
	tl.set(LETTER, {willChange:'transform', autoAlpha:1, y:riseDistance(), transformOrigin:'center top'})

	tl.set(['[data-home-anim-last]', '#scroll_down', '[data-webgl-anim]'], {autoAlpha:0}, 0)
	tl.to('.loading-container', {duration:1, y:0, ease:'power3.inOut'}, '<')

	function waterfallIn(e) {

		const total = ((e && e.detail && e.detail.duration) || 3000) / 1000
		const each = Math.min(1.1, total * .4)
		const stagger = Math.max(.04, (total - each) / 7)
		gsap.to(LETTER, {
			duration:each, stagger:stagger, y:0, ease:'power3',
			onComplete:awaitAsset,
		})
	}

	document.addEventListener('mitosisStart', waterfallIn, {once:true})
	/* Start the model download with the intro, not after the letters land, and
	   never hold the page for it: after 2.5 s the page opens and the model
	   appears when it arrives, as on an in-site arrival (awaitModel below). */
	if (typeof window.Scene !== 'undefined') homeWEBGL()
	else document.addEventListener('DOMContentLoaded', homeWEBGL, {once:true})

	function awaitAsset() {
		const t0 = performance.now()
		const webglInterval = setInterval(function() {
			if(!webglState.isInitialized && !webglState.failed && performance.now() - t0 < 2500) return
			clearInterval(webglInterval)
			setTimeout(migrate, 300)
		}, 50)
	}

	function migrate() {
		const tl_after = gsap.timeline()

		const from = document.querySelector(LOCKUP).getBoundingClientRect()
		const target = document.getElementById('home_default_logo')
		const to = target.getBoundingClientRect()

		const TRAVEL   = 1.35
		const HANDOVER = TRAVEL - .25
		const VEIL     = TRAVEL - .1
		const VEIL_DUR = .5
		const REVEAL   = VEIL + .25
		const TAIL     = 1.3

		tl_after.to(LOCKUP, {
			duration:TRAVEL,
			x:to.left - from.left,
			y:to.top - from.top,
			scale:to.width / from.width,
			transformOrigin:'left top',
			ease:'power3.inOut',
		})

		tl_after.set(target, {autoAlpha:1}, HANDOVER)
		tl_after.set('html', {cursor:'auto'}, HANDOVER)

		tl_after.to(['.loading-container', '[data-preloader-logo]'],
			{autoAlpha:0, duration:VEIL_DUR, ease:'power2.inOut'}, VEIL)
		tl_after.set('[data-preloader-logo]', {display:'none'}, VEIL + VEIL_DUR)

		homeFirstAnim(tl_after, REVEAL)

		tl_after.call(function() {
			setTimeout(function() { scroll.start(); ScrollTrigger.refresh() }, 0)
		}, null, REVEAL + TAIL)
	}

}

/* Arrival from inside the site: no veil and no travel. The logo forms in its corner, the
   blob faster and the letters dropping in from above, then the same reveal as the full intro. */
function initLoaderHomeMini() {
	const LOGO = document.getElementById('home_default_logo')
	const MARK = LOGO.querySelector('.vs-mark')
	const LETTER = '#home_default_logo [data-letter]'

	scroll.stop()
	gsap.set(['[data-home-anim-last]', '#scroll_down', '[data-webgl-anim]'], {autoAlpha:0})
	gsap.set(LOGO, {autoAlpha:1})
	/* The 3D runtime is a deferred module and has not run yet when this starts. */
	if (typeof window.Scene !== 'undefined') homeWEBGL()
	else document.addEventListener('DOMContentLoaded', homeWEBGL, {once:true})

	function showMark() {
		gsap.set(MARK, {autoAlpha:1})
		const overlay = document.querySelector('.vs-mark--mini')
		if (overlay) overlay.remove()
	}

	function reveal() {
		showMark()
		gsap.set(LETTER, {clearProps:'transform,willChange'})
		const modelReady = webglState.isInitialized
		const tl = gsap.timeline()
		homeFirstAnim(tl, 0)
		tl.call(function() {
			setTimeout(function() {
				if (!$('.burger-toggle').hasClass('menu-opened')) scroll.start()
				ScrollTrigger.refresh()
				/* A model that finished loading during the reveal measured the hero mid-animation. */
				if (!modelReady && webglState.isInitialized) window.dispatchEvent(new Event('resize'))
			}, 0)
		}, null, 1.3)
	}

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { reveal(); return }

	/* Just above the top edge: the shortest way in for a logo that sits in the corner. */
	function dropDistance() {
		const r = LOGO.querySelector('.vs-word').getBoundingClientRect()
		return -(r.bottom + r.height * .5)
	}
	gsap.set(MARK, {autoAlpha:0})
	gsap.set(LETTER, {willChange:'transform', y:dropDistance()})

	let started = false
	function waterfallIn(e) {
		if (started) return
		started = true
		const total = ((e && e.detail && e.detail.duration) || 850) / 1000
		const each = Math.min(1.1, total * .4)
		const stagger = Math.max(.04, (total - each) / 7)
		gsap.to(LETTER, {duration:each, stagger:stagger, y:0, ease:'power3', onComplete:awaitModel})
	}

	/* The model has usually been cached by an earlier visit; never hold the page for it. */
	function awaitModel() {
		const t0 = performance.now()
		const wait = setInterval(function() {
			if (!webglState.isInitialized && !webglState.failed && performance.now() - t0 < 2500) return
			clearInterval(wait)
			reveal()
		}, 50)
	}

	document.addEventListener('mitosisStart', waterfallIn, {once:true})
	document.addEventListener('mitosisDone', showMark, {once:true})
	setTimeout(function() { if (!started) { showMark(); waterfallIn() } }, 2000)
}

function initLoader() {

	gsap.set('[data-target-heading]', {transformStyle:'preserve-3d'})
	$('.logo-transition-name svg > :is(g,path:not(.letter-path))').addClass('letter-path')
	$('.logo-transition-name').css('width', $('[data-target-heading] svg').width())
	const logoHeight = $('.logo-transition-name').height()
	const logo = $('.logo-transition-name svg').attr('data-inverse')
	const tl = gsap.timeline()

	tl.set('html', {cursor:'wait'}, '<')
	if(document.querySelector('[data-preloader-logo]')) {
		tl.set('[data-preloader-logo]', {autoAlpha:0})
	}
	tl.set('.transition-container', {autoAlpha:1})
	tl.set('.logo-transition-name', {y:logoHeight})
	if(windowWidth >= 1024) {
		tl.set('.logo-transition-name .letter-path', {y:logoHeight * 1.4,transformOrigin:'center top'})
	}

	if(windowWidth >= 1024) {
		tl.to('.logo-transition-name .letter-path', {y:0,duration:1,stagger:.05,ease:'power3'})
	}
	tl.to('.logo-transition-name', {y:0,duration:1,stagger:.05,ease:'power3'}, '<')
	tl.call(function() {
		const logoY = $('.logo-transition-name').offset().top - $('[data-target-heading]')?.offset()?.top
		const logoX = $('[data-target-heading]').offset().left - $('.logo-transition-name').offset().left

		gsap.to('.logo-transition-name', {y:-logoY,x:logoX,duration:1,ease:'power4.inOut'})
	}, null)
	tl.set('html', {cursor:'auto'}, '<')
	tl.to('.loading-container', {autoAlpha:0,duration:1,ease:'power4.inOut'}, '<+=.3')
	tl.call(function() {
		animationOnPageLoad()
	}, null, '<')

	tl.set('[data-target-heading]', {autoAlpha:1})
	tl.set('.logo-transition-name', {autoAlpha:0})
	tl.call(function() {
		scroll.start()
	}, null)

	tl.call(function() {
		scroll.stop()
	}, null, 0)
}

function pageTransitionIn() {
	const tl_g = gsap.timeline()

	tl_g.set('html', {cursor:'wait'}, '<')
	tl_g.to('.loading-container', {autoAlpha:1,duration:.3})
	tl_g.to('.wrapper_site', {filter:'blur(5px)',duration:.25}, '<')

	tl_g.call(function() {
		scroll.stop()
	}, null, 0)
}

function pageTransitionOut() {

	const logoHeight = $('.logo-transition-name').height()
	const logo = $('.logo-transition-name svg').attr('data-inverse')
	gsap.set('[data-target-heading]', {transformStyle:'preserve-3d'})
	$('.logo-transition-name svg > :is(g,path:not(.letter-path))').addClass('letter-path')
	$('.logo-transition-name').css('width', $('[data-target-heading]').width())
	const tl = gsap.timeline()

	tl.call(function() {
		scroll.stop()
	}, null)
	tl.set('.logo-transition-name', {clearProps:'transform,opacity,visibility'})
	tl.set('.logo-transition-name .letter-path', {clearProps:'transform,opacity,visibility'})
	tl.set('.transition-container', {autoAlpha:1})

	if($('body').hasClass('home')) {
		if(windowWidth >= 1024) {
			tl.set('.logo-transition-name svg', {yPercent:135})
			tl.to('.logo-transition-name svg', {yPercent:0,duration:1,stagger:.03,ease:'power3.inOut'})
		}else {
			tl.set('.logo-transition-name', {yPercent:135})
			tl.to('.logo-transition-name', {yPercent:0,duration:1,ease:'power3.inOut'})
		}
	}else {
		if(windowWidth >= 1024) {
			tl.set('.logo-transition-name .letter-path', {yPercent:logoHeight * 1.4})
			tl.to('.logo-transition-name .letter-path', {yPercent:0,duration:1,stagger:.05,ease:'power3'})
		}else {
			tl.set('.logo-transition-name', {yPercent:logoHeight * 1.4})
			tl.to('.logo-transition-name', {yPercent:0,duration:1,ease:'power3'})
		}
	}
	tl.call(function() {
		const logoY = $('.logo-transition-name').offset().top - $('[data-target-heading]')?.offset()?.top
		const logoX = $('[data-target-heading]').offset().left - $('.logo-transition-name').offset().left
		if($('body').hasClass('home')) {
			if(windowWidth >= 1024) {
				gsap.to('.logo-transition-name svg', {y:-logoY,duration:1,stagger:.03,ease:'power3.inOut'})
			}else {
				gsap.to('.logo-transition-name', {y:-logoY,duration:1,ease:'power3.inOut'})
			}
		}else {
			gsap.to('.logo-transition-name', {y:-logoY,x:logoX,duration:1,ease:'power4.inOut'})
		}
	}, null)
	tl.set('html', {cursor:'auto'}, '<')
	tl.to('.loading-container', {autoAlpha:0,duration:1,ease:'power4.inOut'}, '<+=.3')
	tl.call(function() {
		animationOnPageLoad()
	}, null, '<')

	tl.set('[data-target-heading]', {autoAlpha:1})
	tl.set('.logo-transition-name', {autoAlpha:0})
	tl.call(function() {
		scroll.start()
	}, null, '>')
}

function pageTransitionOutHome() {
	const logoHeight = $('.logo-transition-name').height()
	const logo = $('.logo-transition-name svg').attr('data-inverse')
	$('.logo-transition-name').css('width', $('[data-target-heading]').width())
	const tl = gsap.timeline()

	tl.call(function() {
		scroll.stop()
	}, null)
	tl.set('[data-target-heading]', {autoAlpha:0})
	tl.set('[data-preloader-logo]', {autoAlpha:0})
	tl.set('.logo-transition-name', {clearProps:'transform,opacity,visibility'})
	tl.set('.logo-transition-name .letter-path', {clearProps:'transform,opacity,visibility'})
	tl.set('.transition-container', {autoAlpha:1})
	tl.set('#wrapper_progress', {autoAlpha:1,width:0})
	tl.set('#progress_load', {width:0})

	let variable_logo = windowWidth >= 1024 ? '.logo-transition-name svg' : '.logo-transition-name'

	tl.set(variable_logo, {yPercent:135})
	gsap.to('#wrapper_progress', {delay:.5,duration:1,width:'100%'})
	tl.to(variable_logo, {yPercent:0,duration:1,stagger:.03,ease:'power3.inOut',onComplete:() => {
			var tl_after = gsap.timeline()
			homeWEBGL()

			document.addEventListener('webglProgress', (e) => {
				gsap.to('#progress_load', {duration:.3,overwrite:true,width:(e.detail.progress + 10) + '%'})
			})
			const logoMobDeskt = windowWidth >= 1024 ? '.logo-transition-name svg' : '.logo-transition-name'
			const logoY = $('.logo-transition-name').offset().top - $('[data-target-heading]')?.offset()?.top
			const logoX = $('[data-target-heading]').offset().left - $('.logo-transition-name').offset().left

			const webglInterval = setInterval(() => {
				if(webglState.isInitialized || webglState.failed) {
					clearInterval(webglInterval)
					tl_after.to(logoMobDeskt, {delay:.8,y:-logoY,duration:1,stagger:.03,ease:'power3.inOut'}, '<')
					tl_after.to('#wrapper_progress', {autoAlpha:0,ease:'power3'}, '<')
					tl_after.set('html', {cursor:'auto'}, '<')
					tl_after.to('.loading-container', {autoAlpha:0,duration:1,ease:'power4.inOut'}, '<+=.3')
					tl_after.call(function() {
						animationOnPageLoad()
					}, null, '<-=.3')

					tl_after.set('[data-target-heading]', {autoAlpha:1})
					tl_after.set('.logo-transition-name', {autoAlpha:0})
					tl_after.call(function() {
						scroll.start()
					}, null, '>')
				}
			}, 300)
		}})
}

function initPageTransitions()  {

	if ('scrollRestoration' in history) {
		history.scrollRestoration = 'manual'
	}

	const resetScrollTop = () => {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0

		if (location.hash) {
			history.replaceState(null, '', location.pathname + location.search)
		}

		if (scroll && typeof scroll.scrollTo === 'function') {
			const wasStopped = scroll.isStopped
			scroll.scrollTo(0, { immediate: true })
			scroll.stop()
			if (!wasStopped) scroll.start()
		}
	}

	resetScrollTop()

	window.addEventListener('pageshow', e => {
		if (e.persisted) resetScrollTop()
	})

	window.addEventListener('load', () => {
		requestAnimationFrame(resetScrollTop)
	})

	barba.hooks.enter(e => {
		window.scrollTo(0, 0)
		if (scroll) scroll.scrollTo(0, { immediate: true })
		ScrollTrigger.refresh()
	})

	barba.hooks.after(data => {
		initBarbaNavUpdate(data)
	})

	barba.init({
		sync: true,
		timeout: 7000,

		prevent: ({ el }) => {
			const href = el && el.getAttribute && el.getAttribute('href')
			if (!href || href.charAt(0) === '#' || /^[a-z][a-z0-9+.-]*:/i.test(href)) return false
			try {
				return new URL(href, window.location.origin).pathname !== '/'
			} catch (e) {
				return false
			}
		},
		transitions: [
			{
				name: 'default',
				once(data) {
					initBarbaNavUpdate(data)
					initSmoothScroll(data.next.container)
					if (scroll) scroll.scrollTo(0, { immediate: true })
					initScript()
					initLoader()
				},
				async leave(data) {
					initChangePageTitle(data.next.container)
					pageTransitionIn(data.current)
					await delay(transitionOffset)
					scroll.destroy()
					data.current.container.remove()
				},
				async enter(data) {
					if($('body').hasClass('home')) {
						pageTransitionOutHome(data.next)
					}else {
						pageTransitionOut(data.next)
					}
				},
					async beforeEnter(data) {
						const matches = data.next.html.match(/<body.+?class="([^""]*)"/i)
						document.body.setAttribute('class', (matches && matches.at(1)) ?? '')
						$('html').attr('lang', 'en-US')

					ScrollTrigger.getAll().forEach(t => t.kill())
					initSmoothScroll(data.next.container)
					initScript()
				},
			},
			{
				name: 'to-home',
				from: {
				},
				to: {
					namespace: ['home']
				},
				once(data) {
					initSmoothScroll(data.next.container)
					initScript()
					if (document.documentElement.classList.contains('vs-inside')) initLoaderHomeMini()
					else initLoaderHome()
				}
			}
		]
	})

	function initSmoothScroll(container) {
		setTimeout(() => {
			window.scrollTo(0, 0)
		}, 50)

		scroll = new Lenis()
		scroll.on('scroll', ScrollTrigger.update)

		scroll.scrollTo(0, { immediate: true })

		gsap.ticker.add((time)=>{
			scroll.raf(time * 1000)
		})

		gsap.ticker.lagSmoothing(0)

		ScrollTrigger.addEventListener('refresh', () => {
			if (!scroll) return
			scroll.resize()
			scroll.reset()
		})

		ScrollTrigger.refresh()
	}

	function initChangePageTitle(container) {
		var nextPageTitle = $(container).find('.title_page').html();
		$(document).find('.logo-transition-name').html(nextPageTitle);
	}
}

function initScript() {
	initSplitText()
	headingNameIndent()
	initOther()
	scrollTriggerAnimations()
}

function animationOnPageLoad() {
	const tl = gsap.timeline()

	if(document.getElementById('page_home')) {
		tl.call(function() {
			homeFirstAnim(tl)
		}, null, 0)
	}
}

function homeFirstAnim(tl, at) {

	const t = typeof at === 'number' ? at : 0

	gsap.set('[data-home-anim-last]', {autoAlpha:0})
	gsap.set('#scroll_down', {autoAlpha:0,y:30})

	if(windowWidth >= 1024) {
		tl.fromTo('[data-webgl-anim]', {rotate:90,autoAlpha:0,scale:.7,y:'20vw'}, {duration:1,rotate:0,autoAlpha:1,scale:1,y:0}, t)
	}else {
		tl.fromTo('[data-webgl-anim]', {xPercent:10,yPercent:50,rotate:90,autoAlpha:0,scale:.7,y:'20vw'}, {duration:1,xPercent:0,yPercent:0,rotate:0,autoAlpha:1,scale:1,y:0}, t)
	}

	tl.to('.home_bottom_line', {duration:.8,width:'100%',ease:'power3.inOut'}, t + .2)
	tl.to('.home_vertical_line', {duration:.8,height:'100%',ease:'power3.inOut'}, t + .2)
	tl.to('.home_menu_line', {duration:.8,width:'100%',ease:'power3.inOut'}, t + .2)
	tl.to('[data-home-anim-last]', {duration:.7,autoAlpha:1,ease:'power3.inOut'}, t + .4)
	tl.to('#scroll_down', {duration:.7,autoAlpha:1,y:0,ease:'power4'}, t + .6)
}

function normaliseJustifiedBreaks() {

	const narrow = window.matchMedia('(max-width:1023.98px)').matches
	$('.vs-justify').each(function () {
		if (this.__vsPristine == null) this.__vsPristine = this.innerHTML
		this.innerHTML = narrow ? this.__vsPristine.replace(/<br\s*\/?>/gi, ' ') : this.__vsPristine
	})
}

function balanceJustifiedTracking() {

	const TRACK_MAX_EM = 0.03
	const TRACK_SHARE = 0.55
	const MAX_GAP_EM = 0.45
	if (!window.matchMedia('(max-width:1023.98px)').matches) {
		$('.vs-justify .line').each(function () {
			this.style.letterSpacing = ''
			this.style.removeProperty('text-align')
			this.style.removeProperty('text-align-last')
		})
		return
	}
	$('.vs-justify').each(function () {
		const probe = document.createElement('div')
		probe.style.cssText = 'position:absolute;left:-9999px;top:0;white-space:nowrap;width:auto;visibility:hidden;' +
			'hyphens:none;-webkit-hyphens:none;word-break:normal;overflow-wrap:normal'

		this.appendChild(probe)
		const wrappers = this.querySelectorAll('.wrapper_line')
		wrappers.forEach((wrap, i) => {
			const line = wrap.querySelector('.line')
			if (!line) return
			line.style.letterSpacing = ''
			line.style.removeProperty('text-align')
			line.style.removeProperty('text-align-last')
			if (i === wrappers.length - 1) return
			const cs = getComputedStyle(line)
			const fs = parseFloat(cs.fontSize)
			const base = parseFloat(cs.letterSpacing) || 0
			const text = line.textContent.trim()
			const chars = text.length
			if (!chars) return
			probe.style.font = cs.font || ''
			probe.style.fontFamily = cs.fontFamily
			probe.style.fontSize = cs.fontSize
			probe.style.fontWeight = cs.fontWeight
			probe.style.letterSpacing = cs.letterSpacing
			probe.style.wordSpacing = cs.wordSpacing
			probe.textContent = text
			const slack = line.getBoundingClientRect().width - probe.getBoundingClientRect().width
			if (slack <= 0) return
			const extra = Math.min((slack * TRACK_SHARE) / chars, fs * TRACK_MAX_EM)
			const gaps = text.split(/\s+/).length - 1
			const residual = gaps ? (slack - extra * chars) / gaps : 0
			if (residual > fs * MAX_GAP_EM) {

				line.style.letterSpacing = ''
				line.style.setProperty('text-align', 'left', 'important')
				line.style.setProperty('text-align-last', 'left', 'important')
				return
			}
			line.style.setProperty('text-align', 'justify', 'important')
			line.style.removeProperty('text-align-last')
			const wasH = line.getBoundingClientRect().height
			line.style.letterSpacing = (base + extra).toFixed(3) + 'px'

			if (line.getBoundingClientRect().height > wasH + 1) {
				line.style.letterSpacing = ''
			}
		})
		probe.remove()
	})
}

function initSplitText() {

	/* Lines must never be split twice: a split over already-baked line blocks inherits their
	   break points as forced breaks (seen on iOS, where load timing let splits overlap). So any
	   earlier split is flattened before splitting, and the first split waits for the web font,
	   whose metrics decide the breaks. */
	const unsplit = () => {
		document.querySelectorAll('[data-splitting-lines-overflow] .wrapper_line, [data-splitting-lines-overflow] .line')
			.forEach(n => n.replaceWith(...n.childNodes))
		document.querySelectorAll('[data-splitting-lines-overflow]').forEach(e => e.normalize())
	}

	let linesSplit
	function boot() {
		unsplit()
		normaliseJustifiedBreaks()
		linesSplit = new SplitText('[data-splitting-lines-overflow]', {type:'lines',linesClass:'line'});
		$('[data-splitting-lines-overflow] .line').wrap('<div class="wrapper_line">');
		balanceJustifiedTracking()

		if(document.querySelector('html').classList.contains('split_is_init')) {
			setTimeout(() => {
				splittingLinesOverflow()
				ScrollTrigger.refresh()
			}, 100)
		}

		const onLoaded = () => {
			document.querySelector('html').classList.add('split_is_init')
			setTimeout(refreshSplitText, 100)
		}
		if (document.readyState === 'complete') onLoaded()
		else window.addEventListener('load', onLoaded)
	}

	if (document.fonts && document.fonts.ready) document.fonts.ready.then(boot)
	else boot()

	function refreshSplitText() {
		if (!linesSplit) return
		linesSplit.revert()
		unsplit()
		normaliseJustifiedBreaks()
		linesSplit.split({type:'lines',linesClass:'line'})
		$('[data-splitting-lines-overflow] .line').wrap('<div class="wrapper_line">');

		splittingLinesOverflow()
		balanceJustifiedTracking()
	}

	let trackTimer
	window.addEventListener('resize', () => {
		clearTimeout(trackTimer)
		trackTimer = setTimeout(balanceJustifiedTracking, 150)
	})
}

function initBarbaNavUpdate(data) {
	const page_url = data.next.url.href
	$('.menu_global a[href="'+ page_url +'"]').addClass('vs-nav-current')
}

function headingNameIndent() {
	$('.section-indent').each(function () {
		const name = $(this).find('.width-view-indent')
		const indent_margin = $(this).find('.indent-margin-right')
		indent_margin.css('marginRight', name.width() * 1.5)
	})
}

function initOther() {

	$('.burger-toggle').on('click', function() {
		$('.burger-toggle').toggleClass('menu-opened')
		if($('.burger-toggle').hasClass('menu-opened')) {
			scroll.stop()
			const tl = gsap.timeline()

			tl.to('.menu-bg', {overwrite:true,height:'100%',duration:.8,ease:'power4.inOut'})
			tl.fromTo('#menu-mobile', {autoAlpha:0},{overwrite:true,autoAlpha:1,duration:.8,ease:'power4.inOut'}, '<')
			tl.fromTo('[data-line-menu-mob]', {width:0}, {overwrite:true,width:'100%',duration:.8,stagger:.05,ease:'power4.inOut'}, '<+=.1')
			tl.fromTo('[data-menu-opacity-mob]', {autoAlpha:0,},{overwrite:true,autoAlpha:1,duration:.8,stagger:.05,ease:'power4.inOut'}, '<+=.4')

		}else {
			scroll.start()
			const tl = gsap.timeline()
			tl.to('[data-menu-opacity-mob]', {autoAlpha:0,duration:.8,stagger:-.05,ease:'power4.inOut'})
			tl.to('[data-line-menu-mob]', {width:0,duration:.8,stagger:-.05,ease:'power4.inOut'}, '<+=.1')
			tl.to('.menu-bg', {overwrite:true,height:0,duration:.8,ease:'power4.inOut'}, '<+=.5')
			tl.to('#menu-mobile', {overwrite:true,autoAlpha:0,duration:1,ease:'power4.inOut'}, '<')
		}
	})

	scroll.on('scroll', (e) => {

		const webgl_section = $('.webgl3d-container').height() * 0.78
		const headUp = e.targetScroll > webgl_section
		if(headUp) {
			$('#header_sticky').addClass('is_visible')
		}else {
			$('#header_sticky').removeClass('is_visible')
		}

		$('body').toggleClass('vs-head-up', headUp)

		$('body').toggleClass('vs-head-away', !headUp && e.targetScroll >= 40)
	})

	$(window).on('resize', function() {
		headingNameIndent()
		resizeVhHeight()
	})

	resizeVhHeight()
	scroll.on('scroll', (e) => {
		if($(window).width() < 1024) {
			gsap.set('.loading-container', {height:window.innerHeight})
		}
	})

	if(document.querySelector('[data-webgl-anim]')) {

		$('[data-webgl-anim]').css('height', $(window).height() * (WEBGL_BAND + stickFrac()))
		$('[data-webgl-anim] > .h-screen').css('height', $(window).height() * WEBGL_BAND)
	}

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

}

function scrollTriggerAnimations() {

	$('img, video').not('[data-vs-element] img, [data-vs-element] video').each(function () {
		const $media = $(this);

		if ($media.is('video')) {
			$media.on('loadedmetadata', function () {
				ScrollTrigger.refresh();
			});
		} else {
			$media.on('load', function () {
				ScrollTrigger.refresh();
			});
		}
	})

	const linesMobAnim = document.querySelectorAll('[data-line-width-anim]')
	if(linesMobAnim.length && windowWidth < 1024) {
		linesMobAnim.forEach(line => {
			gsap.set(line, {width:0})
			gsap.timeline({
				scrollTrigger: {
					trigger: line,
					scrub: false,
					start: 'top 90%'
				}
			}).to(line, {width:'100%',duration:1,ease:'power3.inOut'})
		})
	}

	const image_story = document.getElementById('image_story')
	if(image_story && windowWidth >= 1024) {
		const parent_height = `calc(${window.innerHeight}px - (var(--size-20) * 2) - var(--header-sticky-height))`
		$('#image_story').parent().css({minHeight: parent_height})
		$('#image_story').find('.wrap-distort-canvas').css({height: parent_height})
		const story_40_size = $('#story_40_size').css('marginBottom')
		const storySection = $('#section_story').css('marginTop')
		const storySection_inside = $('[data-story-section]').height()
		gsap.to(image_story, {
			height: '100%',
			ease: 'none',
			scrollTrigger: {
				trigger: '[data-story-section]',
				scrub: true,
				start: `top 100%-=${parseInt(storySection)}px`,
				end: `+=${storySection_inside}px`
			}
		})
	}

	const process_block = document.getElementById('process_block')
	if(process_block) {
		const processes = document.querySelectorAll('.wrap_item_process')
		if(windowWidth >= 1024) {
			const space_accord_process = parseInt($('#space_accord_process').css('width'))

			gsap.set(process_block, {height:(processes.length * 1.2) * window.innerHeight})

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: process_block,
					scrub: true,
					start: 'top -5%',
					end: 'bottom bottom'
				}
			})

			processes.forEach((proces, index) => {
				const description = proces.querySelector('.description')

				const word = proces.querySelector('.vs-fern-word')
				if((processes.length - 1) > index ) {
					tl.to(proces, {width:space_accord_process,ease:'none'})
					tl.to(description, {autoAlpha:0,ease:'none'}, '<')

					if(word) tl.to(word, {autoAlpha:0,duration:0.2,ease:'none'}, '<')

					const embed = proces.querySelector('[data-vs-element]')
					if(embed) tl.to(embed, {autoAlpha:0,duration:0.2,ease:'none'}, '<')
				}
			})

			const st = tl.scrollTrigger
			if(st && scroll && typeof scroll.scrollTo === 'function') {
				const steps = processes.length - 1
				const SETTLE = 130
				const REST = 420

				const indexAt = (p) => Math.min(1, Math.max(0, p)) * steps
				const stopFor = (i) => Math.round(st.start + (st.end - st.start) * (i / steps))

				let settleTimer = null, restTimer = null, lastY = -1

				let rested = null
				let anchor = null
				let snapping = false

				scroll.on('scroll', () => {
					if(snapping) return
					const p = st.progress

					if(p <= 0 || p >= 1) {

						rested = p <= 0 ? 0 : steps
						anchor = null
						clearTimeout(settleTimer)
						clearTimeout(restTimer)
						return
					}

					if(anchor === null) anchor = (rested !== null) ? rested : Math.round(indexAt(p))
					clearTimeout(restTimer)
					clearTimeout(settleTimer)
					lastY = window.scrollY

					settleTimer = setTimeout(function check() {

						const here = window.scrollY
						if(Math.abs(here - lastY) > 2) {
							lastY = here
							settleTimer = setTimeout(check, SETTLE)
							return
						}
						const now = indexAt(st.progress)
						if(anchor === null) return

						const wanted = Math.round(now)
						const limited = Math.min(anchor + 1, Math.max(anchor - 1, wanted))
						const target = Math.abs(now - limited) > 0.5 ? wanted : limited

						if(target < 0 || target > steps) { anchor = null; return }

						const y = stopFor(target)
						rested = target
						restTimer = setTimeout(() => { anchor = null }, REST)
						const settleDistance = Math.abs(y - window.scrollY)
						if(settleDistance < 4) return

						snapping = true
						scroll.scrollTo(y, {
							duration: Math.min(0.85, Math.max(0.4, settleDistance / 700)),

							easing: (x) => x * x * (3 - 2 * x),
							onComplete: () => { snapping = false },
						})

						setTimeout(() => { snapping = false }, 1000)
					}, SETTLE)
				})
			}
		}
	}

	const process_wrapper = document.querySelector('.process_wrapper')
	if(process_wrapper) {
		const colorBgHeader = $(header_sticky).css('backgroundColor')
		const colorBg = $(process_wrapper).css('backgroundColor')

		ScrollTrigger.create({
			trigger: process_wrapper,
			start: `top top+=${$('#header_sticky').height()}px`,
			end: `+=${$(process_wrapper).height()}px`,
			onEnter: (self) => {
				gsap.to('#header_sticky', {duration:.3,backgroundColor:colorBg})
				$('#header_sticky').addClass('text-white')
			},
			onEnterBack: (self) => {
				$('#header_sticky').addClass('text-white')
				gsap.to('#header_sticky', {duration:.3,backgroundColor:colorBg})
			},
			onLeave: (self) => {
				$('#header_sticky').removeClass('text-white')
				gsap.to('#header_sticky', {duration:.3,backgroundColor:colorBgHeader})
			},
			onLeaveBack: (self) => {
				$('#header_sticky').removeClass('text-white')
				gsap.to('#header_sticky', {duration:.3,backgroundColor:colorBgHeader})
			}
		})
	}

}

function splittingLinesOverflow() {
	gsap.utils.toArray('[data-anim-splitting-scroll]').forEach(item => {
		const lines = item.querySelectorAll('.line')
		gsap.set(item, {autoAlpha:1})
		gsap.set(lines, {yPercent:160,rotate:2})
		gsap.to(lines, {
			yPercent:0,
			rotate:0,
			duration:1.5,
			stagger:windowWidth >=1024 ? .2 : .1,
			ease: 'power4',
			scrollTrigger: {
				trigger: item,
				start: 'top 90%',
				scrub: false
			},
		})
	})
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done()
		}, n)
	})
}

function resizeVhHeight() {
	$('.one-height-screen').css('height', $(window).height())
}

const debounce = (func, delay) => {
	let clearTimer;
	return function() {
		const context = this;
		const args = arguments;
		clearTimeout(clearTimer);
		clearTimer = setTimeout(() => func.apply(context, args), delay);
	}
}

function homeWEBGL() {
	const windowHeight = $(window).height()
	const canvas = document.querySelector('canvas.webgl3d');
	if (!canvas) {
		return
	}
	/* Before the model download: no point fetching a model nothing can draw. */
	if (webglState.failed || !webgl2Available()) {
		webglUnavailable(canvas)
		return
	}

	let model = null;

	const MODEL = { w: 1.362, h: 1.47, d: 2.6 };

	const ROT_Y_OPEN = 1.830;
	const ROT_Y_HAND = 1.320;
	const ROT_Y_SHUT = 0.1962;
	const ROT_Y_LAND = -1.3746;

	const ROT_ORDER = 'ZYX';
	const ROT_X_LAND = 0.30;
	const ROT_X_FLASH = 0.52;
	const ROT_Z_BANK = -0.115;
	const ROT_Z_LAND = -0.030;

	const OPEN_GAP_PX = 60;
	const OPEN_INK_H_FRAC = 0.425;

	let cueOffsetPx = 0;

	let textRightPx = 0;
	let textBottomDocPx = 0;
	let textTopDocPx = 0;
	let spacerTopDocPx = 0;
	const measureCueOffset = () => {
		const cue = document.querySelector('#scroll_down');
		const spacer = document.querySelector('[data-webgl-anim]');
		const sy = window.scrollY || 0;
		cueOffsetPx = (cue && spacer)
			? (spacer.getBoundingClientRect().top + sy) - (cue.getBoundingClientRect().bottom + sy)
			: 0;

		textRightPx = 0;
		textBottomDocPx = 0;
		document.querySelectorAll('.line').forEach((el) => {
			if (!(el.textContent || '').trim()) return;
			const rg = document.createRange();
			rg.selectNodeContents(el);
			const r = rg.getBoundingClientRect();
			if (!r.width) return;
			textRightPx = Math.max(textRightPx, r.right);
			textBottomDocPx = Math.max(textBottomDocPx, r.bottom + sy);
			textTopDocPx = textTopDocPx === 0 ? r.top + sy : Math.min(textTopDocPx, r.top + sy);
		});
		spacerTopDocPx = spacer ? spacer.getBoundingClientRect().top + sy : 0;
	};

	const LAND_INK_H_FRAC = 0.43;

	const NARROW_CENTROID_TRIM_PX = 37;
	const MOBILE_COPY_GAP_PX = OPEN_GAP_PX + NARROW_CENTROID_TRIM_PX;
	const landYNarrow = (scale) => {
		const band = window.innerHeight * WEBGL_BAND;
		const endScroll = spacerTopDocPx + stickFrac() * window.innerHeight;
		const halfInk = (LAND_INK_H_FRAC * scale * band) / 2;
		const inkBottomPx = textTopDocPx > 0
			? (textTopDocPx - endScroll) - MOBILE_COPY_GAP_PX
			: band * 0.88;
		const centrePx = Math.min(inkBottomPx - halfInk, band - halfInk - 12);
		return VIS_HALF_H * (1 - (2 * centrePx) / band);
	};
	const landY = (scale) => {
		const band = window.innerHeight * WEBGL_BAND;
		const endScroll = spacerTopDocPx + stickFrac() * window.innerHeight;
		const inkBottomPx = textBottomDocPx > 0
			? textBottomDocPx - endScroll
			: band * 0.92;
		const halfInk = (LAND_INK_H_FRAC * scale * band) / 2;

		const centrePx = Math.min(inkBottomPx - halfInk, band - halfInk - 12);

		const LAND_CENTROID_TRIM = 0.176;
		return VIS_HALF_H * (1 - (2 * centrePx) / band) + LAND_CENTROID_TRIM;
	};
	const TEXT_CLEAR_PX = 28;
	const openY = (scale) => {
		const band = window.innerHeight * WEBGL_BAND;

		const inkTopPx = Math.max(20, OPEN_GAP_PX - cueOffsetPx);
		const centrePx = inkTopPx + (OPEN_INK_H_FRAC * scale * band) / 2;
		return VIS_HALF_H * (1 - (2 * centrePx) / band);
	};
	const POSE_OPEN = { y: 0.753, z: 0.85, s: 1.12 };

	const POSE_HAND = { y: 0.808, z: 0.70, s: 1.12 };

	const POSE_LAND = { y: -0.930, z: -0.25, s: 1.10 };

	const LANDING_X = 2.40;

	const HALF_SILHOUETTE = 1.34 + 0.08;
	const EDGE_MARGIN = 0.9;

	const CAM_FOV = 20;
	const CAM_Z = 10.6;
	const VIS_HALF_H = CAM_Z * Math.tan((CAM_FOV / 2) * Math.PI / 180);
	const modelProps = () => {
		const width = window.innerWidth;
		const band = window.innerHeight * WEBGL_BAND;
		const halfVisibleW = VIS_HALF_H * (width / band);
		const scale = width >= 1280 ? 1 : 0.8;

		const maxX = halfVisibleW - HALF_SILHOUETTE * scale - EDGE_MARGIN;

		const k = (band / 2) / VIS_HALF_H;
		const minX = textRightPx > 0
			? (textRightPx + TEXT_CLEAR_PX - width / 2) / k + HALF_SILHOUETTE * scale
			: 0;

		const endX = Math.max(0.6, Math.min(Math.max(LANDING_X, minX), maxX));
		return { modelStartX: 0, modelEndX: endX, modelStartScale: scale };
	};const scene = new Scene()

	const ambientLight = new AmbientLight(0xffffff, 0.32);

	const directionalLight = new DirectionalLight(0xffffff, 2.5);
	directionalLight.position.x = 30
	directionalLight.position.y = 10
	directionalLight.position.z = 50
	directionalLight.castShadow = false;
	directionalLight.shadow.mapSize.width = 2048;
	directionalLight.shadow.mapSize.height = 2048;
	directionalLight.shadow.radius = 4;
	directionalLight.shadow.bias = -0.0015;
	const shadowCam = directionalLight.shadow.camera;

	shadowCam.left = -5.0; shadowCam.right = 5.0;
	shadowCam.top = 3.2; shadowCam.bottom = -3.2;
	shadowCam.near = 0.5; shadowCam.far = 140;
	shadowCam.updateProjectionMatrix();

	const fillLight = new DirectionalLight(0xdcdff0, 0.5);
	fillLight.position.set(-34, 6, -14);

	const bounceLight = new DirectionalLight(0xffffff, 0.35);
	bounceLight.position.set(-6, -30, 14);

	const lightParams = {
		ambientIntensity: ambientLight.intensity,
		directionalIntensity: directionalLight.intensity,
		directionalX: directionalLight.position.x,
		directionalY: directionalLight.position.y,
		directionalZ: directionalLight.position.z
	};

	let rotationXControl;
	let rotationYControl;
	let rotationZControl;
	let positionXControl;
	let positionYControl;
	let positionZControl;

	const getModelPath = () => '/public/structures/glp1-receptor-complex.glb';

	const TOON_FRAG = [
		'vec3 base = diffuseColor.rgb;',
		'float bLum = dot( base, vec3( 0.2126, 0.7152, 0.0722 ) );',
		'vec3 tSat = max( mix( vec3( bLum ), base, 1.45 ), vec3( 0.0 ) );',
		'vec3 tCol = tSat / max( 1.0, max( max( tSat.r, tSat.g ), tSat.b ) );',
		'gl_FragColor = vec4( tCol, diffuseColor.a );',
	].join('\n');

	const INK_T_SURFACE = 0.95;
	const INK_T_OFF = 99.0;

	function applyDrawnStyle(root) {
		let meshIndex = 0;
		root.traverse((o) => {
			if (!o.isMesh || !o.material) return;
			const inkT = meshIndex < 3 ? INK_T_OFF : INK_T_SURFACE;
			meshIndex += 1;
			const mats = Array.isArray(o.material) ? o.material : [o.material];
			mats.forEach((m) => {
				m.roughness = 1;
				m.metalness = 0;

				m.onBeforeCompile = (shader) => {
					const hook = shader.fragmentShader.indexOf('#include <opaque_fragment>') !== -1
						? '#include <opaque_fragment>'
						: '#include <output_fragment>';
					shader.fragmentShader = shader.fragmentShader.replace(hook, TOON_FRAG);
				};
				m.needsUpdate = true;
			});
		});
	}

	const OUTLINE_W = 0.0025;
	function buildOutline(root) {
		let src = null;
		root.traverse((o) => { if (o.isMesh && !src) src = o; });
		if (!src || !src.material) return null;
		const MatCtor = (Array.isArray(src.material) ? src.material[0] : src.material).constructor;
		const mat = new MatCtor();
		mat.side = 1;
		mat.fog = false;
		mat.vertexColors = false;
		mat.onBeforeCompile = (shader) => {
			shader.uniforms.uThick = { value: OUTLINE_W };
			shader.vertexShader = 'uniform float uThick;\n' + shader.vertexShader.replace(
				'#include <begin_vertex>',
				'#include <begin_vertex>\n\ttransformed += normalize( objectNormal ) * uThick;'
			);
			const hook = shader.fragmentShader.indexOf('#include <opaque_fragment>') !== -1
				? '#include <opaque_fragment>'
				: '#include <output_fragment>';
			shader.fragmentShader = shader.fragmentShader
				.replace(hook, 'gl_FragColor = vec4( 0.010, 0.011, 0.015, 1.0 );');
		};
		const shell = root.clone(true);
		shell.traverse((o) => {
			if (!o.isMesh) return;
			o.material = mat;
			o.castShadow = false;
			o.receiveShadow = false;
		});
		return shell;
	}

	const loader = new GLTFLoader();
	loader.load(
		getModelPath(),
		function (gltf) {
			if (webglState.failed) return;
			model = gltf.scene;

			model.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });
			applyDrawnStyle(model);
			const outline = buildOutline(model);
			const modelContainer = new Group();

			const leanGroup = new Group();

			const pointerGroup = new Group();

			if (outline) pointerGroup.add(outline);
			pointerGroup.add(model);
			leanGroup.add(pointerGroup);
			modelContainer.add(leanGroup);
			webglState.leanGroup = leanGroup;
			webglState.pointerGroup = pointerGroup;
			scene.add(modelContainer);

			function modelAnimations() {
				measureCueOffset();

				modelContainer.rotation.order = ROT_ORDER;
				modelContainer.rotation.set(0, ROT_Y_OPEN, 0);

				const { modelStartX, modelStartScale, modelEndX } = modelProps();

				modelContainer.position.set(modelStartX, openY(POSE_OPEN.s * modelStartScale), POSE_OPEN.z);
				modelContainer.scale.setScalar(POSE_OPEN.s * modelStartScale);
				scene.add(modelContainer)

				if (webglState.mm) webglState.mm.revert();
				const mm = gsap.matchMedia();
				webglState.mm = mm;

				mm.add('(min-width: 991px)', () => {

					const spacer = document.querySelector('[data-webgl-anim]');
					const stickyEl = spacer && spacer.querySelector('.h-screen');
					if (!spacer || !stickyEl) return;

					const { modelStartScale, modelEndX } = modelProps();

					const openHeight = openY(POSE_OPEN.s * modelStartScale);
					const handHeight = openY(POSE_HAND.s * modelStartScale);
					const landHeight = landY(POSE_LAND.s * modelStartScale);

					const lerp = (a, b, t) => a + (b - a) * t;
					const eOut2 = t => 1 - (1 - t) * (1 - t);
					const eOut3 = t => 1 - Math.pow(1 - t, 3);
					const eInOut2 = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
					const clamp01 = t => t < 0 ? 0 : t > 1 ? 1 : t;

					const FLASH_AT = (ROT_Y_HAND - ROT_Y_SHUT) / (ROT_Y_HAND - ROT_Y_LAND);

					const CTRL_Y = 0.25 * handHeight + 0.75 * landHeight;
					const fall = new QuadraticBezierCurve3(
						new Vector3(0, handHeight, POSE_HAND.z),
						new Vector3(modelEndX * 0.55, CTRL_Y, lerp(POSE_HAND.z, POSE_LAND.z, 0.6)),
						new Vector3(modelEndX, landHeight, POSE_LAND.z)
					);

					const tmp = new Vector3();

					function pose(t, PIN_P) {

						const SEAM = PIN_P * 0.30;
						if (t <= SEAM) {

							const a = eOut2(clamp01(t / SEAM));
							modelContainer.position.set(
								0,
								lerp(openHeight, handHeight, a),
								lerp(POSE_OPEN.z, POSE_HAND.z, a)
							);
							modelContainer.rotation.set(
								lerp(0, 0.10, a),
								lerp(ROT_Y_OPEN, ROT_Y_HAND, a),
								0
							);
							modelContainer.scale.setScalar(lerp(POSE_OPEN.s, POSE_HAND.s, a) * modelStartScale);
							return;
						}

						const b = clamp01((t - SEAM) / (1 - SEAM));

						const sm = b * b * b * (b * (b * 6 - 15) + 10);
						const bs = 0.5 * b + 0.5 * sm;
						fall.getPointAt(bs, tmp);
						modelContainer.position.copy(tmp);

						const ry = bs;

						const flash = b <= FLASH_AT
							? eOut2(clamp01(b / FLASH_AT))
							: 1 - eInOut2(clamp01((b - FLASH_AT) / (1 - FLASH_AT)));

						const bank = b < 0.78
							? eOut3(clamp01(b / 0.78))
							: 1 - eInOut2(clamp01((b - 0.78) / 0.22)) * (1 - ROT_Z_LAND / ROT_Z_BANK);

						modelContainer.rotation.set(
							lerp(0.10, ROT_X_LAND, ry) + (ROT_X_FLASH - ROT_X_LAND) * flash * 0.62,
							lerp(ROT_Y_HAND, ROT_Y_LAND, ry),
							ROT_Z_BANK * bank
						);
						modelContainer.scale.setScalar(lerp(POSE_HAND.s, POSE_LAND.s, bs) * modelStartScale);
					}

					const seam = () => {
						const st = tl && tl.scrollTrigger;
						const end = st ? st.end : 0;
						if (!(end > 0)) return 0.59;
						const stick = stickFrac() * window.innerHeight;
						return Math.min(0.85, Math.max(0.15, (end - stick) / end));
					};

					let lastFix = -1e9;
					const verifyWindow = () => {
						const st = tl && tl.scrollTrigger;
						if (!st) return;
						const now = performance.now();
						if (now - lastFix < 250) return;
						lastFix = now;
						const want = spacer.getBoundingClientRect().top + window.scrollY
							+ stickFrac() * window.innerHeight;
						if (Math.abs(st.end - want) > 2) ScrollTrigger.refresh();
					};

					let tl;
					pose(0, 0.59);

					tl = gsap.timeline({
						scrollTrigger: {
							trigger: document.documentElement,
							start: 0,
							endTrigger: spacer,
							end: () => 'top top-=' + (stickFrac() * window.innerHeight),
							scrub: 0.4,
							invalidateOnRefresh: true,
						},
					});

					tl.to({ t: 0 }, {
						t: 1,
						duration: 1,
						ease: 'none',
						onUpdate: function () {
							verifyWindow();
							pose(this.targets()[0].t, seam());
						},
					})
						;

					webglState.beatST = tl.scrollTrigger;

					return () => {
						webglState.beatST = null;
						tl.scrollTrigger && tl.scrollTrigger.kill();
						tl.kill();
					};
				});
				mm.add('(max-width: 991px)', () => {

					const spacer = document.querySelector('[data-webgl-anim]');
					const stickyEl = spacer && spacer.querySelector('.h-screen');
					if (!spacer || !stickyEl) return;

					const base = window.innerWidth > 768 ? 0.76
						: window.innerWidth > 600 ? 0.62
							: 0.50;

					const openYNarrow = openY(base * 1.12);
					const landYNarrowVal = landYNarrow(base * 1.0);
					modelContainer.position.set(0, openYNarrow, -0.2);

					const lerp = (a, b, t) => a + (b - a) * t;
					const eOut2 = t => 1 - (1 - t) * (1 - t);
					const eInOut2 = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
					const clamp01 = t => t < 0 ? 0 : t > 1 ? 1 : t;
					const FLASH_AT = (ROT_Y_OPEN - ROT_Y_SHUT) / (ROT_Y_OPEN - ROT_Y_LAND);

					function poseSmall(t) {
						const ry = eInOut2(clamp01(t));
						const flash = t <= FLASH_AT
							? eOut2(clamp01(t / FLASH_AT))
							: 1 - eInOut2(clamp01((t - FLASH_AT) / (1 - FLASH_AT)));
						modelContainer.rotation.set(
							lerp(0, ROT_X_LAND, ry) + (ROT_X_FLASH - ROT_X_LAND) * flash * 0.62,
							lerp(ROT_Y_OPEN, ROT_Y_LAND, ry),
							0
						);
						modelContainer.scale.setScalar(base * lerp(1.12, 1.00, eOut2(clamp01(t))));

						modelContainer.position.y = lerp(openYNarrow, landYNarrowVal, eOut2(clamp01(t)));
					}

					poseSmall(0);

					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: document.documentElement,
							start: 0,
							endTrigger: spacer,
							end: () => 'top top-=' + (stickFrac() * window.innerHeight),
							scrub: 0.4,
							invalidateOnRefresh: true,
						},
					});

					let lastFix = -1e9;

					webglState.beatST = tl.scrollTrigger;

					tl.to({ t: 0 }, {
						t: 1,
						duration: 1,
						ease: 'none',
						onUpdate: function () {
							const st = tl.scrollTrigger;
							const now = performance.now();
							if (st && now - lastFix > 250) {
								lastFix = now;
								const want = spacer.getBoundingClientRect().top + window.scrollY
									+ stickFrac() * window.innerHeight;
								if (Math.abs(st.end - want) > 2) ScrollTrigger.refresh();
							}
							poseSmall(this.targets()[0].t);
						},
					});

					return () => { tl.scrollTrigger && tl.scrollTrigger.kill(); tl.kill(); };
				});
				return () => {
					document.removeEventListener('mousemove', onMouseMove);

					if (webglState.mm) { webglState.mm.revert(); webglState.mm = null; }
				};
			}

			modelAnimations()

			function onMouseMove(event) {

				const pt = event.touches && event.touches.length ? event.touches[0] : event;
				if (pt && typeof pt.clientX === 'number') {
					const modelPosition = modelContainer.position.clone();

					const modelScreenPosition = modelPosition.clone();
					modelScreenPosition.project(camera);

					const mouseX = (pt.clientX / window.innerWidth) * 2 - 1;
					const mouseY = -(pt.clientY / window.innerHeight) * 2 + 1;

					const deltaX = mouseX - modelScreenPosition.x;
					const deltaY = mouseY - modelScreenPosition.y;

					const verticalDistance = Math.abs(deltaY);

					let verticalDampingFactor = 1;

					const centerY = 0;

					if ((modelScreenPosition.y > centerY && deltaY < 0) ||
						(modelScreenPosition.y <= centerY && deltaY > 0)) {
						verticalDampingFactor = 1 / (1 + verticalDistance * 2);
					}

					const maxRotation = 0.30;
					const normalizedRotationY = Math.sign(deltaX) * Math.min(Math.abs(deltaX), 1) * maxRotation;
					const normalizedRotationZ = Math.sign(deltaY) * Math.min(Math.abs(deltaY), 1) * maxRotation * verticalDampingFactor;

					gsap.to((webglState.pointerGroup || model).rotation, {
						z: normalizedRotationZ,
						y: normalizedRotationY,
						duration: 0.5,
						ease: "power2.out"
					});
				}
			}

			document.addEventListener('mousemove', onMouseMove, false);

			document.addEventListener('touchmove', onMouseMove, { passive: true });
			document.addEventListener('touchstart', onMouseMove, { passive: true });
			window.addEventListener('resize', () => modelAnimations());

			requestAnimationFrame(() => ScrollTrigger.refresh());

			webglState.isInitialized = true;
			webglState.isLoading = false;
			document.dispatchEvent(new CustomEvent('webglReady'));
		},
		function (xhr) {
			if (xhr.lengthComputable) {
				webglState.loadingProgress = (xhr.loaded / xhr.total) * 100;
				document.dispatchEvent(new CustomEvent('webglProgress', {
					detail: { progress: webglState.loadingProgress }
				}));
			}
		},
		function (error) {
			console.error("An error occurred while loading the model:", error);
			/* A failed download must not leave the page waiting on it. */
			webglUnavailable(canvas);
		});

	const sizes = {
		width: window.innerWidth,
		height: windowHeight * WEBGL_BAND,
	}

	const camera = new PerspectiveCamera(CAM_FOV, sizes.width / sizes.height, 0.1, 1000);
	camera.position.z = CAM_Z
	camera.lookAt(scene.position);
scene.add(camera)

	let renderer
	try {
		renderer = new WebGLRenderer({
			canvas: canvas,
			antialias: webglState.isMobile ? false : true,
			powerPreference: 'high-performance'
		})
	} catch (e) {
		webglUnavailable(canvas)
		return
	}
	/* Lost mid-visit (driver reset, GPU pressure): step aside the same way, and
	   come back if the browser restores the context. */
	canvas.addEventListener('webglcontextlost', () => {
		document.documentElement.classList.add('no-webgl')
		canvas.style.display = 'none'
	})
	canvas.addEventListener('webglcontextrestored', () => {
		document.documentElement.classList.remove('no-webgl')
		canvas.style.display = ''
	})
renderer.setClearColor(0x000000, 0);
	renderer.shadowMap.enabled = false;
	renderer.setSize(sizes.width, sizes.height)
	if (webglState.isMobile) {
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	} else {
		renderer.setPixelRatio(window.devicePixelRatio);
	}
	renderer.render(scene, camera)

	if (!webglState.isMobile) {
		window.addEventListener('resize', () => {
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight * WEBGL_BAND;

			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		});
	}

	const LEAN_Z = 0.20;
	const LEAN_X = 0.10;
	const LEAN_VREF = 2400;
	const LEAN_EASE = 0.09;
	let leanZ = 0;
	let leanX = 0;

	const tick = () => {
		const lean = webglState.leanGroup;
		if (lean) {
			const st = webglState.beatST;
			const v = st ? st.getVelocity() : 0;
			const n = Math.max(-1, Math.min(1, v / LEAN_VREF));
			leanZ += (n * LEAN_Z - leanZ) * LEAN_EASE;
			leanX += (n * LEAN_X - leanX) * LEAN_EASE;
			lean.rotation.z = leanZ;
			lean.rotation.x = leanX;
		}
		renderer.render(scene, camera)
		window.requestAnimationFrame(tick)
	}

	tick();
}
