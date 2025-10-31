// Configuración de Tailwind
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#1173d4",
                "background-light": "#f6f7f8",
                "background-dark": "#101922",
            },
            fontFamily: {
                display: ["Space Grotesk", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px",
            },
        },
    },
};




// Carrusel simple de proyectos
const carousel = document.getElementById('carousel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;
const total = carousel.children.length;

function updateCarousel() {
    const width = carousel.children[0].offsetWidth + 32; // ancho + gap
    carousel.style.transform = `translateX(-${index * width}px)`;
}

prev.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    updateCarousel();
});

next.addEventListener('click', () => {
    index = (index + 1) % total;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);

