document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.carousel-dot');
    let current = 0;
    let sliding = false;

    function showSlide(next) {
        if (sliding || next === current) return;
        sliding = true;
        images[current].classList.add('slide-out');
        images[next].classList.add('slide-in');
        dots[current].classList.remove('active');
        dots[next].classList.add('active');
        setTimeout(() => {
            images[current].classList.remove('active', 'slide-out');
            images[next].classList.remove('slide-in');
            images[next].classList.add('active');
            current = next;
            sliding = false;
        }, 1000);
    }

    images[current].classList.add('active');
    dots[current].classList.add('active');

    setInterval(() => {
        let next = (current + 1) % images.length;
        showSlide(next);
    }, 4000);

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showSlide(idx);
        });
    });
});
