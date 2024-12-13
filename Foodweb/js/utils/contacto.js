// Accordion functionality
const initAccordion = () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            item.classList.toggle("active");

            // Close other accordion items
            const allItems = document.querySelectorAll(".accordion-item");
            allItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });
};

// Chat carousel functionality
const initChatCarousel = () => {
    const chatSlides = document.querySelectorAll('.chat-slide');
    const chatDots = document.querySelectorAll('.chat-dot');
    let currentChatSlide = 0;

    const showChatSlide = (n) => {
        chatSlides.forEach(slide => slide.classList.remove('active'));
        chatDots.forEach(dot => dot.classList.remove('active'));
        chatSlides[n].classList.add('active');
        chatDots[n].classList.add('active');
    };

    chatDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentChatSlide = index;
            showChatSlide(currentChatSlide);
        });
    });

    // Auto-rotation every 5 seconds
    setInterval(() => {
        currentChatSlide = (currentChatSlide + 1) % chatSlides.length;
        showChatSlide(currentChatSlide);
    }, 5000);
};

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    initChatCarousel();
});
