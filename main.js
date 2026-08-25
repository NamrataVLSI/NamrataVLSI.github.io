/* Namrata Yadav — portfolio scripts */

(function () {
  'use strict';

  /* ---- mobile navigation ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- image placeholders ----
     Any <img class="shot"> whose file is not present yet is replaced by a
     labelled placeholder showing the expected filename. Drop the real
     screenshot into assets/projects/ with that exact name and it appears. */
  var icon = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 15l5-5 4 4 3-3 6 6"/></svg>';

  function placehold(img) {
    var name = (img.getAttribute('src') || '').split('/').pop();
    var div = document.createElement('div');
    div.className = 'img-ph';
    div.innerHTML = icon + '<span>' + name + '</span><span>add this screenshot</span>';
    if (img.parentNode) { img.parentNode.replaceChild(div, img); }
  }

  Array.prototype.forEach.call(document.querySelectorAll('img.shot'), function (img) {
    img.addEventListener('error', function () { placehold(img); });
    if (img.complete && img.naturalWidth === 0) { placehold(img); }
  });

  /* ---- profile photo fallback ---- */
  var photo = document.querySelector('img.photo');
  if (photo) {
    var swap = function () {
      var div = document.createElement('div');
      div.className = 'photo-ph';
      div.innerHTML = '<strong>NY</strong><span>profile.jpg</span>';
      if (photo.parentNode) { photo.parentNode.replaceChild(div, photo); }
    };
    photo.addEventListener('error', swap);
    if (photo.complete && photo.naturalWidth === 0) { swap(); }
  }

  /* ---- project category filter ---- */
  var buttons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.proj-card');
  if (buttons.length && cards.length) {
    Array.prototype.forEach.call(buttons, function (btn) {
      btn.addEventListener('click', function () {
        var want = btn.getAttribute('data-filter');
        Array.prototype.forEach.call(buttons, function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        Array.prototype.forEach.call(cards, function (card) {
          var cats = card.getAttribute('data-cats') || '';
          card.style.display = (want === 'all' || cats.indexOf(want) !== -1) ? '' : 'none';
        });
      });
    });
  }

  /* ---- mark current nav item ---- */
  var here = location.pathname.split('/').pop() || 'index.html';
  Array.prototype.forEach.call(document.querySelectorAll('.nav-links a'), function (a) {
    var href = (a.getAttribute('href') || '').split('/').pop();
    if (href === here) { a.classList.add('active'); }
  });
})();
