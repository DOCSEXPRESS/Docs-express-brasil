// Script de preço
const seletor = document.getElementById('seletor-documento');
const exibidor = document.getElementById('preco-exibido');

seletor.addEventListener('change', function () {
  if (this.value) {
    exibidor.textContent = `Valor: ${this.value}`;
    exibidor.style.opacity = 1;
  } else {
    exibidor.textContent = '';
    exibidor.style.opacity = 0;
  }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});