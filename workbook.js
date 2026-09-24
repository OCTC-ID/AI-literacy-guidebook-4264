/* AI Literacy Faculty Workbook
   - Grows text boxes as you type
   - Keeps a draft in this browser only (nothing is sent anywhere)
   - Copies answers into print-only blocks for Print / Save as PDF */
(function () {
  var page = document.body.getAttribute('data-workbook') || location.pathname;
  var fields = document.querySelectorAll('.wb-question textarea, .wb-question input, .wb-question select');
  var status = document.querySelector('.wb-status');

  function key(el) { return 'wb:' + page + ':' + el.id; }

  function store(action, k, v) {
    try {
      if (action === 'get') return localStorage.getItem(k);
      if (action === 'set') localStorage.setItem(k, v);
      if (action === 'remove') localStorage.removeItem(k);
    } catch (e) { return null; }
  }

  function grow(el) {
    if (el.tagName !== 'TEXTAREA') return;
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  }

  function mirror(el) {
    var out = el.parentNode.querySelector('.wb-answer-print');
    if (!out) return;
    if (el.tagName === 'SELECT') {
      out.textContent = el.value ? el.options[el.selectedIndex].text : '';
    } else {
      out.textContent = el.value;
    }
  }

  var timer;
  function saved() {
    if (!status) return;
    status.textContent = 'Draft saved in this browser.';
    clearTimeout(timer);
    timer = setTimeout(function () { status.textContent = ''; }, 2500);
  }

  fields.forEach(function (el) {
    var v = store('get', key(el));
    if (v) el.value = v;
    grow(el); mirror(el);
    el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', function () {
      grow(el); mirror(el);
      store('set', key(el), el.value);
      saved();
    });
  });

  var printBtn = document.querySelector('[data-wb="print"]');
  if (printBtn) printBtn.addEventListener('click', function () {
    fields.forEach(mirror);
    markEmptyRows();
    window.print();
  });

  var clearBtn = document.querySelector('[data-wb="clear"]');
  if (clearBtn) clearBtn.addEventListener('click', function () {
    if (!confirm('Clear all your answers on this page? This cannot be undone.')) return;
    fields.forEach(function (el) {
      el.value = ''; grow(el); mirror(el);
      store('remove', key(el));
    });
    if (status) status.textContent = 'Answers cleared.';
  });

  /* Leave empty assignment rows off the printout */
  /* If every row is blank, print them all so the page works as a paper worksheet */
  function markEmptyRows() {
    var rows = document.querySelectorAll('.wb-sort-row');
    var status = Array.prototype.map.call(rows, function (row) {
      return Array.prototype.some.call(
        row.querySelectorAll('input, textarea, select'),
        function (el) { return el.value.trim() !== ''; });
    });
    var anyFilled = status.indexOf(true) !== -1;
    Array.prototype.forEach.call(rows, function (row, i) {
      row.classList.toggle('is-empty', anyFilled && !status[i]);
    });
  }

  window.addEventListener('beforeprint', function () { fields.forEach(mirror); markEmptyRows(); });

  /* Copy buttons for AI prompts */
  document.querySelectorAll('[data-wb-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var src = document.getElementById(btn.getAttribute('data-wb-copy'));
      if (!src || !navigator.clipboard) return;
      var label = btn.textContent;
      navigator.clipboard.writeText(src.textContent).then(function () {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = label; }, 2000);
      }, function () {});
    });
  });
})();
