import translations from "./translations.js";

const languageToggle = document.querySelector('#toggleLanguage');
const flagImage = document.querySelector('#flagImage');

const flagImages = {
  'es_ES': 'https://s.w.org/images/core/emoji/13.1.0/svg/1f1fa-1f1f8.svg',
  'en_US': 'https://s.w.org/images/core/emoji/13.1.0/svg/1f1e8-1f1f4.svg'
};

// Establecer la imagen de la bandera inicial en función del idioma actual
const currentLanguage = 'en_US';
flagImage.src = flagImages[currentLanguage];
languageToggle.checked = currentLanguage === 'es_ES';

// Función para cambiar el idioma
const changeLanguage = (language) => {
  const textElements = document.querySelectorAll("[data-translate]");

  textElements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    const translation = translations[language][key];

    switch (element.tagName) {
      case "TEXTAREA":
        element.setAttribute("placeholder", translation);
        break;
      case "INPUT":
        element.setAttribute("placeholder", translation);
        if (element.type === "submit") {
          element.setAttribute("value", translation);
        }
        break;
      default:
        element.textContent = translation;
    }
  });
};

languageToggle.addEventListener('change', (event) => {
  if (event.target.checked) {
    // Cambiar a la bandera de inglés y actualizar el idioma de la página
    flagImage.src = flagImages['es_ES'];
    changeLanguage('es');
  } else {
    // Cambiar a la bandera de español y actualizar el idioma de la página
    flagImage.src = flagImages['en_US'];
    changeLanguage('en');
  }
});

// Establecer el idioma por defecto al cargar la página
changeLanguage(currentLanguage);
