document.querySelectorAll('.nav-dropdown-toggle').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var menu = this.nextElementSibling;
    var wasOpen = menu.classList.contains('is-open');
    document.querySelectorAll('.nav-dropdown-menu.is-open').forEach(function (m) {
      m.classList.remove('is-open');
    });
    if (!wasOpen) menu.classList.add('is-open');
  });
});
document.addEventListener('click', function () {
  document.querySelectorAll('.nav-dropdown-menu.is-open').forEach(function (m) {
    m.classList.remove('is-open');
  });
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.nav-dropdown-menu.is-open').forEach(function (m) {
      m.classList.remove('is-open');
    });
  }
});
