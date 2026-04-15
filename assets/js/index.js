// Initialize theme: localStorage preference takes priority, then system preference
(function () {
  var saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark');
  }
}());

// Inject a floating theme toggle pill with sun/moon icons
(function () {
  var SUN_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  var MOON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  var btn = document.createElement('button');
  btn.className = 'theme-toggle-button';

  var thumb = document.createElement('span');
  thumb.className = 'theme-toggle-thumb';
  btn.appendChild(thumb);

  function updateIcon() {
    var isDark = document.body.classList.contains('dark');
    thumb.innerHTML = isDark ? MOON_SVG : SUN_SVG;
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  updateIcon();

  btn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    updateIcon();
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
