// Accordion functionality
document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
        const item = header.parentElement;
        item.classList.toggle("active");
    });
});

// Testimonial carousel functionality
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".carousel-dot");
let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));
    slides[n].classList.add("active");
    dots[n].classList.add("active");
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto advance slides
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 4000);

// Featured products display
function displayFeaturedProducts() {
    const pizzaSection = document.querySelector("#pizza .menu-grid");
    const burgerSection = document.querySelector("#hamburguesas .menu-grid");

    const pizzas = getProductsByCategory("pizzas").slice(0, 3);
    const burgers = getProductsByCategory("hamburguesas").slice(0, 3);

    if (pizzas.length >= 3 && burgers.length >= 3) {
        pizzaSection.innerHTML = pizzas.map(pizza => `
            <div class="menu-card${pizza.id === 8 ? ' special-offer' : ''}">
                ${pizza.id === 8 ? '<div class="offer-badge">¡NUEVO!</div>' : ''}
                <img src="${pizza.image}" alt="${pizza.name}">
                <div class="menu-card-content">
                    <h3>${pizza.name}</h3>
                    <p>${pizza.description}</p>
                    <span class="price-tag">${pizza.price}</span>
                </div>
            </div>
        `).join('');

        burgerSection.innerHTML = burgers.map(burger => `
            <div class="menu-card">
                <img src="${burger.image}" alt="${burger.name}">
                <div class="menu-card-content">
                    <h3>${burger.name}</h3>
                    <p>${burger.description}</p>
                    <span class="price-tag">${burger.price}</span>
                </div>
            </div>
        `).join('');
    }
}

// Initialize featured products when DOM is loaded
document.addEventListener('DOMContentLoaded', displayFeaturedProducts);
