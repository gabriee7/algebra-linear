function abrirGabarito(id) {
  var m = document.getElementById(id);
  if (m) { m.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
}
function fecharGabarito(el) {
  var overlay = el.closest ? el.closest('.modal-overlay') : el;
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
}
document.addEventListener('click', function (e) {
  if (e.target.classList && e.target.classList.contains('modal-overlay')) {
    fecharGabarito(e.target);
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.is-open').forEach(function (m) {
      m.classList.remove('is-open');
    });
    document.body.style.overflow = '';
  }
});
