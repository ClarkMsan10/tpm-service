document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const body = document.body;
    // Ajout dynamique de l'overlay si absent
    let blurOverlay = document.getElementById('blurOverlay');
    if (!blurOverlay) {
        blurOverlay = document.createElement('div');
        blurOverlay.className = 'blur-overlay hide';
        blurOverlay.id = 'blurOverlay';
        document.body.appendChild(blurOverlay);
    }
    function openMenu() {
        navLinks.classList.remove('closing');
        navLinks.classList.add('open');
        navToggle.classList.add('active');
        blurOverlay.classList.remove('hide');
        body.classList.add('menu-open');
    }
    function closeMenu() {
        navLinks.classList.remove('open');
        navLinks.classList.add('closing');
        navToggle.classList.remove('active');
        blurOverlay.classList.add('hide');
        body.classList.remove('menu-open');
        // Attendre la fin de l'animation avant de cacher le menu
        setTimeout(() => {
            navLinks.classList.remove('closing');
        }, 500); // Durée de l'animation slideUpNav
    }
    navToggle.addEventListener('click', function () {
        if (navLinks.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    // Fermer le menu si on clique sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    // Fermer le menu si on clique sur l'overlay
    blurOverlay.addEventListener('click', closeMenu);
});
