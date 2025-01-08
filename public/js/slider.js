document.querySelector('.img-slider').insertAdjacentHTML('beforeend', `
    <div class="slider-nav"></div>
    <button class="slider-arrow prev" aria-label="Previous slide">←</button>
    <button class="slider-arrow next" aria-label="Next slide">→</button>
`);

class ImageSlider {
    constructor(element) {
        this.slider = element;
        this.slides = Array.from(this.slider.querySelectorAll('.slider__item'));
        this.navButtons = this.createNavButtons();
        this.currentSlide = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000; // 5 seconds

        // Initialize
        this.initializeSlider();
        this.setupEventListeners();
        this.startAutoplay();
    }

    createNavButtons() {
        const nav = this.slider.querySelector('.slider-nav');
        return this.slides.map((_, index) => {
            const button = document.createElement('button');
            button.setAttribute('aria-label', `Go to slide ${index + 1}`);
            nav.appendChild(button);
            return button;
        });
    }

    initializeSlider() {
        this.slides[0].classList.add('active');
        this.navButtons[0].classList.add('active');
    }

    setupEventListeners() {
        // Navigation dots
        this.navButtons.forEach((button, index) => {
            button.addEventListener('click', () => this.goToSlide(index));
        });

        // Arrow navigation
        this.slider.querySelector('.prev').addEventListener('click', () => this.prevSlide());
        this.slider.querySelector('.next').addEventListener('click', () => this.nextSlide());

        // Pause autoplay on hover
        this.slider.addEventListener('mouseenter', () => this.pauseAutoplay());
        this.slider.addEventListener('mouseleave', () => this.startAutoplay());

        // Touch events for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        this.slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                this.nextSlide();
            } else if (touchEndX - touchStartX > 50) {
                this.prevSlide();
            }
        });
    }

    goToSlide(index) {
        // Remove active classes
        this.slides[this.currentSlide].classList.remove('active');
        this.navButtons[this.currentSlide].classList.remove('active');

        // Update current slide
        this.currentSlide = index;

        // Add active classes to new slide
        this.slides[this.currentSlide].classList.add('active');
        this.navButtons[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }

    startAutoplay() {
        if (this.autoplayInterval) return;
        this.autoplayInterval = setInterval(() => this.nextSlide(), this.autoplayDelay);
    }

    pauseAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// Initialize the slider
const slider = new ImageSlider(document.querySelector('.img-slider'));