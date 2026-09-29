(function () {
	'use strict';

	/* The homepage menu has no persistent header behind it. Clone the exact
	   header lockup rather than substituting a separate brand asset, so its mark,
	   lettering, spacing and optical weight stay identical. */
	var source = document.querySelector('#header_sticky .left-logo-header .vs-lockup');
	var target = document.querySelector('#menu-mobile .vs-menu-mobile-logo-copy');
	if (!source || !target) return;

	var lockup = source.cloneNode(true);
	lockup.classList.add('vs-lockup--menu');
	target.replaceChildren(lockup);
})();
