/* AI Literacy Faculty Workbook
   - Grows text boxes as you type
   - Keeps a draft in this browser only (nothing is sent anywhere)
   - Copies answers into print-only blocks for Print / Save as PDF
   - Checkbox dropdowns (choose several) show their choices in the summary */
(function () {
  var page = document.body.getAttribute('data-workbook') || location.pathname;
  var fields = document.querySelectorAll('.wb-question textarea, .wb-question input, .wb-question select');
  var status = document.querySelector('.wb-status');

  function key(el) { return 'wb:' + page + ':' + el.id; }
  function isBox(el) { return el.type === 'checkbox'; }
  function hasAnswer(el) { return isBox(el) ? el.checked : el.value.trim() !== ''; }

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
    var q = el.closest('.wb-question');
    var out = q && q.querySelector('.wb-answer-print');
    if (!out) return;
    if (isBox(el)) {
      var picked = Array.prototype.filter.call(
        q.querySelectorAll('input[type="checkbox"]'), function (b) { return b.checked; })
        .map(function (b) { return b.value; });
      out.textContent = picked.join(', ');
      var text = q.querySelector('.wb-dropdown-text');
      if (text) {
        /* Short names keep the box on one line, so the row doesn't grow */
        var short = picked.map(function (v) { return v.replace(/^BE /, ''); }).join(', ');
        text.textContent = picked.length ? short : (text.getAttribute('data-empty') || 'Choose behaviors');
        text.parentNode.title = picked.join(', ');
      }
    } else if (el.tagName === 'SELECT') {
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
    if (isBox(el)) { el.checked = v === '1'; }
    else if (v) { el.value = v; }
    grow(el); mirror(el);
    var evt = (el.tagName === 'SELECT' || isBox(el)) ? 'change' : 'input';
    el.addEventListener(evt, function () {
      grow(el); mirror(el);
      if (isBox(el)) store(el.checked ? 'set' : 'remove', key(el), '1');
      else store('set', key(el), el.value);
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
      if (isBox(el)) el.checked = false; else el.value = '';
      grow(el); mirror(el);
      store('remove', key(el));
    });
    if (status) status.textContent = 'Answers cleared.';
  });

  /* Leave empty rows off the printout */
  /* If every row is blank, print them all so the page works as a paper worksheet */
  function markEmptyRows() {
    var rows = document.querySelectorAll('.wb-sort-row');
    var filled = Array.prototype.map.call(rows, function (row) {
      return Array.prototype.some.call(row.querySelectorAll('input, textarea, select'), hasAnswer);
    });
    var anyFilled = filled.indexOf(true) !== -1;
    Array.prototype.forEach.call(rows, function (row, i) {
      row.classList.toggle('is-empty', anyFilled && !filled[i]);
    });
  }

  window.addEventListener('beforeprint', function () { fields.forEach(mirror); markEmptyRows(); });

  /* Checkbox dropdowns: close when you click elsewhere or press Escape */
  var dropdowns = document.querySelectorAll('.wb-dropdown');
  document.addEventListener('click', function (e) {
    dropdowns.forEach(function (d) { if (d.open && !d.contains(e.target)) d.open = false; });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    dropdowns.forEach(function (d) {
      if (d.open) { d.open = false; d.querySelector('summary').focus(); }
    });
  });

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
