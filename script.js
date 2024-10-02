const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Configurar el slider
slider.style.width = `${slideCount * 100}%`;

// Función para mover el slider
const moveToSlide = (index) => {
    if (index < 0) {
        slideIndex = slideCount - 1;
    } else if (index >= slideCount) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }
    slider.style.transform = `translateX(-${slideIndex * 100 / slideCount}%)`;
};

// Event listeners para los botones
prevButton.addEventListener('click', () => moveToSlide(slideIndex - 1));
nextButton.addEventListener('click', () => moveToSlide(slideIndex + 1));

// Cambio automático de diapositivas cada 5 segundos
setInterval(() => moveToSlide(slideIndex + 1), 5000);