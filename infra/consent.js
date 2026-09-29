/*
 * Cookie consent. Injected into every page by scripts/build.mjs (and by the
 * dev server, through scripts/dev-infra.mjs) — the source pages never
 * reference it.
 *
 * Non-negotiable behaviour, because getting any of it wrong is worse than
 * having no banner at all:
 *
 *  1. Nothing in an optional category loads until that category is allowed.
 *     The banner blocks; it does not decorate.
 *  2. "Reject all" is as easy as "Accept all": one click each, on the first
 *     card, the same size and in the same row. Accept all is the filled
 *     primary (the owner's decision); Reject all must never be shrunk, faded
 *     or moved behind Preferences (EDPB cookie banner taskforce, 2023).
 *  3. No pre-ticked boxes. Optional categories default to off.
 *  4. Withdrawal is as easy as consent: any element with [data-consent-open]
 *     reopens the panel. The published Cookie Notice promises a "Cookie
 *     settings" link in the footer; that link needs only this attribute.
 *  5. The choice is versioned three ways, and any of them asks again:
 *     consentVersion in site.config.json is raised; an analytics vendor is
 *     switched on that the visitor never saw (consent to one vendor set is
 *     not consent to a wider one — this needs no manual version bump); or
 *     the choice is older than consentMaxAgeDays.
 *  6. Global Privacy Control is honoured (twelve US states require it, phased
 *     in from Colorado on 1 July 2024): it forces marketing off and cannot be
 *     overridden by the banner.
 *  7. Every decision is appended to the server-side consent log, because the
 *     localStorage record is not evidence — the visitor can clear it, and the
 *     controller cannot read it (EDPB Guidelines 05/2020 §108). Each visitor
 *     gets a random consent id, stored with their choice, sent with each log
 *     row and shown in the panel, so their decision can be matched to a row.
 *
 * Configuration arrives in <script type="application/json" id="vs-infra">,
 * written by the build from site.config.json.
 */
(function (root) {
  'use strict';

  var KEY = 'vs-consent';
  var CATEGORIES = ['necessary', 'functional', 'analytics', 'marketing'];

  function copyOf(c) {
    return { necessary: true, functional: !!c.functional, analytics: !!c.analytics, marketing: !!c.marketing };
  }

  /* ================================================================ core */

  function create(win, cfg) {
    cfg = cfg || {};
    var VERSION = Number(cfg.v) || 1;
    var vendorIds = cfg.vendors || {};
    var LOG = cfg.log || '';
    var MAX_AGE_MS = (Number(cfg.maxAgeDays) || 365) * 86400000;
    var NOTICE_REV = cfg.noticeRev || '';
    /* Hosts where analytics may actually load (cfg.hosts, from site.config.json
       analyticsHosts). Everywhere else — localhost, *.pages.dev previews,
       staging — the card and the consent log work as normal, but no vendor
       loads, so test traffic never reaches the reports. */
    var HOSTS = Array.isArray(cfg.hosts) && cfg.hosts.length ? cfg.hosts : null;
    function liveHost() {
      return !HOSTS || HOSTS.indexOf((win.location && win.location.hostname) || '') !== -1;
    }

    /* The vendors this build would actually load. Stored with the choice, so
       switching on a new one invalidates consent given before it existed. */
    var ENABLED = Object.keys(vendorIds).filter(function (k) { return !!vendorIds[k]; }).sort();

    function uuid() {
      try { if (win.crypto && typeof win.crypto.randomUUID === 'function') return win.crypto.randomUUID(); } catch (e) {}
      var h = '';
      for (var i = 0; i < 32; i++) h += Math.floor(Math.random() * 16).toString(16);
      return h.slice(0, 8) + '-' + h.slice(8, 12) + '-4' + h.slice(13, 16) + '-a' + h.slice(17, 20) + '-' + h.slice(20, 32);
    }

    var DENIED = { necessary: true, functional: false, analytics: false, marketing: false };
    var GRANTED = { necessary: true, functional: true, analytics: true, marketing: true };

    var storage = function () {
      try { return win.localStorage || null; } catch (e) { return null; }
    };

    function gpc() {
      return !!(win.navigator && win.navigator.globalPrivacyControl === true);
    }

    /* GPC is an opt-out of sale/sharing: marketing off, not overridable.
       Analytics stays the visitor's call, which is the common reading;
       tighten here if counsel prefers the conservative line. */
    function withGpc(c) {
      var o = copyOf(c);
      if (gpc()) o.marketing = false;
      return o;
    }

    function record() {
      var s = storage();
      if (!s) return null;
      try { return JSON.parse(s.getItem(KEY) || 'null'); } catch (e) { return null; }
    }

    function read() {
      var rec = record();
      if (!rec || rec.v !== VERSION) return null; /* policy changed: ask again */
      var at = Date.parse(rec.at);
      if (!(at > 0) || Date.now() - at > MAX_AGE_MS) return null; /* expired */
      var seen = rec.vendors || [];
      for (var i = 0; i < ENABLED.length; i++) {
        if (seen.indexOf(ENABLED[i]) === -1) return null; /* new vendor since they chose */
      }
      return withGpc(rec.consent || {});
    }

    /* Kept across re-prompts: it identifies the visitor's sequence of
       decisions, not any one of them. */
    function consentId() {
      var rec = record();
      return (rec && typeof rec.id === 'string' && rec.id) || null;
    }

    /* ------------------------------------------------ Google Consent Mode */

    /* Always the global defined inline in <head>. It pushes its own
       `arguments` object, which is the only shape gtag.js dispatches — a
       local shim pushing an Array is silently ignored, and the banner would
       report success while consent never updated. */
    function gtag() {
      if (typeof win.gtag === 'function') win.gtag.apply(win, arguments);
    }

    /* No advertising runs on this site, so the three ad_* signals stay denied
       whatever the visitor allows. Granting them would let GA4 set Google Ads
       cookies, and Clarity reads them from Google's consent state and would
       then share with Microsoft Ads. If Google Ads is ever linked, map
       Marketing here, add Google's Ads CSP table, and list the ad cookies. */
    function syncGoogle(c) {
      gtag('consent', 'update', {
        analytics_storage: c.analytics ? 'granted' : 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        functionality_storage: c.functional ? 'granted' : 'denied',
        personalization_storage: c.functional ? 'granted' : 'denied',
        security_storage: 'granted'
      });
    }

    /* ---------------------------------------------------------- vendors */

    function script(src) {
      var d = win.document;
      if (!d) return;
      var el = d.createElement('script');
      el.async = true;
      el.src = src;
      d.head.appendChild(el);
    }

    /* Clarity and LinkedIn define a queueing stub before their script loads;
       without it, any call made in the gap throws instead of being replayed. */
    function stub(name) {
      if (typeof win[name] === 'function') return;
      var q = [];
      var fn = function () { q.push(arguments); };
      fn.q = q;
      win[name] = fn;
    }

    /* First-party cookies each vendor sets on this site, by name prefix.
       Withdrawal deletes them; cookies a vendor sets on its OWN domain (for
       example Microsoft's MUID on clarity.ms) are out of any site's reach. */
    var VENDOR_COOKIES = {
      ga4: ['_ga', '_gid', '_gat', '_gcl'],
      clarity: ['_clck', '_clsk'],
      linkedin: ['li_', 'lidc', 'bcookie', 'lms_', 'AnalyticsSyncHistory', 'UserMatchHistory']
    };

    function clearCookies(prefixes) {
      var d = win.document;
      if (!d || typeof d.cookie !== 'string') return;
      var host = (win.location && win.location.hostname) || '';
      var parts = host.split('.');
      /* A cookie can be scoped to the host or any parent domain; try each. */
      var domains = [''];
      for (var i = 0; i < parts.length - 1; i++) domains.push('; domain=.' + parts.slice(i).join('.'));
      d.cookie.split(';').forEach(function (c) {
        var name = c.split('=')[0].trim();
        if (!name || !prefixes.some(function (p) { return name.indexOf(p) === 0; })) return;
        domains.forEach(function (dom) {
          d.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + dom;
        });
      });
    }

    var VENDORS = [
      {
        key: 'ga4', category: 'analytics',
        load: function (id) {
          script('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id));
          gtag('js', new Date());
          /* No anonymize_ip: a Universal Analytics field that GA4 ignores.
             Google signals and ad personalisation are refused here in code, so
             they stay off whatever the property settings say. */
          /* _ga lasts as long as the consent behind it, counted from when it
             is set (cookie_update: false), not Google's rolling two years.
             Mirror this in GA4 Admin > tag settings > Override cookie
             settings: Google does not say which wins if they differ. */
          gtag('config', id, {
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
            cookie_expires: Math.round(MAX_AGE_MS / 1000),
            cookie_update: false
          });
        }
      },
      {
        /* Analytics: session recordings and heatmaps, with advertising off.
           ad_Storage 'denied' means Clarity does not share with Microsoft Ads
           and does not set Microsoft's MUID advertising identifier (the
           c.clarity.ms -> c.bing.com sync). If that is ever granted, Clarity
           becomes a CPRA "share" and belongs in Marketing again, with the
           Microsoft-domain cookies listed in the notice.
           Dashboard: Settings > Setup > Advanced > Cookies OFF, masking on.
           Withdrawal reloads the page: a denial alone only switches Clarity
           to cookieless tracking, it does not stop it. */
        key: 'clarity', category: 'analytics',
        load: function (id) {
          stub('clarity');
          /* Queued before the tag loads; the tag replays it after starting.
             Microsoft enforces a consent signal for EEA/UK/CH visits since
             31 October 2025. Both keys always sent (the v2 reference marks
             both required); keys are case-sensitive. */
          win.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' });
          script('https://www.clarity.ms/tag/' + encodeURIComponent(id));
        }
      },
      {
        key: 'linkedin', category: 'marketing',
        load: function (id) {
          win._linkedin_partner_id = id;
          win._linkedin_data_partner_ids = win._linkedin_data_partner_ids || [];
          win._linkedin_data_partner_ids.push(id);
          stub('lintrk');
          script('https://snap.licdn.com/li.lms-analytics/insight.min.js');
        }
      }
    ];

    var loaded = {};

    function loadVendors(c) {
      if (!liveHost()) return;
      VENDORS.forEach(function (v) {
        var id = vendorIds[v.key];
        if (!id || loaded[v.key] || !c[v.category]) return;
        loaded[v.key] = true;
        v.load(id);
      });
    }

    /* A tag already in the page cannot be unloaded by removing its script,
       so withdrawal is enforced by reload — but only when a withdrawn
       category actually has something loaded. */
    function enforceWithdrawal(prev, next) {
      if (!prev) return;
      var withdrawn = VENDORS.filter(function (v) { return prev[v.category] && !next[v.category]; });
      var dirty = withdrawn.some(function (v) { return loaded[v.key]; });
      if (dirty && win.location && typeof win.location.reload === 'function') win.location.reload();
    }

    var current = null;

    /* No cookie outlives the consent behind it. Every time a choice is
       applied — on each page load too — anything a vendor left on this site
       is deleted if its category is not allowed right now: after a
       withdrawal, after a Reject, and after a choice expired or was asked
       again (the old _ga would otherwise sit there until its own expiry). */
    function clearDenied(c) {
      VENDORS.forEach(function (v) {
        if (!c[v.category]) clearCookies(VENDOR_COOKIES[v.key] || []);
      });
    }

    function apply(c) {
      var prev = current;
      current = c;
      syncGoogle(c);
      clearDenied(c);
      loadVendors(c);
      enforceWithdrawal(prev, c);
    }

    /* ------------------------------------------------------- server log */

    /* FNV-1a. Identifies the exact banner wording shown, which EDPB §108 asks
       to be retained; resolve a hash against the git history of
       site.config.json's consentCopy to recover the literal text. Not a
       security hash and does not need to be. */
    function copyHash(input) {
      var h = 0x811c9dc5;
      for (var i = 0; i < input.length; i++) {
        h ^= input.charCodeAt(i);
        h = Math.imul(h, 0x01000193) >>> 0;
      }
      return ('0000000' + h.toString(16)).slice(-8);
    }

    var bannerHash = copyHash(JSON.stringify(cfg.copy || {}));

    /* Fire-and-forget with keepalive, so accepting and immediately
       navigating does not drop the record. Failure is swallowed: the choice
       already applies locally, and a logging outage must never change it. */
    function log(action, c, id) {
      if (!LOG || typeof win.fetch !== 'function') return;
      try {
        win.fetch(LOG, {
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: action,
            consent: { functional: c.functional, analytics: c.analytics, marketing: c.marketing },
            version: VERSION,
            consentId: id,
            copyHash: bannerHash,
            noticeRev: NOTICE_REV,
            gpc: gpc()
          })
        }).catch(function () {});
      } catch (e) { /* offline, blocked by an extension — all fine */ }
    }

    /* --------------------------------------------------------- lifecycle */

    var listeners = [];

    var sessionId = null; /* when storage is unavailable, id for this page only */

    function write(c, action) {
      var next = withGpc(c);
      var id = consentId() || sessionId || uuid();
      sessionId = id;
      var s = storage();
      if (s) {
        try {
          s.setItem(KEY, JSON.stringify({ v: VERSION, id: id, at: new Date().toISOString(), vendors: ENABLED, consent: next }));
        } catch (e) { /* private mode: holds for this page view only — fails closed */ }
      }
      apply(next);
      log(action || 'save', next, id);
      listeners.forEach(function (fn) { try { fn(next); } catch (e) {} });
      if (win.dispatchEvent && typeof win.CustomEvent === 'function') {
        win.dispatchEvent(new win.CustomEvent('vs:consent', { detail: next }));
      }
      return next;
    }

    /* Undecided visitors start at DENIED: nothing optional loads. */
    function init() {
      var stored = read();
      apply(stored || withGpc(DENIED));
      current = stored;
      return stored;
    }

    /* Events. Sent only when the visitor has allowed analytics and a vendor is
       actually loaded; otherwise dropped — never queued past a decision.
       Page views are NOT sent from here: GA4's enhanced measurement already
       records the history changes Barba makes, and sending them here too
       counted every in-site page change twice. */
    var MIRROR_TO_CLARITY = { generate_lead: 1, schedule_meeting: 1, form_error: 1 };
    function track(name, params) {
      if (!current) return;
      if (current.analytics && loaded.ga4) gtag('event', name, params || {});
      if (current.analytics && loaded.clarity && MIRROR_TO_CLARITY[name] && typeof win.clarity === 'function') {
        try { win.clarity('event', name); } catch (e) {}
      }
    }

    return {
      VERSION: VERSION,
      DENIED: DENIED,
      GRANTED: GRANTED,
      read: read,
      write: write,
      init: init,
      gpc: gpc,
      withGpc: withGpc,
      copyHash: copyHash,
      consentId: function () { return consentId() || sessionId; },
      track: track,
      current: function () { return current; },
      onChange: function (fn) { listeners.push(fn); }
    };
  }

  /* ================================================================== UI */

  /*
   * Two beats in one card.
   *
   *   1. A compact card, bottom right: what the site would like to use, and
   *      three same-size buttons — Reject all, Preferences, Accept all.
   *   2. "Preferences" grows the SAME card into the detailed view: each
   *      category with a switch and a line on what it does. The tool-by-tool
   *      detail lives in the Cookie Notice, which the card links to.
   *
   * A category appears only if something on this site actually sits behind
   * it (cfg.categories, computed by the build). A switch that controls
   * nothing would be a small lie.
   *
   * The card waits for the page: it appears after the page has loaded and
   * any intro loader has cleared, never over a loading screen.
   */
  var CATS = ['necessary', 'functional', 'analytics', 'marketing'];

  function mountUI(win, doc, api, cfg) {
    var copy = cfg.copy || {};
    var catCopy = copy.categories || {};
    var inUse = cfg.categories || CATS;
    var links = cfg.links || {};
    var reduced = !!(win.matchMedia && win.matchMedia('(prefers-reduced-motion: reduce)').matches);

    var visible = CATS.filter(function (c) {
      return c === 'necessary' || inUse.indexOf(c) !== -1;
    });

    var layer = null;
    var card = null;
    var view = null;
    var draft = null;
    var firstRun = false;
    var restoreFocus = null;

    function el(tag, cls, text) {
      var n = doc.createElement(tag);
      if (cls) n.className = cls;
      if (text) n.textContent = text;
      return n;
    }

    /* Empty strings are not rendered. */
    function maybe(parent, tag, cls, text, id) {
      if (!text) return null;
      var n = el(tag, cls, text);
      if (id) n.id = id;
      parent.appendChild(n);
      return n;
    }

    function button(label, cls, onClick, action) {
      var b = el('button', 'vsc-btn ' + cls, label);
      b.type = 'button';
      if (action) b.setAttribute('data-action', action);
      b.addEventListener('click', onClick);
      return b;
    }

    function noticeLinks(parent) {
      var added = 0;
      [['cookies', copy.cookieNotice], ['privacy', copy.privacyNotice]].forEach(function (pair) {
        if (!pair[1] || !links[pair[0]]) return;
        if (added) parent.appendChild(doc.createTextNode(' · '));
        var a = el('a', null, pair[1]);
        a.href = links[pair[0]];
        parent.appendChild(a);
        added++;
      });
      return added;
    }

    /* "{purposes}" → the purpose of each optional category that is actually
       in use, so the first card never mentions a tool the site does not use. */
    function bannerText() {
      var t = copy.bannerBody || '';
      var parts = visible.filter(function (c) { return c !== 'necessary'; })
        .map(function (c) { return (catCopy[c] || {}).purpose; })
        .filter(Boolean);
      if (!parts.length) return t.replace(/\s*[^.]*\{purposes\}[^.]*\.?/, '').trim();
      var list = parts.length === 1 ? parts[0] : parts.slice(0, -1).join(', ') + ' and ' + parts[parts.length - 1];
      return t.replace('{purposes}', list);
    }

    /* ------------------------------------------------------------ layer */

    function ensureLayer() {
      if (layer) return false;
      layer = el('div', 'vsc-layer');
      // Smooth-scroll libraries (Lenis on the homepage) leave this subtree
      // alone, so the category list scrolls instead of the page behind it.
      layer.setAttribute('data-lenis-prevent', '');
      var scrim = el('div', 'vsc-scrim');
      scrim.addEventListener('click', dismissPanel);
      layer.appendChild(scrim);
      card = el('section', 'vsc vsc-card');
      card.setAttribute('role', 'dialog');
      card.tabIndex = -1;
      layer.appendChild(card);
      doc.body.appendChild(layer);
      doc.addEventListener('keydown', onKey);
      return true;
    }

    function teardown() {
      if (!layer) return;
      layer.remove();
      layer = card = view = null;
      doc.removeEventListener('keydown', onKey);
      if (restoreFocus && restoreFocus.focus) {
        try { restoreFocus.focus(); } catch (e) {}
      }
      restoreFocus = null;
    }

    function commit(c, action) {
      api.write(c, action);
      teardown();
    }

    function setView(v) {
      view = v;
      layer.setAttribute('data-view', v);
      var entering = card.classList.contains('vsc-enter');
      card.className = 'vsc vsc-card ' + (v === 'panel' ? 'vsc-panel' : 'vsc-banner') + (entering ? ' vsc-enter' : '');
      card.setAttribute('aria-modal', v === 'panel' ? 'true' : 'false');
    }

    /* Swap the card's contents and let it grow or shrink into its new size
       rather than jump. Anchored bottom right, it opens upwards and left. */
    function morph(render) {
      var first = card.getBoundingClientRect();
      render();
      if (reduced || typeof card.animate !== 'function' || !first.width) return;
      var last = card.getBoundingClientRect();
      card.animate(
        [{ width: first.width + 'px', height: first.height + 'px' }, { width: last.width + 'px', height: last.height + 'px' }],
        { duration: 380, easing: 'cubic-bezier(.22,1,.36,1)' }
      );
      var inner = card.firstElementChild;
      if (inner) inner.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220, delay: 140, easing: 'ease-out', fill: 'backwards' });
    }

    /* ----------------------------------------------------- beat 1: card */

    function renderBanner() {
      card.textContent = '';
      setView('banner');
      var inner = el('div', 'vsc-inner');

      var h = maybe(inner, 'h2', 'vsc-heading', copy.bannerHeading, 'vsc-title');
      if (h) { card.setAttribute('aria-labelledby', 'vsc-title'); card.removeAttribute('aria-label'); }
      else { card.setAttribute('aria-label', 'Cookie choices'); card.removeAttribute('aria-labelledby'); }

      var body = el('p', 'vsc-body');
      var text = bannerText();
      if (text) body.appendChild(doc.createTextNode(text + ' '));
      noticeLinks(body);
      if (body.childNodes.length) inner.appendChild(body);

      /* Accept all is the primary action (the owner's choice). What keeps the
         card fair is that Reject all is the same size, in the same row,
         clearly readable and one click — that line must hold. */
      var actions = el('div', 'vsc-actions');
      actions.appendChild(button(copy.reject || 'Reject all', 'vsc-secondary', function () { commit(api.DENIED, 'reject'); }, 'reject'));
      actions.appendChild(button(copy.preferences || 'Preferences', 'vsc-secondary', function () { openPanel(); }, 'preferences'));
      actions.appendChild(button(copy.accept || 'Accept all', 'vsc-primary', function () { commit(api.GRANTED, 'accept'); }, 'accept'));
      inner.appendChild(actions);

      card.appendChild(inner);
    }

    /* ------------------------------------------- beat 2: the details */

    function renderPanel() {
      card.textContent = '';
      setView('panel');
      var inner = el('div', 'vsc-inner');

      var head = el('header', 'vsc-head');
      var titles = el('div', 'vsc-titles');
      var h = maybe(titles, 'h2', 'vsc-heading', copy.panelHeading, 'vsc-panel-title');
      if (h) { card.setAttribute('aria-labelledby', 'vsc-panel-title'); card.removeAttribute('aria-label'); }
      else { card.setAttribute('aria-label', 'Cookie settings'); card.removeAttribute('aria-labelledby'); }
      maybe(titles, 'p', 'vsc-body', copy.panelBody);
      head.appendChild(titles);
      var x = button('', 'vsc-close', dismissPanel);
      x.setAttribute('aria-label', copy.close || 'Close');
      head.appendChild(x);
      inner.appendChild(head);

      var list = el('div', 'vsc-list');
      visible.forEach(function (id) {
        var c = catCopy[id] || {};
        var tile = el('div', 'vsc-row vsc-tile');
        var top = el('div', 'vsc-tile-top');
        top.appendChild(el('h3', 'vsc-row-name', c.name || id));

        /* A browser asserting GPC has opted out of sale and sharing already;
           a live switch would imply a choice that is not on offer. */
        var forced = id === 'marketing' && api.gpc();
        if (id === 'necessary') {
          top.appendChild(el('span', 'vsc-always', copy.alwaysOn || 'Always on'));
        } else {
          var wrap = el('label', 'vsc-switch');
          var input = el('input');
          input.type = 'checkbox';
          input.setAttribute('data-cat', id);
          input.checked = forced ? false : !!draft[id];
          input.disabled = forced;
          input.setAttribute('aria-label', c.name || id);
          input.addEventListener('change', function () { draft[id] = input.checked; });
          wrap.appendChild(input);
          var track = el('span', 'vsc-track');
          track.setAttribute('aria-hidden', 'true');
          wrap.appendChild(track);
          top.appendChild(wrap);
        }
        tile.appendChild(top);
        maybe(tile, 'p', 'vsc-body', c.body);
        if (forced) maybe(tile, 'p', 'vsc-note', copy.gpcNote);

        list.appendChild(tile);
      });

      var meta = el('div', 'vsc-meta');
      var mlinks = el('p', 'vsc-links');
      if (noticeLinks(mlinks)) meta.appendChild(mlinks);
      var cid = api.consentId();
      if (cid) maybe(meta, 'p', 'vsc-id', (copy.consentIdLabel || 'Consent ID') + ': ' + cid);
      if (meta.childNodes.length) list.appendChild(meta);
      inner.appendChild(list);

      var foot = el('div', 'vsc-foot');
      foot.appendChild(button(copy.reject || 'Reject all', 'vsc-secondary', function () { commit(api.DENIED, 'reject'); }, 'reject'));
      foot.appendChild(button(copy.save || 'Save preferences', 'vsc-secondary', function () { commit(draft, 'save'); }, 'save'));
      foot.appendChild(el('span', 'vsc-spacer'));
      foot.appendChild(button(copy.accept || 'Accept all', 'vsc-primary', function () { commit(api.GRANTED, 'accept'); }, 'accept'));
      inner.appendChild(foot);

      card.appendChild(inner);
    }

    /* ------------------------------------------------------- behaviour */

    /* First appearance only; later changes of view morph instead. */
    function enter() {
      if (reduced) return;
      card.classList.add('vsc-enter');
      card.addEventListener('animationend', function () { if (card) card.classList.remove('vsc-enter'); }, { once: true });
    }

    function openBanner() {
      var fresh = ensureLayer();
      if (fresh || !view) { renderBanner(); enter(); } else morph(renderBanner);
    }

    function openPanel() {
      firstRun = !api.read();
      draft = api.read() || api.withGpc(api.DENIED);
      var fresh = ensureLayer();
      if (fresh || !view) { renderPanel(); enter(); } else morph(renderPanel);
      try { card.focus({ preventScroll: true }); } catch (e) { card.focus(); }
    }

    /* Closing the details is not a choice. A visitor who has not decided goes
       back to the first card; one who has simply closes it. */
    function dismissPanel() {
      if (view !== 'panel') return;
      if (firstRun) morph(renderBanner);
      else teardown();
    }

    function onKey(e) {
      if (e.key === 'Escape' && view === 'panel') dismissPanel();
    }

    /* A decision made elsewhere — the booking calendar's "allow" button, say —
       closes the card: it has been answered. */
    api.onChange(function () { teardown(); setTimeout(fallback, 0); });

    /* Calls to action: any link into the contact or brochure forms, anywhere
       on the site, tracked without touching page markup. */
    doc.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      var href = a.getAttribute('href') || '';
      var m = href.match(/^(?:https?:\/\/[^/]*varosync\.com)?\/(get-in-touch|brochure)\/?(?:[?#].*)?$/);
      if (!m) return;
      api.track('select_content', {
        content_type: 'cta',
        item_id: m[1],
        link_text: (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100)
      });
    });

    /* Any element carrying [data-consent-open] opens the details — the
       footer "Cookie settings" link the Cookie Notice promises. */
    doc.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target.closest('[data-consent-open]') : null;
      if (!t) return;
      e.preventDefault();
      restoreFocus = t;
      openPanel();
    });

    /* Withdrawal has to be possible from every page. Until a page carries a
       [data-consent-open] link, a small fallback button appears after a
       decision; it never appears on a page that has the link. */
    var fab = null;
    function fallback() {
      if (fab || doc.querySelector('[data-consent-open]') || !api.current()) return;
      fab = button(copy.settings || 'Cookie settings', 'vsc-fab', function () { restoreFocus = fab; openPanel(); });
      fab.setAttribute('data-vsc-fallback', '');
      doc.body.appendChild(fab);
    }

    /* ------------------------------------------------------ timing */

    /* Anything that is still the page's loading screen. The homepage intro
       shows .loading-container and sets cursor: wait on <html> until its
       reveal; [data-page-loader] lets any future loader say the same. */
    function loaderShowing() {
      if (doc.documentElement.style.cursor === 'wait') return true;
      var els = doc.querySelectorAll('.loading-container, [data-preloader-logo], [data-page-loader]');
      for (var i = 0; i < els.length; i++) {
        var cs = win.getComputedStyle(els[i]);
        if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) < 0.05) continue;
        var r = els[i].getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < win.innerHeight) return true;
      }
      return false;
    }

    var SETTLE_MS = typeof cfg.bannerDelayMs === 'number' ? cfg.bannerDelayMs : 250;

    /* After the load event (or 4 s, if some image keeps it waiting), then
       after the loader clears (capped at 12 s so a stuck intro can never
       hide the choice), then a beat so it does not land mid-reveal. */
    function whenPageSettled(cb) {
      var started = false;
      function afterLoad() {
        if (started) return;
        started = true;
        var t0 = Date.now();
        (function check() {
          if (loaderShowing() && Date.now() - t0 < 12000) { setTimeout(check, 200); return; }
          setTimeout(cb, SETTLE_MS);
        })();
      }
      if (doc.readyState === 'complete') afterLoad();
      else {
        win.addEventListener('load', afterLoad, { once: true });
        setTimeout(afterLoad, 4000);
      }
    }

    whenPageSettled(function () {
      if (layer) return; /* already opened from a Cookie settings link */
      if (!api.current()) openBanner();
      else fallback();
    });

    return { open: openPanel, banner: openBanner, close: teardown };
  }

  /* ============================================================== wiring */

  if (typeof module === 'object' && module.exports) {
    module.exports = { create: create, mountUI: mountUI, KEY: KEY };
    return;
  }

  var cfg = {};
  try {
    var node = root.document && root.document.getElementById('vs-infra');
    if (node) cfg = JSON.parse(node.textContent) || {};
  } catch (e) { cfg = {}; }

  var api = create(root, cfg);
  api.init();

  var ui = null;
  function start() {
    ui = mountUI(root, root.document, api, cfg);
    api.open = ui.open;

  }
  root.vsConsent = api;
  api.open = function () { if (ui) ui.open(); };
  /* Stable, dependency-free hook for page scripts: window.vsTrack(name, params). */
  root.vsTrack = function (name, params) { api.track(name, params); };

  if (root.document.readyState === 'loading') root.document.addEventListener('DOMContentLoaded', start);
  else start();
})(typeof window !== 'undefined' ? window : this);
