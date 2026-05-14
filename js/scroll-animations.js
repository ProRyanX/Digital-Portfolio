/**
 * scroll-animations.js
 * Fade-in on scroll + mobile hamburger menu
 */
(function () {
  /* ---- Scroll fade-in ---- */
    const TARGETS = '.skill-group, .project-card, .lang-card, .edu-card, .hobby-card';
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateY(0)';
                observer.unobserve(e.target);
                }
            });
        },
        { threshold: 0.08 }
    );
    
    document.querySelectorAll(TARGETS).forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    /* ---- Mobile hamburger ---- */
    const toggle = document.getElementById('nav-toggle');
    const drawer = document.getElementById('nav-drawer');
    
    if (toggle && drawer) {
        toggle.addEventListener('click', () => {
            drawer.classList.toggle('open');
        });

        // Close drawer when a link is tapped
        drawer.querySelectorAll('a').forEach((a) => {
            a.addEventListener('click', () => drawer.classList.remove('open'));
        });

        // Close on outside tap
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !drawer.contains(e.target)) {
                drawer.classList.remove('open');
            }
        });
    }
})();
