// Animación del encabezado
const header = document.querySelector('header');
window.addEventListener('load', () => {
  header.classList.add('loaded');
});

// Animación de las secciones
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight * 0.8) {
      section.classList.add('visible');
    }
  });
});


// Función para animar los elementos al hacer scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('section, article, aside');
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  elements.forEach(element => {
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;

    if (scrollPosition + windowHeight >= elementTop + elementHeight / 3) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  });
}

// Agregar evento de scroll
window.addEventListener('scroll', animateOnScroll);

// Animación del menú de navegación
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('open');
});