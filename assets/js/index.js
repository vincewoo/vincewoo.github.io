// Initialize theme: localStorage preference takes priority, then system preference
(function () {
  var saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark');
  }
}());

// Inject a floating theme toggle button
(function () {
  var btn = document.createElement('button');
  btn.className = 'theme-toggle-button';

  function updateLabel() {
    var isDark = document.body.classList.contains('dark');
    btn.textContent = isDark ? 'Light' : 'Dark';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  updateLabel();

  btn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    updateLabel();
  });

  document.body.appendChild(btn);
}());

// Inject a floating "Print" button that triggers the browser print dialog.
// The button is hidden via CSS inside @media print so it never appears on paper.
(function () {
  var btn = document.createElement('button');
  btn.className = 'print-button';
  btn.setAttribute('aria-label', 'Print resume');
  btn.textContent = '\uD83D\uDDA8\uFE0F Print';
  btn.addEventListener('click', function () {
    window.print();
  });
  document.body.appendChild(btn);
}());
