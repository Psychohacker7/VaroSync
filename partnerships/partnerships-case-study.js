(function () {
  'use strict';

  var section = document.querySelector('[data-partnerships-case-study]');
  if (!section) return;

  var title = section.querySelector('[data-story-title]');
  var image = section.querySelector('#image_story');
  var story = section.querySelector('[data-story-section]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || typeof gsap === 'undefined') {
    if (title) title.style.visibility = 'visible';
    if (image) image.style.height = '100%';
    return;
  }

  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  function splitAndRevealTitle() {
    if (!title) return;

    if (typeof SplitText === 'undefined' || typeof ScrollTrigger === 'undefined') {
      title.style.visibility = 'visible';
      return;
    }

    var split = new SplitText(title, { type: 'lines', linesClass: 'line' });
    split.lines.forEach(function (line) {
      var wrapper = document.createElement('div');
      wrapper.className = 'wrapper_line';
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    gsap.set(title, { autoAlpha: 1 });
    gsap.set(split.lines, { yPercent: 160, rotate: 2 });
    gsap.to(split.lines, {
      yPercent: 0,
      rotate: 0,
      duration: 1.5,
      stagger: window.innerWidth >= 1024 ? .2 : .1,
      ease: 'power4',
      scrollTrigger: {
        trigger: title,
        start: 'top 90%',
        scrub: false
      }
    });
  }

  function revealImage() {
    if (!image || !story) return;

    if (window.innerWidth < 1024 || typeof ScrollTrigger === 'undefined') {
      image.style.height = '100%';
      return;
    }

    var sectionMargin = parseFloat(window.getComputedStyle(section).marginTop) || 0;
    gsap.to(image, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: story,
        scrub: true,
        start: 'top 100%-=' + sectionMargin + 'px',
        end: '+=' + story.offsetHeight + 'px'
      }
    });
  }

  function init() {
    splitAndRevealTitle();
    revealImage();
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(init);
  } else {
    init();
  }
})();
