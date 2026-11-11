const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });
}

document.querySelectorAll('nav a').forEach((link) => {
  if (link.dataset.page === document.body.dataset.page) {
    link.classList.add('active');
  }
});

document.querySelectorAll('[data-year]').forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
  });
}
