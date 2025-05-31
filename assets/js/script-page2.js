const imagenes = document.querySelectorAll('.imagen');
const modal = document.getElementById('modal');
const imagenAmpliada = document.getElementById('imagenAmpliada');
const cerrar = document.querySelector('.cerrar');

imagenes.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    imagenAmpliada.src = img.src;
  });
});

cerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});