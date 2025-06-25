function animateCounter(element, target) {
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        element.textContent = value;
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    requestAnimationFrame(update);
}

function handleStatsAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    let triggered = false;
    function onScroll() {
        const section = document.querySelector('.stats-section');
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (!triggered && rect.top < window.innerHeight && rect.bottom > 0) {
            stats.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'), 10);
                animateCounter(stat, target);
            });
            triggered = true;
            window.removeEventListener('scroll', onScroll);
        }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
}

document.addEventListener('DOMContentLoaded', handleStatsAnimation);
