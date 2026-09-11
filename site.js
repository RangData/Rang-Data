/* ==========================================================================
   RANG DATA — site behaviour (SIMPLIFIED SOCIAL INJECT)
   ========================================================================== */
(function () {
  'use strict';

  var CFG = {
    whatsapp: '923406751076',
    email: '12rangdata@gmail.com',
    delivery: 250,
    freeDeliveryQty: 3,
    cartKey: 'rd_cart_v2',
    orderKey: 'rd_last_order',
    currency: 'Rs.',
     location: 'Lahore, Punjab, Pakistan',
    social: {
      instagram: 'https://www.instagram.com/rangdata.official/',
      facebook: 'https://www.facebook.com/profile.php?id=100006600948601',
      tiktok: 'https://www.tiktok.com/@rangdata',
      gmailLink: 'https://mail.google.com/mail/?view=cm&fs=1&to=12rangdata@gmail.com'
    }
  };
  window.RD_CONFIG = CFG;

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var P = window.RD_PRODUCTS;

  function money(n) { return CFG.currency + ' ' + Number(n || 0).toLocaleString('en-US'); }
  window.rdMoney = money;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  window.rdEsc = esc;

  /* ------------------------------------------------------------------ toast */
  function toast(msg, icon) {
    var stack = $('#toastStack');
    if (!stack) return;
    var el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.innerHTML = '<i class="fa-solid ' + (icon || 'fa-circle-check') + '" aria-hidden="true"></i><span>' + esc(msg) + '</span>';
    stack.appendChild(el);
    setTimeout(function () { el.classList.add('leaving'); setTimeout(function () { el.remove(); }, 320); }, 2600);
  }
  window.rdToast = toast;

  /* ------------------------------------------------------------------- cart */
  var Cart = {
    items: [],
    load: function () {
      var raw = [];
      try { raw = JSON.parse(localStorage.getItem(CFG.cartKey)) || []; } catch (e) { raw = []; }
      var clean = [];
      raw.forEach(function (row) {
        if (!row || !row.id) return;
        var p = P && P.get(row.id);
        if (!p || p.status !== 'in-stock') return;
        var qty = Math.max(1, Math.min(20, parseInt(row.qty, 10) || 1));
        var hit = clean.filter(function (c) { return c.id === p.id; })[0];
        if (hit) { hit.qty = Math.min(20, hit.qty + qty); return; }
        clean.push({ id: p.id, qty: qty });
      });
      this.items = clean;
      return this.items;
    },
    save: function () {
      try { localStorage.setItem(CFG.cartKey, JSON.stringify(this.items)); } catch (e) {}
      this.render();
    },
    detailed: function () {
      return this.items.map(function (row) {
        var p = P.get(row.id);
        return {
          id: p.id, code: p.code, name: p.name, color: p.color, pieces: p.pieces,
          fabric: p.fabric, collection: p.collection, img: p.imgs[0],
          price: p.price, qty: row.qty, line: p.price * row.qty
        };
      });
    },
    count: function () { return this.items.reduce(function (n, r) { return n + r.qty; }, 0); },
    totals: function () {
      var subtotal = this.detailed().reduce(function (n, r) { return n + r.line; }, 0);
      var qty = this.count();
      var freeShip = qty >= CFG.freeDeliveryQty;
      var delivery = (qty === 0 || freeShip) ? 0 : CFG.delivery;
      return { qty: qty, subtotal: subtotal, delivery: delivery, freeShip: freeShip, total: subtotal + delivery, toFree: Math.max(0, CFG.freeDeliveryQty - qty) };
    },
    add: function (id, qty) {
      var p = P.get(id);
      if (!p) return false;
      if (p.status !== 'in-stock') { toast(p.code + ' is sold out right now.', 'fa-circle-exclamation'); return false; }
      qty = Math.max(1, parseInt(qty, 10) || 1);
      var hit = this.items.filter(function (r) { return r.id === p.id; })[0];
      if (hit) hit.qty = Math.min(20, hit.qty + qty);
      else this.items.push({ id: p.id, qty: Math.min(20, qty) });
      this.save();
      return true;
    },
    setQty: function (id, qty) {
      qty = parseInt(qty, 10); if (isNaN(qty) || qty < 1) qty = 1; qty = Math.min(20, qty);
      this.items.forEach(function (r) { if (r.id === id) r.qty = qty; });
      this.save();
    },
    remove: function (id) { this.items = this.items.filter(function (r) { return r.id !== id; }); this.save(); },
    clear: function () { this.items = []; this.save(); },
    render: function () {
      var t = this.totals();
      $$('[data-cart-count]').forEach(function (el) {
        el.textContent = t.qty;
        el.setAttribute('data-empty', t.qty === 0 ? 'true' : 'false');
      });
      var list = $('#cartList');
      if (list) {
        if (!this.items.length) {
          list.innerHTML = '<div class="cart-empty"><i class="fa-solid fa-bag-shopping" aria-hidden="true"></i><p>Your shopping bag is empty.</p><a class="btn btn-ghost btn-sm" href="shop.html">Browse collections</a></div>';
        } else {
          list.innerHTML = this.detailed().map(function (it) {
            return '<div class="cart-row"><a href="product.html?id=' + encodeURIComponent(it.id) + '"><img src="' + esc(it.img) + '" alt="' + esc(it.name) + '" loading="lazy"></a><div><div class="cart-code">' + esc(it.code) + '</div><a class="cart-name" href="product.html?id=' + encodeURIComponent(it.id) + '">' + esc(it.name) + '</a><div class="cart-price">' + money(it.price) + '</div><div class="cart-row-foot"><div class="qty-box"><button type="button" aria-label="Decrease quantity" data-cart-dec="' + esc(it.id) + '">&minus;</button><input type="text" inputmode="numeric" value="' + it.qty + '" aria-label="Quantity for ' + esc(it.code) + '" data-cart-qty="' + esc(it.id) + '"><button type="button" aria-label="Increase quantity" data-cart-inc="' + esc(it.id) + '">+</button></div><button type="button" class="cart-remove" data-cart-remove="' + esc(it.id) + '">Remove</button></div></div></div>';
          }).join('');
        }
      }
      var sub = $('#cartSubtotal'); if (sub) sub.textContent = money(t.subtotal);
      var del = $('#cartDelivery'); if (del) { del.textContent = t.qty === 0 ? money(0) : (t.freeShip ? 'Free' : money(t.delivery)); del.parentNode.classList.toggle('free', t.freeShip && t.qty > 0); }
      var tot = $('#cartTotal'); if (tot) tot.textContent = money(t.total);
      var prog = $('#cartProgress');
      if (prog) {
        if (t.qty === 0) prog.textContent = '';
        else if (t.freeShip) prog.innerHTML = '<b>Free delivery unlocked.</b> Nice pick.';
        else prog.innerHTML = 'Add <b>' + t.toFree + ' more item' + (t.toFree > 1 ? 's' : '') + '</b> for free delivery.';
      }
      var co = $('#cartCheckoutBtn');
      if (co) {
        co.setAttribute('aria-disabled', this.items.length ? 'false' : 'true');
        if (this.items.length) co.removeAttribute('disabled'); else co.setAttribute('disabled', 'disabled');
      }
      document.dispatchEvent(new CustomEvent('rd:cart', { detail: t }));
    }
  };
  window.RD_CART = Cart;

  /* ---------- DRAWER / NAV ---------- */
  function openCart() { var p = $('#cartPanel'), s = $('#cartScrim'); if (!p) { location.href = 'checkout.html'; return; } p.classList.add('open'); if (s) s.classList.add('open'); p.setAttribute('aria-hidden', 'false'); document.body.classList.add('no-scroll'); var c = $('.cart-close', p); if (c) c.focus(); }
  function closeCart() { var p = $('#cartPanel'), s = $('#cartScrim'); if (!p) return; var wasOpen = p.classList.contains('open'); p.classList.remove('open'); if (s) s.classList.remove('open'); p.setAttribute('aria-hidden', 'true'); document.body.classList.remove('no-scroll'); var b = $('[data-open-cart]'); if (wasOpen && b) b.focus(); }
  window.rdOpenCart = openCart; window.rdCloseCart = closeCart;

  function openNav() { var d = $('#navDrawer'), s = $('#navScrim'), b = $('[data-open-nav]'); if (!d) return; d.classList.add('open'); if (s) s.classList.add('open'); d.setAttribute('aria-hidden', 'false'); if (b) b.setAttribute('aria-expanded', 'true'); document.body.classList.add('no-scroll'); var c = $('[data-close-nav]', d); if (c) c.focus(); }
  function closeNav() { var d = $('#navDrawer'), s = $('#navScrim'), b = $('[data-open-nav]'); if (!d) return; var wasOpen = d.classList.contains('open'); d.classList.remove('open'); if (s) s.classList.remove('open'); d.setAttribute('aria-hidden', 'true'); if (b) { b.setAttribute('aria-expanded', 'false'); if (wasOpen) b.focus(); } document.body.classList.remove('no-scroll'); }

  /* ---------- CARD MARKUP ---------- */
  function cardHTML(p) {
    var sold = p.status !== 'in-stock';
    var url = 'product.html?id=' + encodeURIComponent(p.id);
    var alt = p.imgs[1] || p.imgs[0];
    return '<article class="card' + (sold ? ' is-soldout' : '') + '" data-id="' + esc(p.id) + '"><a class="card-media" href="' + url + '" aria-label="' + esc(p.name + ' — ' + p.code) + '"><img class="card-img-main" src="' + esc(p.imgs[0]) + '" alt="' + esc(p.name) + '" loading="lazy" decoding="async"><img class="card-img-alt" src="' + esc(alt) + '" alt="" aria-hidden="true" loading="lazy" decoding="async"><span class="card-flags">' + (sold ? '<span class="badge badge-soldout">Sold out</span>' : '') + '</span></a><div class="card-quick">' + (sold ? '<a class="btn btn-ghost btn-sm" href="' + url + '">View details</a>' : '<button type="button" class="btn btn-sm" data-add="' + esc(p.id) + '">Add to bag</button>') + '</div><div class="card-body"><div class="card-code">' + esc(p.code) + '</div><h3 class="card-title"><a href="' + url + '">' + esc(p.name) + '</a></h3><div class="card-meta">' + p.pieces + ' pcs unstitched &middot; ' + esc(p.fabric) + '</div><div class="card-price">' + money(p.price) + (sold ? ' <span class="card-meta">(unavailable)</span>' : '') + '</div></div></article>';
  }
  window.rdCardHTML = cardHTML;

  /* ---------- SEARCH ---------- */
  function initSearch() {
    $$('[data-search-form]').forEach(function (form) {
      var input = $('input[type="search"], input[type="text"]', form);
      var box = form.parentNode.querySelector('[data-suggest]');
      if (!input) return;
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var q = input.value.trim();
        if (!q) { input.focus(); return; }
        var hits = P.search(q);
        if (hits.length === 1) location.href = 'product.html?id=' + encodeURIComponent(hits[0].id);
        else location.href = 'search.html?q=' + encodeURIComponent(q);
      });
      if (!box) return;
      var hide = function () { box.classList.remove('open'); box.innerHTML = ''; };
      input.addEventListener('input', function () {
        var q = input.value.trim();
        if (q.length < 2) { hide(); return; }
        var hits = P.search(q).slice(0, 6);
        if (!hits.length) {
          box.innerHTML = '<div class="s-empty">No match for &ldquo;' + esc(q) + '&rdquo;. Try a code like RD0545 or a colour.</div>';
        } else {
          box.innerHTML = hits.map(function (p) {
            return '<a href="product.html?id=' + encodeURIComponent(p.id) + '"><img src="' + esc(p.imgs[0]) + '" alt="" loading="lazy"><span><span class="s-code">' + esc(p.code) + '</span><span class="s-name">' + esc(p.name) + '</span><span class="s-price">' + money(p.price) + (p.status === 'in-stock' ? '' : ' &middot; sold out') + '</span></span></a>';
          }).join('');
        }
        box.classList.add('open');
      });
      input.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
      document.addEventListener('click', function (e) { if (!form.parentNode.contains(e.target)) hide(); });
    });
  }

  /* ---------- HERO ---------- */
  function initHero() {
    var hero = $('#hero');
    if (!hero) return;
    var slides = $$('.hero-slide', hero);
    var dots = $$('#heroDots button');
    if (slides.length < 2) return;
    var i = 0, timer = null;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function go(n) { slides[i].classList.remove('active'); if (dots[i]) dots[i].classList.remove('active'); i = (n + slides.length) % slides.length; slides[i].classList.add('active'); if (dots[i]) dots[i].classList.add('active'); }
    function play() { if (!reduce) timer = setInterval(function () { go(i + 1); }, 5500); }
    function stop() { clearInterval(timer); }
    dots.forEach(function (d, n) { d.addEventListener('click', function () { stop(); go(n); play(); }); });
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', play);
    document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else { stop(); play(); } });
    play();
  }

  /* ---------- TABS & ACCORDION ---------- */
  function initTabs() {
    $$('[data-tabs]').forEach(function (root) {
      var btns = $$('[role="tab"]', root);
      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          btns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
          $$('[role="tabpanel"]', root).forEach(function (p) { p.classList.remove('active'); });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
          var panel = $('#' + btn.getAttribute('aria-controls'), root);
          if (panel) panel.classList.add('active');
        });
      });
    });
  }
  function initAccordions() {
    $$('.acc-item').forEach(function (item) {
      var q = $('.acc-q', item), a = $('.acc-a', item);
      if (!q || !a) return;
      q.setAttribute('aria-expanded', 'false');
      q.addEventListener('click', function () {
        var open = item.classList.contains('open');
        var parent = item.closest('.accordion');
        if (parent) {
          $$('.acc-item.open', parent).forEach(function (o) {
            if (o === item) return;
            o.classList.remove('open');
            var oa = $('.acc-a', o), oq = $('.acc-q', o);
            if (oa) oa.style.maxHeight = '0px';
            if (oq) oq.setAttribute('aria-expanded', 'false');
          });
        }
        item.classList.toggle('open', !open);
        q.setAttribute('aria-expanded', String(!open));
        a.style.maxHeight = open ? '0px' : a.scrollHeight + 'px';
      });
    });
    window.addEventListener('resize', function () { $$('.acc-item.open .acc-a').forEach(function (a) { a.style.maxHeight = a.scrollHeight + 'px'; }); });
  }

  /* ---------- ✅ SOCIAL LINKS INJECT (SINGLE SOURCE OF TRUTH) ---------- */
  function injectSocials() {
    var s = CFG.social;
    
    // Announcement Bar
    var announce = document.querySelector('.announce-socials');
    if (announce) {
      announce.innerHTML = 
        '<a href="https://www.instagram.com/rangdata.official/" target="_blank" rel="noopener" aria-label="RANG DATA on Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>' +
        '<a href="https://www.facebook.com/profile.php?id=100006600948601" target="_blank" rel="noopener" aria-label="RANG DATA on Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>' +
        '<a href="https://www.tiktok.com/@rangdata" target="_blank" rel="noopener" aria-label="RANG DATA on TikTok"><i class="fa-brands fa-tiktok" aria-hidden="true"></i></a>';
    }

    // Mobile Drawer
    var drawer = document.querySelector('.drawer-socials');
    if (drawer) {
      drawer.innerHTML = 
        '<a href="https://www.instagram.com/rangdata.official/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>' +
        '<a href="https://www.facebook.com/profile.php?id=100006600948601" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>' +
        '<a href="https://www.tiktok.com/@rangdata" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok" aria-hidden="true"></i></a>' +
        '<a href="https://wa.me/923406751076" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></a>';
    }

    // Footer
    var footer = document.querySelector('.footer-socials');
    if (footer) {
      footer.innerHTML = 
        '<a href="https://www.instagram.com/rangdata.official/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>' +
        '<a href="https://www.facebook.com/profile.php?id=100006600948601" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>' +
        '<a href="https://www.tiktok.com/@rangdata" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok" aria-hidden="true"></i></a>' +
        '<a href="https://wa.me/923406751076" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></a>';
    }

    // Footer Email - GMAIL LINK
    var emailLi = document.querySelector('.footer-contact li i.fa-envelope');
    if (emailLi) {
      var parentLi = emailLi.closest('li');
      if (parentLi) {
        parentLi.innerHTML = '<i class="fa-regular fa-envelope" aria-hidden="true"></i><a href="https://mail.google.com/mail/?view=cm&fs=1&to=12rangdata@gmail.com" target="_blank" style="display:inline; color:#d0c0c0; text-decoration:underline;">12rangdata@gmail.com</a>';
      }
       
    // Footer Location
    var locIcon = document.querySelector('.footer-contact li i.fa-location-dot');
    if (locIcon) {
      var locLi = locIcon.closest('li');
      if (locLi) {
        var locSpan = locLi.querySelector('span');
        if (locSpan) locSpan.textContent = CFG.location;
      }
    }
    }
  }

  /* ---------- GLOBAL EVENTS ---------- */
  function initGlobalEvents() {
    document.addEventListener('click', function (e) {
      var t = e.target;
      var add = t.closest('[data-add]');
      if (add) {
        e.preventDefault();
        var id = add.getAttribute('data-add');
        var qtyEl = add.getAttribute('data-qty-source') ? $(add.getAttribute('data-qty-source')) : null;
        var qty = qtyEl ? parseInt(qtyEl.value, 10) || 1 : 1;
        if (Cart.add(id, qty)) { var p = P.get(id); toast(p.code + ' added to your bag.'); openCart(); }
        return;
      }
      var buy = t.closest('[data-buy]');
      if (buy) {
        e.preventDefault();
        var bid = buy.getAttribute('data-buy');
        var bq = buy.getAttribute('data-qty-source') ? $(buy.getAttribute('data-qty-source')) : null;
        if (Cart.add(bid, bq ? parseInt(bq.value, 10) || 1 : 1)) location.href = 'checkout.html';
        return;
      }
      var inc = t.closest('[data-cart-inc]');
      if (inc) { var iid = inc.getAttribute('data-cart-inc'); var cur = Cart.items.filter(function (r) { return r.id === iid; })[0]; Cart.setQty(iid, (cur ? cur.qty : 1) + 1); return; }
      var dec = t.closest('[data-cart-dec]');
      if (dec) { var did = dec.getAttribute('data-cart-dec'); var c2 = Cart.items.filter(function (r) { return r.id === did; })[0]; if (c2 && c2.qty <= 1) Cart.remove(did); else Cart.setQty(did, (c2 ? c2.qty : 2) - 1); return; }
      var rem = t.closest('[data-cart-remove]');
      if (rem) { var rid = rem.getAttribute('data-cart-remove'); var rp = P.get(rid); Cart.remove(rid); toast((rp ? rp.code : 'Item') + ' removed.', 'fa-trash-can'); return; }
      if (t.closest('[data-open-cart]')) { e.preventDefault(); openCart(); return; }
      if (t.closest('[data-close-cart]')) { e.preventDefault(); closeCart(); return; }
      if (t.closest('[data-open-nav]')) { e.preventDefault(); openNav(); return; }
      if (t.closest('[data-close-nav]')) { e.preventDefault(); closeNav(); return; }
      var acc = t.closest('.drawer-acc-btn');
      if (acc) { var open = acc.getAttribute('aria-expanded') === 'true'; acc.setAttribute('aria-expanded', String(!open)); var sub = acc.nextElementSibling; if (sub) sub.classList.toggle('open', !open); }
    });
    document.addEventListener('change', function (e) { var q = e.target.closest('[data-cart-qty]'); if (q) Cart.setQty(q.getAttribute('data-cart-qty'), q.value); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeCart(); closeNav(); } });
    window.addEventListener('storage', function (e) { if (e.key === CFG.cartKey) { Cart.load(); Cart.render(); } });
    $$('[data-newsletter]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = $('input', form);
        var mail = (input && input.value || '').trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) { toast('Please enter a valid email address.', 'fa-circle-exclamation'); if (input) input.focus(); return; }
        form.reset();
        toast('Thank you. We will be in touch with first looks.');
        window.open('https://wa.me/' + CFG.whatsapp + '?text=' + encodeURIComponent('Hi RANG DATA, please add me to your new-arrivals list: ' + mail), '_blank');
      });
    });
    var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    $$('.nav a, .drawer-nav a').forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('?')[0].toLowerCase();
      if (href && href === here) { a.classList.add('is-current'); var li = a.closest('li'); if (li) li.classList.add('is-active'); }
    });
    $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* ------------------------------------------------------------------- BOOT */
  function boot() {
    Cart.load();
    injectSocials();  // <--- Yeh line automatic social links laga degi
    initGlobalEvents();
    initSearch();
    initHero();
    initTabs();
    initAccordions();
    Cart.render();
    if (window.RD_PAGE && typeof window.RD_PAGE.init === 'function') {
      try { window.RD_PAGE.init(); } catch (err) { /* keep the rest of the page alive */ }
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
