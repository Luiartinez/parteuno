document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar el carrusel
    var carouselElement = document.querySelector('#projectCarousel');

    // Verificar si el carrusel existe
    if (!carouselElement) {
        console.warn('El elemento del carrusel no fue encontrado.');
        return;
    }

    // Inicializar el carrusel con opciones
    var carouselInstance = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Cambio automático cada 3 segundos
        wrap: true     // Permitir que el carrusel vuelva al inicio
    });

    // Pausar el carrusel al pasar el cursor por encima
    function pauseCarousel() {
        carouselInstance.pause();
    }

    // Reanudar el carrusel al retirar el cursor
    function resumeCarousel() {
        carouselInstance.cycle();
    }

    // Asignar eventos de pausa y reanudación
    carouselElement.addEventListener('mouseenter', pauseCarousel);
    carouselElement.addEventListener('mouseleave', resumeCarousel);
});
