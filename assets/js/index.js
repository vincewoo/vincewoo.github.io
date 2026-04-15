// Detect system dark mode preference (original theme behaviour)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

// Inject a floating "Print" button that triggers the browser print dialog.
// The button is hidden via CSS inside @media print so it never appears on paper.
(function () {
  var btn = document.createElement('button');
  btn.className = 'print-button';
  btn.setAttribute('aria-label', 'Print resume');
  btn.textContent = 'Print';
  btn.addEventListener('click', function () {
    window.print();
  });
  document.body.appendChild(btn);
}());
