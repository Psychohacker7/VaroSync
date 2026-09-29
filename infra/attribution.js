/*
 * First-touch and last-touch attribution, attached to form submissions.
 *
 * For a business where one meeting is worth more than ten thousand pageviews,
 * the number that matters is which source produced a specific enquiry — and
 * this answers it with no analytics vendor at all. The form script calls
 * window.vsAttribution.fields() and sends the result with the enquiry, so it
 * lands in the database already labelled.
 *
 * Storage waits for ANALYTICS consent. It is first-party and never shared,
 * but its purpose is measuring which channels work, which is analytics by any
 * honest reading. Whether a stored choice is still valid (policy version,
 * expiry, vendor set) is decided by infra/consent.js alone, which loads first
 * and exposes window.vsConsent. Without consent, attribution lives in memory
 * for the current page only, and nothing is left on the device.
 *
 * Only campaign parameters are kept from URLs. A landing URL can carry click
 * ids (gclid, fbclid, li_fat_id) or even an email address from a mail link;
 * none of that is stored or forwarded.
 */
(function (root) {
  'use strict';

  var FIRST = 'vs-attr-first';
  var LAST = 'vs-attr-last';
  var CAMPAIGN = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref'];

  /* Path plus campaign parameters only. */
  function cleanLanding(loc) {
    var kept = [];
    try {
      var q = new URLSearchParams(loc.search || '');
      CAMPAIGN.forEach(function (k) { var v = q.get(k); if (v) kept.push(k + '=' + encodeURIComponent(v).slice(0, 100)); });
    } catch (e) {}
    return (loc.pathname || '') + (kept.length ? '?' + kept.join('&') : '');
  }

  /* Origin and path only: a referrer's query string is someone else's data. */
  function cleanReferrer(ref) {
    if (!ref) return '';
    try { var u = new URL(ref); return u.origin + u.pathname; } catch (e) { return ''; }
  }

  /* Coarse on purpose: the referrer host separates LinkedIn from a search
     engine from an AI assistant from a direct visit, and anything finer is
     noise. */
  function classify(referrer, selfHost) {
    if (!referrer) return { source: 'direct', medium: 'none' };
    var host;
    try { host = new URL(referrer).hostname.replace(/^www\./, ''); }
    catch (e) { return { source: 'direct', medium: 'none' }; }
    if (host === selfHost || host === selfHost.replace(/^www\./, '')) return { source: 'internal', medium: 'none' };
    if (/(^|\.)(google|bing|duckduckgo|ecosia|yahoo|baidu|yandex|brave)\./.test(host)) return { source: host, medium: 'organic' };
    if (/(^|\.)(chatgpt\.com|chat\.openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com)$/.test(host)) return { source: host, medium: 'ai' };
    if (/(^|\.)(linkedin\.com|lnkd\.in)$/.test(host)) return { source: host, medium: 'social' };
    if (/(^|\.)(x\.com|twitter\.com|t\.co)$/.test(host)) return { source: host, medium: 'social' };
    return { source: host, medium: 'referral' };
  }

  function capture(loc, referrer) {
    var q;
    try { q = new URLSearchParams(loc.search || ''); } catch (e) { q = { get: function () { return null; } }; }
    var get = function (k) { return q.get(k) || ''; };
    var derived = classify(referrer, loc.hostname || '');
    return {
      source: get('utm_source') || get('ref') || derived.source,
      medium: get('utm_medium') || derived.medium,
      campaign: get('utm_campaign'),
      term: get('utm_term'),
      content: get('utm_content'),
      referrer: cleanReferrer(referrer),
      landing: cleanLanding(loc),
      at: new Date().toISOString()
    };
  }

  function create(win) {
    var mem = null;

    function storage() {
      try { return win.localStorage || null; } catch (e) { return null; }
    }

    function allowed() {
      var c = win.vsConsent && typeof win.vsConsent.current === 'function' ? win.vsConsent.current() : null;
      return !!(c && c.analytics);
    }

    function load(key) {
      var s = storage();
      if (!s) return null;
      try { return JSON.parse(s.getItem(key) || 'null'); } catch (e) { return null; }
    }

    function save(key, v) {
      var s = storage();
      if (!s) return;
      try { s.setItem(key, JSON.stringify(v)); } catch (e) { /* private mode */ }
    }

    function forget() {
      var s = storage();
      if (!s) return;
      try { s.removeItem(FIRST); s.removeItem(LAST); } catch (e) {}
    }

    function record() {
      var now = capture(win.location || {}, (win.document && win.document.referrer) || '');
      var persist = allowed();
      var prevFirst = persist ? load(FIRST) : (mem && mem.first);
      var prevLast = persist ? load(LAST) : (mem && mem.last);

      /* Last touch advances only on a genuinely new source. A reload or an
         internal navigation must not overwrite the campaign that brought
         someone in — the classic way attribution turns to mush. */
      var isNew = now.medium !== 'none' &&
        (!prevLast || prevLast.source !== now.source || prevLast.campaign !== now.campaign);

      var first = prevFirst || now;
      var last = isNew ? now : (prevLast || now);
      mem = { first: first, last: last };

      if (persist) { save(FIRST, first); save(LAST, last); }
      else forget(); /* withdrawn: nothing may remain on the device */
    }

    function fields() {
      if (!mem) record();
      var a = mem;
      return {
        first_source: a.first.source, first_medium: a.first.medium,
        first_campaign: a.first.campaign, first_landing: a.first.landing,
        last_source: a.last.source, last_medium: a.last.medium,
        last_campaign: a.last.campaign, last_referrer: a.last.referrer
      };
    }

    return { record: record, fields: fields, classify: classify, cleanLanding: cleanLanding, cleanReferrer: cleanReferrer };
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = { create: create, classify: classify, capture: capture, cleanLanding: cleanLanding, cleanReferrer: cleanReferrer };
    return;
  }

  var api = create(root);
  api.record();
  /* consent.js loads first, so vsConsent already knows any stored choice;
     the banner may still be answered after this has run. */
  if (root.addEventListener) root.addEventListener('vs:consent', function () { api.record(); });
  root.vsAttribution = api;
})(typeof window !== 'undefined' ? window : this);
