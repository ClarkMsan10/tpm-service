document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.testimonials-carousel .testimonial-card');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let current = 0;

    function showCard(idx) {
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === idx);
            card.style.zIndex = i === idx ? 2 : 1;
        });
    }

    function goToPrev() {
        current = (current - 1 + cards.length) % cards.length;
        showCard(current);
    }
    function goToNext() {
        current = (current + 1) % cards.length;
        showCard(current);
    }

    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);

    // Swipe mobile
    let startX = null;
    const carousel = document.querySelector('.testimonials-carousel');
    carousel.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });
    carousel.addEventListener('touchend', e => {
        if (startX === null) return;
        let endX = e.changedTouches[0].clientX;
        if (endX - startX > 40) goToPrev();
        else if (startX - endX > 40) goToNext();
        startX = null;
    });

    // Initial state
    showCard(current);
});
