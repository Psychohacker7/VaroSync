/* Partnerships hero entrance and scroll choreography. */
(function () {
  'use strict';

  if (!document.getElementById('about_top')) return;

  heroVideo();

  /* The hero loop plays while it is on screen and holds its first frame for reduced motion.
     It is started from here rather than by an autoplay attribute, which makes WebKit force an
     inert play button over the poster in Low Power Mode. */
  function heroVideo() {
    var video = document.querySelector('.partnerships-hero__video');
    if (!video) return;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var onScreen = true;

    function sync() {
      if (reduceMotion.matches || !onScreen || document.hidden) {
        video.pause();
        return;
      }
      if (video.paused) {
        var attempt = video.play();
        if (attempt && attempt.catch) attempt.catch(function () {});
      }
    }

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        onScreen = entries[entries.length - 1].isIntersecting;
        sync();
      }).observe(video.parentNode);
    }
    if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', sync);
    else if (reduceMotion.addListener) reduceMotion.addListener(sync);
    document.addEventListener('visibilitychange', sync);
    window.addEventListener('pageshow', sync);
    sync();
  }

  if (typeof gsap === 'undefined') {
    document.querySelectorAll('[data-about-vertical-line]').forEach(function (line) { line.style.height = '100%'; });
    document.querySelectorAll('[data-about-horizon-line],[data-header-bottom-line]').forEach(function (line) { line.style.width = '100%'; });
    document.querySelectorAll('[data-target-heading]').forEach(function (heading) { heading.style.visibility = 'visible'; });
    document.querySelectorAll('.badge-about-top').forEach(function (badge) { badge.style.transform = 'none'; });
    return;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set('[data-about-vertical-line]', { height: '100%' });
    gsap.set('[data-about-horizon-line],[data-header-bottom-line]', { width: '100%' });
    gsap.set('#header_sticky > div,[data-target-heading],[data-about-image],.arrow-first-about,[data-about-title] > span,[data-about-description],[data-badge-mobile]', { autoAlpha: 1, y: 0, yPercent: 0 });
    gsap.set('.badge-about-top', { y: 0 });
    return;
  }

  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  /* Entrance sequence. */
  gsap.set('#header_sticky > div', { autoAlpha: 0 });
  gsap.set('[data-target-heading]', { yPercent: 110, autoAlpha: 0 });
  gsap.set('[data-about-image],.arrow-first-about', { autoAlpha: 0 });
  gsap.set('[data-header-bottom-line]', { width: 0 });
  gsap.set('[data-about-title] > span,[data-about-description],[data-badge-mobile]', { y: 30, autoAlpha: 0 });
  var tl = gsap.timeline();

  tl.to('[data-about-vertical-line]', { duration: 1.3, height: '100%', ease: 'power4.inOut' });
  tl.to('[data-about-horizon-line]', { duration: 1.3, width: '100%', ease: 'power4.inOut' }, '<');
  tl.to('[data-header-bottom-line]', { duration: 1.3, width: '100%', ease: 'power4.inOut' }, '<');
  tl.to('#header_sticky > div', { duration: 1.3, autoAlpha: 1, ease: 'power4.inOut' }, '>-=1');
  tl.to('[data-target-heading]', { duration: 1.3, yPercent: 0, autoAlpha: 1, ease: 'power4.inOut' }, '<');
  tl.to('[data-about-image],.arrow-first-about', { duration: 1.3, stagger: .1, autoAlpha: 1, ease: 'power4.inOut' }, '<');
  tl.to('[data-about-title] > span,[data-about-description],[data-badge-mobile]', { duration: 1.3, y: 0, autoAlpha: 1, stagger: .1, ease: 'power4' }, '<+=.3');

  /* Desktop scroll transition. */
  aboutFirstTopHeader();
  function aboutFirstTopHeader() {
    var windowWidth = window.innerWidth;
    if (windowWidth >= 1024 && typeof ScrollTrigger !== 'undefined' && typeof jQuery !== 'undefined') {
      var $ = jQuery;
      var timelines = [];

      function innerAboutTopHeader() {
        var about_first_block = document.getElementById('about_top');
        if (about_first_block) {
          gsap.set('#about_top', { height: $(window).height() * 2 });
          gsap.set('.badge-about-top', { y: $(window).height() / 1.25 });

          var heightContent = $('.title-about').height() + $('.description-about').height();
          heightContent = heightContent + parseInt($('.title-about').css('marginTop'), 10) + parseInt($('.description-about').css('marginTop'), 10);
          var finalHeight = $(window).height() - $('#header_sticky').height() - parseInt(heightContent, 10) - (parseInt($('.wrapper-about-content').css('padding'), 10) * 3);
          var windowHalh = $(window).width() / 2 + parseInt($('.wrapper-about-content').css('padding'), 10);
          var initialCopyWidth = $('[data-about-title]').width();
          var finalCopyWidth = $(window).width() / 2 - $('#header_sticky').height();

          var tl_top_header = gsap.timeline({
            scrollTrigger: {
              trigger: '#about_top',
              scrub: true,
              start: 'top top+=' + $('#header_sticky').height() + 'px',
              end: 'bottom bottom'
            }
          })
            .fromTo('.about-sidebar', { width: '34.236111111111114vw' }, { width: '100.1vw', ease: 'none' })
            .fromTo('[data-about-image]', { height: $('[data-about-image]').height() }, { height: finalHeight, ease: 'none' }, '<')
            .to('.about-wrap-heading', { y: -$('.about-wrap-heading').height(), x: -$('[data-about-image]').offset().left, ease: 'none' }, '<')
            .to('.title-about,.description-about', { x: windowHalh, ease: 'none' }, '<')
            .fromTo('[data-about-title],[data-about-description]', { maxWidth: initialCopyWidth }, { maxWidth: finalCopyWidth, ease: 'none' }, '<')
            .to('.badge-about-top', { y: 0, ease: 'none' }, '<');

          var tl_top_heade_2 = gsap.timeline({
            scrollTrigger: {
              trigger: 'body',
              scrub: true,
              start: 'top top',
              end: '+=20%'
            }
          }).to('.arrow-first-about svg', { scale: .2, autoAlpha: 0, ease: 'none' }, '<');

          timelines.push(tl_top_header, tl_top_heade_2);
        }
      }

      function resetScrollAnimations() {
        timelines.forEach(function (timeline) { timeline.kill(); });
        timelines = [];
        gsap.set('#about_top', { clearProps: 'height' });
        gsap.set('.badge-about-top', { clearProps: 'transform' });
        gsap.set('.about-sidebar', { clearProps: 'width' });
        gsap.set('[data-about-image]', { clearProps: 'height' });
        gsap.set('.about-wrap-heading', { clearProps: 'transform' });
        gsap.set('.title-about,.description-about', { clearProps: 'transform' });
        gsap.set('[data-about-title],[data-about-description]', { clearProps: 'maxWidth' });
        gsap.set('.badge-about-top', { clearProps: 'transform' });
        gsap.set('.arrow-first-about svg', { clearProps: 'transform,opacity' });
        innerAboutTopHeader();
        ScrollTrigger.refresh();
      }

      innerAboutTopHeader();
      window.addEventListener('resize', resetScrollAnimations);
    }
  }
})();
