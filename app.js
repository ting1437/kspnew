/* Kai Seng — plain browser JS. No build step, no framework. */
(function(){
'use strict';
var S = window.SITE, WA = 'https://wa.me/60123943353';
var esc = function(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); };
var money = function(n){ return 'RM ' + Number(n).toFixed(2); };
var byId = function(id){ return document.getElementById(id); };
var product = function(id){ for (var i=0;i<S.products.length;i++) if (S.products[i].id === id) return S.products[i]; return null; };

/* ---------- cart store ---------- */
var KEY = 'ks-cart-v1', subs = [];
function read(){ try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch(e){ return []; } }
function write(items){ localStorage.setItem(KEY, JSON.stringify(items)); paintBadge(); subs.forEach(function(f){ f(items); }); }
var Cart = {
  items: read,
  count: function(){ return read().reduce(function(n,i){ return n + i.qty; }, 0); },
  total: function(){ return read().reduce(function(n,i){ return n + i.qty * i.price; }, 0); },
  add: function(it){
    var items = read();
    var key = it.id + '|' + (it.opts || []).map(function(o){ return o.label + '=' + o.value; }).join(',');
    var hit = items.filter(function(i){ return i.key === key; })[0];
    if (hit) hit.qty += it.qty || 1;
    else items.push({key:key, id:it.id, name:it.name, image:it.image, price:it.price, pack:it.pack, opts:it.opts || [], qty:it.qty || 1});
    write(items);
    toast(it.name + ' added to cart');
  },
  setQty: function(key, qty){ write(read().map(function(i){ if (i.key === key) i.qty = Math.max(1, qty || 1); return i; })); },
  remove: function(key){ write(read().filter(function(i){ return i.key !== key; })); },
  clear: function(){ write([]); },
  subscribe: function(f){ subs.push(f); }
};
window.KSCart = Cart;

/* ---------- floating cart, WhatsApp, toast ---------- */
var badge, tstEl, tid;
function paintBadge(){
  if (!badge) return;
  var n = Cart.count();
  badge.textContent = n;
  if (n > 0) badge.removeAttribute('hidden'); else badge.setAttribute('hidden','');
}
function toast(msg){
  if (!tstEl) return;
  tstEl.textContent = msg;
  tstEl.classList.add('on');
  clearTimeout(tid);
  tid = setTimeout(function(){ tstEl.classList.remove('on'); }, 2200);
}
function mountFloating(){
  var cart = document.createElement('a');
  cart.id = 'ks-cart'; cart.href = 'checkout.html'; cart.setAttribute('aria-label','View cart');
  cart.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#F5EFE5" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L20 8H6.2"/><circle cx="10" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/></svg><b hidden>0</b>';
  var wa = document.createElement('a');
  wa.id = 'ks-wa'; wa.href = WA; wa.target = '_blank'; wa.rel = 'noreferrer';
  wa.setAttribute('aria-label','Chat with us on WhatsApp');
  wa.innerHTML = '<svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true"><path fill="#fff" d="M16.03 4.5c-6.35 0-11.5 5.15-11.5 11.5 0 2.03.53 3.94 1.46 5.6L4.5 27.5l6.06-1.45a11.45 11.45 0 0 0 5.47 1.39c6.35 0 11.5-5.15 11.5-11.5S22.38 4.5 16.03 4.5Zm0 20.7c-1.78 0-3.44-.5-4.85-1.37l-.35-.21-3.6.86.9-3.5-.23-.37a9.16 9.16 0 0 1-1.4-4.9 9.2 9.2 0 1 1 9.53 9.49Zm5.32-6.85c-.29-.15-1.71-.84-1.98-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.34.21-.62.07a7.5 7.5 0 0 1-2.2-1.36 8.3 8.3 0 0 1-1.53-1.9c-.16-.28-.02-.44.12-.6.14-.17.5-.58.63-.79.13-.2.06-.4-.02-.58-.08-.19-.66-1.61-.9-2.2-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.5.07-.77.36-.26.29-1 .97-1 2.37 0 1.39 1.02 2.74 1.16 2.93.14.19 1.98 3.13 4.85 4.28 2.87 1.14 2.87.76 3.39.71.52-.05 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z"/></svg>';
  tstEl = document.createElement('div'); tstEl.id = 'ks-toast';
  document.body.appendChild(cart); document.body.appendChild(wa); document.body.appendChild(tstEl);
  badge = cart.querySelector('b');
  paintBadge();
  window.addEventListener('storage', function(e){ if (e.key === KEY) { paintBadge(); subs.forEach(function(f){ f(read()); }); } });
}

/* ---------- straw cursor + bubble trail ---------- */
function mountCursor(){
  var straw = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M3 22 L14 7 L21 4" fill="none" stroke="#3F3934" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  var st = document.createElement('style');
  st.textContent = 'html,body,*,*::before,*::after{cursor:url("' + straw + '") 3 27, auto !important}' +
    'a,a *,button,button *,summary,label,label *,select,option,[role="button"],[onclick],.btn,.btn *,.social,.filters button,.thumbs button,.catcard,.catcard *,.pcard,.pcard *,.faq summary,.faq summary *,.qty button,#ks-cart,#ks-cart *,#ks-wa,#ks-wa *{cursor:url("' + straw + '") 3 27, auto !important}' +
    'input,textarea{cursor:url("' + straw + '") 3 27, text !important}' +
    'button[disabled],.btn[disabled]{cursor:url("' + straw + '") 3 27, auto !important}';
  document.head.appendChild(st);
  var layer = document.createElement('div'); layer.id = 'ks-bubbles';
  var bubs = [];
  for (var i = 0; i < 5; i++){
    var b = document.createElement('span'); b.className = 'ks-bub';
    var d = 5 + i * 1.8; b.style.width = b.style.height = d + 'px';
    layer.appendChild(b); bubs.push(b);
  }
  document.body.appendChild(layer);
  var pts = [], x = 0, y = 0, moved = false, idle;
  window.addEventListener('mousemove', function(e){
    x = e.clientX; y = e.clientY; moved = true;
    clearTimeout(idle);
    idle = setTimeout(function(){ bubs.forEach(function(b){ b.style.opacity = 0; }); }, 260);
  }, {passive:true});
  (function loop(){
    if (moved){
      pts.unshift({x:x, y:y}); pts.length = 5;
      for (var i = 0; i < 5; i++){
        var p = pts[i]; if (!p) continue;
        bubs[i].style.left = p.x + 'px'; bubs[i].style.top = p.y + 'px';
        bubs[i].style.opacity = 0.85 - i * 0.14; bubs[i].style.scale = 1 - i * 0.06;
      }
    }
    requestAnimationFrame(loop);
  })();
}

/* ---------- shared markup helpers ---------- */
function qtyHtml(id){ return '<span class="qty" data-qty><button type="button" data-step="-1" aria-label="Decrease">\u2013</button><input type="text" inputmode="numeric" value="1" aria-label="Quantity"><span>ctn</span><button type="button" data-step="1" aria-label="Increase">+</button></span>'; }

function productCardHtml(p, i){
  var tilt = ['tilt-a','','tilt-b','tilt-a'][i % 4];
  var foot = p.soldOut
    ? '<button class="btn out" type="button" disabled>Sold out</button>'
    : qtyHtml() + '<button class="btn sm" type="button" data-add="' + p.id + '">Add to cart</button>';
  return '<article class="pcard ' + tilt + (p.soldOut ? ' out' : '') + '" data-cat="' + esc(p.cat) + '">' +
    '<a class="shot" href="product-detail.html?id=' + p.id + '" aria-label="' + esc(p.name) + '">' +
      '<img src="' + p.image + '" alt="' + esc(p.name) + '" width="1600" height="896" loading="lazy" decoding="async"></a>' +
    '<div class="body"><span class="tag sage">' + esc(p.cat) + '</span>' +
      '<h3><a href="product-detail.html?id=' + p.id + '">' + esc(p.name) + '</a></h3>' +
      '<span class="mono">' + esc(p.sku) + '</span>' +
      '<div class="meta"><span>' + esc(p.pack) + '</span><span class="badge ' + p.stock.tone + '">' + esc(p.stock.label) + '</span></div>' +
      '<div class="foot"><span class="price">' + money(p.price) + '<span class="p-sm muted"> / ctn</span></span>' +
      '<div class="tagrow">' + foot + '</div></div>' +
    '</div></article>';
}

/* ---------- catalogue ---------- */
function mountCatalogue(){
  var host = byId('catalogue-grid'); if (!host) return;
  var cats = ['All'], seen = {};
  S.products.forEach(function(p){ if (!seen[p.cat]) { seen[p.cat] = 1; cats.push(p.cat); } });
  var bar = byId('catalogue-filters');
  bar.innerHTML = cats.map(function(c, i){ return '<button type="button" data-filter="' + esc(c) + '" aria-pressed="' + (i === 0) + '">' + esc(c) + '</button>'; }).join('');
  host.innerHTML = S.products.map(productCardHtml).join('');
  bar.addEventListener('click', function(e){
    var b = e.target.closest('button[data-filter]'); if (!b) return;
    var cat = b.getAttribute('data-filter');
    bar.querySelectorAll('button').forEach(function(x){ x.setAttribute('aria-pressed', String(x === b)); });
    host.querySelectorAll('.pcard').forEach(function(card){
      card.style.display = (cat === 'All' || card.getAttribute('data-cat') === cat) ? '' : 'none';
    });
  });
}

/* ---------- home: featured preview + photo wall ---------- */
function mountFeatured(){
  var host = byId('featured-grid'); if (!host) return;
  host.innerHTML = S.products.filter(function(p){ return p.featured; }).map(productCardHtml).join('');
}
function mountWall(){
  var wall = byId('wall'); if (!wall) return;
  var imgs = wall.querySelectorAll('img'), cap = byId('wall-cap'), thumbs = byId('wall-thumbs');
  var i = 0, timer;
  function show(n){
    i = (n + imgs.length) % imgs.length;
    imgs.forEach(function(im, k){ im.classList.toggle('on', k === i); });
    if (cap) cap.textContent = imgs[i].getAttribute('alt');
    if (thumbs) thumbs.querySelectorAll('button').forEach(function(b, k){ b.setAttribute('aria-pressed', String(k === i)); });
  }
  function play(){ clearInterval(timer); timer = setInterval(function(){ show(i + 1); }, 2000); }
  if (thumbs) thumbs.addEventListener('click', function(e){
    var b = e.target.closest('button'); if (!b) return;
    show(Array.prototype.indexOf.call(thumbs.children, b)); play();
  });
  show(0); play();
}

/* ---------- product detail ---------- */
function mountProduct(){
  var host = byId('product-detail'); if (!host) return;
  var id = new URLSearchParams(location.search).get('id');
  var p = product(id) || S.products[0];
  document.title = p.name + ' — Kai Seng';
  var d = document.querySelector('meta[name="description"]');
  if (d) d.setAttribute('content', p.b);
  var crumb = byId('crumb-name'); if (crumb) crumb.textContent = p.name;
  var opts = (p.opts || []).map(function(o){
    return '<label class="field"><span>' + esc(o.label) + '</span><select data-opt="' + esc(o.label) + '">' +
      o.values.map(function(v){ return '<option>' + esc(v) + '</option>'; }).join('') + '</select></label>';
  }).join('');
  var rows = [['Material',p.material],['Size',p.size],['Pack size',p.pack],['Minimum order',p.moq],['Printing',p.print],['Lead time',p.lead]];
  host.innerHTML =
    '<div class="split" style="align-items:start">' +
      '<div class="dots" style="padding:var(--space-10);display:grid;place-items:center;border-radius:var(--radius-3);border:var(--stroke-hair) solid var(--border-hairline)">' +
        '<div class="sticker" style="rotate:-1.8deg;max-width:360px"><img src="' + p.image + '" alt="' + esc(p.name) + '" width="1600" height="896" style="height:250px;object-fit:contain"></div>' +
      '</div>' +
      '<div>' +
        '<span class="eyebrow clay">' + esc(p.cat) + '</span>' +
        '<h1 class="h1 xs">' + esc(p.name) + '</h1>' +
        '<p class="mono mb6">' + esc(p.sku) + '</p>' +
        '<p class="lead mb6">' + esc(p.b) + '</p>' +
        '<div class="tagrow mb6"><span class="price lg">' + money(p.price) + '</span><span class="p-sm muted">per carton, plain stock</span></div>' +
        '<div class="tagrow mb6"><span class="badge ' + p.stock.tone + '">' + esc(p.stock.label) + '</span><span class="tag kraft">' + esc(p.pack) + '</span><span class="tag out">MOQ ' + esc(p.moq) + '</span></div>' +
        '<table class="spec"><tbody>' + rows.map(function(r){ return '<tr><th>' + r[0] + '</th><td>' + esc(r[1]) + '</td></tr>'; }).join('') + '</tbody></table>' +
        (opts ? '<div class="grid g2 mt7">' + opts + '</div>' : '') +
        '<div class="tagrow mt7" data-buy="' + p.id + '">' +
          (p.soldOut ? '<button class="btn out lg" type="button" disabled>Sold out</button>'
                     : qtyHtml() + '<button class="btn lg" type="button" data-add="' + p.id + '" data-with-opts>Add to cart</button>') +
        '</div>' +
        '<div class="btnrow mt8"><a class="btn out" href="services.html#catalogue">Back to catalogue</a>' +
        '<a class="btn out" href="' + WA + '" target="_blank" rel="noreferrer">WhatsApp this item</a></div>' +
        '<p class="p-sm muted mt6">All Photos For Reference Only. Printing and custom sizes available on request.</p>' +
      '</div>' +
    '</div>';
  var extra = byId('product-extra');
  if (extra) extra.innerHTML =
    '<div class="grid g2">' +
      '<div class="card tilt-a"><span class="eyebrow">Print &amp; finishing options</span><ul class="ticks mt5">' +
        p.options.map(function(o){ return '<li>' + esc(o) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="card kraft tilt-b"><span class="eyebrow">Good for</span><div class="tagrow mt5">' +
        p.uses.map(function(u){ return '<span class="tag sage">' + esc(u) + '</span>'; }).join('') + '</div>' +
        '<div class="ruled"><h3 class="h4">Not sure of the size?</h3>' +
        '<p class="p-sm mt3 mb5">Send us a photo of your dish or drink. We will tell you which size fits and how many pieces you actually need.</p>' +
        '<a class="btn out" href="contact.html">Ask us first</a></div></div>' +
    '</div>';
  var rel = byId('product-related');
  if (rel){
    var same = S.products.filter(function(x){ return x.id !== p.id && x.cat === p.cat; });
    var list = (same.length ? same : S.products.filter(function(x){ return x.id !== p.id; })).slice(0,3);
    rel.innerHTML = list.map(productCardHtml).join('');
  }
}

/* ---------- checkout / cart page ---------- */
function optText(i){ return i.opts && i.opts.length ? i.opts.map(function(o){ return o.label + ': ' + o.value; }).join(' \u00b7 ') : 'Standard'; }
function mountCheckout(){
  var host = byId('checkout'); if (!host) return;
  function render(){
    var items = Cart.items(), total = Cart.total();
    if (!items.length){
      host.innerHTML = '<div class="narrow center"><span class="eyebrow clay">Cart</span>' +
        '<h1 class="h1 xs">Your cart is empty.</h1>' +
        '<p class="lead mb8">Nothing added yet. Browse the catalogue and add cartons — we confirm price and print options by WhatsApp.</p>' +
        '<div class="btnrow" style="justify-content:center"><a class="btn lg" href="services.html#catalogue">Browse products</a></div></div>';
      return;
    }
    host.innerHTML = '<div class="wrap"><p class="p-sm muted mb5"><a href="index.html">Home</a> / <a href="services.html#catalogue">Catalogue</a> / Cart</p>' +
      '<span class="eyebrow clay">Cart</span><h1 class="h1 xs mb8">' + items.length + (items.length === 1 ? ' item' : ' items') + ' in your cart</h1>' +
      '<div class="cartgrid"><div class="stack">' +
      items.map(function(i){
        return '<div class="card pad-sm"><div style="display:grid;grid-template-columns:86px 1fr;gap:var(--space-5);align-items:start">' +
          '<div class="dots" style="padding:var(--space-3);border-radius:var(--radius-2);border:var(--stroke-hair) solid var(--border-hairline)">' +
          '<img src="' + i.image + '" alt="' + esc(i.name) + '" width="1600" height="896" loading="lazy" style="height:60px;object-fit:contain;display:block"></div>' +
          '<div class="stack" style="gap:var(--space-3)"><h3 class="h4"><a href="product-detail.html?id=' + i.id + '">' + esc(i.name) + '</a></h3>' +
          '<p class="mono">' + esc(optText(i)) + '</p>' +
          '<p class="p-sm">' + money(i.price) + ' / ctn' + (i.pack ? ' \u00b7 ' + esc(i.pack) : '') + '</p>' +
          '<div class="tagrow ruled" style="justify-content:space-between">' +
            '<span class="qty" data-line="' + esc(i.key) + '"><button type="button" data-step="-1" aria-label="Decrease">\u2013</button>' +
            '<input type="text" inputmode="numeric" value="' + i.qty + '" aria-label="Quantity"><span>ctn</span>' +
            '<button type="button" data-step="1" aria-label="Increase">+</button></span>' +
            '<span class="h4">' + money(i.qty * i.price) + '</span>' +
            '<button class="btn ghost sm" type="button" data-remove="' + esc(i.key) + '">Remove</button>' +
          '</div></div></div></div>';
      }).join('') +
      '<div class="btnrow"><a class="btn out" href="services.html#catalogue">Continue shopping</a></div></div>' +
      '<div class="stack-lg"><div class="card kraft"><span class="eyebrow">Order summary</span><div class="stack mt5" style="gap:var(--space-3)">' +
      items.map(function(i){ return '<div class="p-sm" style="display:flex;justify-content:space-between;gap:var(--space-4)"><span>' + esc(i.name) + ' \u00d7 ' + i.qty + '</span><span>' + money(i.qty * i.price) + '</span></div>'; }).join('') +
      '</div><div class="ruled" style="display:flex;justify-content:space-between;align-items:baseline"><span class="h4">Total</span><span class="price lg">' + money(total) + '</span></div>' +
      '<p class="p-sm muted mt4">Delivery fee and any printing cost are confirmed on WhatsApp. No payment is taken on this site.</p></div>' +
      '<div class="card"><span class="eyebrow clay">Your details</span><div class="stack mt5">' +
      '<label class="field" data-f="name"><span>Name *</span><input placeholder="Your name"><em>Please enter your name.</em></label>' +
      '<label class="field" data-f="phone"><span>Contact number *</span><input placeholder="+60"><em>Please enter a contact number.</em></label>' +
      '<div class="stack" style="gap:var(--space-3)"><span class="p-sm" style="font-weight:600;color:var(--text-heading)">Method</span>' +
      '<label class="choice"><input type="radio" name="method" value="Delivery" checked> Delivery</label>' +
      '<label class="choice"><input type="radio" name="method" value="Self collect"> Self collect — Cheras</label></div>' +
      '<label class="field" data-f="address"><span>Delivery address *</span><textarea rows="3" placeholder="Street, city, postcode"></textarea><em>Please enter a delivery address.</em></label>' +
      '<label class="field" data-f="notes"><span>Notes (optional)</span><textarea rows="2"></textarea></label>' +
      '</div><div class="mt7"><button class="btn lg full" type="button" id="send-order">Send order to WhatsApp</button></div>' +
      '<p class="formerr" id="order-err">Please complete the highlighted fields.</p></div></div></div></div>';
  }
  render();
  Cart.subscribe(render);
  host.addEventListener('click', function(e){
    var rm = e.target.closest('[data-remove]');
    if (rm) { Cart.remove(rm.getAttribute('data-remove')); return; }
    var step = e.target.closest('.qty[data-line] button');
    if (step){
      var box = step.closest('.qty'), input = box.querySelector('input');
      Cart.setQty(box.getAttribute('data-line'), (parseInt(input.value, 10) || 1) + parseInt(step.getAttribute('data-step'), 10));
      return;
    }
    if (e.target.id === 'send-order') sendOrder();
  });
  host.addEventListener('change', function(e){
    var box = e.target.closest('.qty[data-line]');
    if (box && e.target.tagName === 'INPUT') Cart.setQty(box.getAttribute('data-line'), parseInt(e.target.value, 10) || 1);
    if (e.target.name === 'method'){
      var addr = host.querySelector('[data-f="address"]');
      if (addr) addr.style.display = e.target.value === 'Delivery' ? '' : 'none';
    }
  });
  function val(f){ var el = host.querySelector('[data-f="' + f + '"]'); return el ? el.querySelector('input,textarea').value.trim() : ''; }
  function flag(f, bad){ var el = host.querySelector('[data-f="' + f + '"]'); if (el) el.classList.toggle('err', !!bad); return !bad; }
  function sendOrder(){
    var items = Cart.items(), method = (host.querySelector('input[name="method"]:checked') || {}).value || 'Delivery';
    var ok = true;
    ok = flag('name', !val('name')) && ok;
    ok = flag('phone', !val('phone')) && ok;
    ok = flag('address', method === 'Delivery' && !val('address')) && ok;
    byId('order-err').classList.toggle('on', !ok);
    if (!ok || !items.length) return;
    var lines = ['*New order — Kai Seng*','',
      'Name: ' + val('name'),
      'Phone: ' + val('phone'),
      'Method: ' + method,
      method === 'Delivery' ? 'Address: ' + val('address') : 'Address: Self collect at Cheras',
      'Notes: ' + (val('notes') || '—'), '', '*Items*'];
    items.forEach(function(i, n){
      lines.push((n + 1) + '. ' + i.name);
      lines.push('   Spec: ' + optText(i));
      lines.push('   ' + i.qty + ' ctn \u00d7 ' + money(i.price) + ' = ' + money(i.qty * i.price));
    });
    lines.push('', '*Total: ' + money(Cart.total()) + '*', '', 'Plain stock only. Printing quoted separately.');
    window.open(WA + '?text=' + encodeURIComponent(lines.join('\n')), '_blank');
  }
}

/* ---------- appointment form (contact page) ---------- */
function pad2(n){ return String(n).padStart(2, '0'); }
function isoDay(d){ return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }
function mountBooking(){
  var form = byId('booking-form'); if (!form) return;
  var today = new Date();
  var min = new Date(today); min.setDate(min.getDate() + 1);
  var max = new Date(today); max.setDate(max.getDate() + 60);
  var dateInput = form.querySelector('[data-f="date"] input');
  dateInput.min = isoDay(min); dateInput.max = isoDay(max);
  function val(f){ var el = form.querySelector('[data-f="' + f + '"]'); return el ? el.querySelector('input,select,textarea').value.trim() : ''; }
  function flag(f, msg){
    var el = form.querySelector('[data-f="' + f + '"]');
    if (!el) return !msg;
    el.classList.toggle('err', !!msg);
    if (msg) el.querySelector('em').textContent = msg;
    return !msg;
  }
  function dateError(v){
    if (!v) return 'Please choose a date.';
    var day = new Date(v + 'T00:00:00');
    if (day < new Date(isoDay(min) + 'T00:00:00')) return 'Please choose a date from tomorrow onwards.';
    if (day > new Date(isoDay(max) + 'T00:00:00')) return 'Bookings open up to 60 days ahead only.';
    if (day.getDay() === 0) return 'We are closed on Sundays — please pick another day.';
    return '';
  }
  form.addEventListener('click', function(e){
    if (!e.target.closest('#booking-send')) return;
    var ok = true;
    ok = flag('name', val('name') ? '' : 'Please enter your name.') && ok;
    ok = flag('contact', val('contact') ? '' : 'Please enter a phone number or email.') && ok;
    ok = flag('date', dateError(val('date'))) && ok;
    byId('booking-err').classList.toggle('on', !ok);
    if (!ok) return;
    var msg = ['*Booking request — Kai Seng*','',
      'Name: ' + val('name'),
      'Contact: ' + val('contact'),
      'Service: ' + val('service'),
      'Preferred date: ' + val('date'),
      'Preferred time: ' + val('time'),
      'Notes: ' + (val('notes') || '—'), '', 'Sent from kaiseng.com.my'].join('\n');
    window.open(WA + '?text=' + encodeURIComponent(msg), '_blank');
  });
}

/* ---------- enquiry form (contact page, simple) ---------- */
function mountEnquiry(){
  var form = byId('enquiry-form'); if (!form) return;
  form.addEventListener('click', function(e){
    if (!e.target.closest('#enquiry-send')) return;
    function val(f){ var el = form.querySelector('[data-f="' + f + '"]'); return el ? el.querySelector('input,select,textarea').value.trim() : ''; }
    var ok = true;
    ['name','contact'].forEach(function(f){
      var el = form.querySelector('[data-f="' + f + '"]');
      var bad = !val(f);
      el.classList.toggle('err', bad);
      if (bad) ok = false;
    });
    byId('enquiry-err').classList.toggle('on', !ok);
    if (!ok) return;
    var msg = ['*Enquiry — Kai Seng*','',
      'Name: ' + val('name'),
      'Business: ' + (val('business') || '—'),
      'Contact: ' + val('contact'),
      'Looking for: ' + val('want'),
      'Product series: ' + val('series'),
      'Collection: ' + val('collect'),
      'Details: ' + (val('details') || '—')].join('\n');
    window.open(WA + '?text=' + encodeURIComponent(msg), '_blank');
  });
}

/* ---------- add-to-cart delegation (cards + detail page) ---------- */
function mountAddButtons(){
  document.addEventListener('click', function(e){
    var step = e.target.closest('.qty:not([data-line]) button');
    if (step){
      var input = step.closest('.qty').querySelector('input');
      input.value = Math.max(1, (parseInt(input.value, 10) || 1) + parseInt(step.getAttribute('data-step'), 10));
      return;
    }
    var add = e.target.closest('[data-add]');
    if (!add) return;
    e.preventDefault();
    var p = product(add.getAttribute('data-add'));
    if (!p || p.soldOut) return;
    var scope = add.closest('.foot, [data-buy], .tagrow') || document;
    var box = scope.querySelector('.qty input');
    var qty = box ? Math.max(1, parseInt(box.value, 10) || 1) : 1;
    var opts = [];
    if (add.hasAttribute('data-with-opts'))
      document.querySelectorAll('[data-opt]').forEach(function(sel){ opts.push({label:sel.getAttribute('data-opt'), value:sel.value}); });
    Cart.add({id:p.id, name:p.name, image:p.image, price:p.price, pack:p.pack, opts:opts, qty:qty});
    if (box) box.value = 1;
  });
}

/* ---------- small fills ---------- */
function fillYear(){ document.querySelectorAll('[data-year]').forEach(function(el){ el.textContent = new Date().getFullYear(); }); }

document.addEventListener('DOMContentLoaded', function(){
  mountFloating(); mountCursor(); mountAddButtons();
  mountFeatured(); mountWall(); mountCatalogue(); mountProduct(); mountCheckout();
  mountBooking(); mountEnquiry(); fillYear();
});
})();
