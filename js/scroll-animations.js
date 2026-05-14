/**
 * scroll-animations.js
 * Fade-in on scroll for cards and groups
 */
(function () {
    const TARGETS = '.skill-group, .project-card, .lang-card, .edu-card, .hobby-card';

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                    observer.unobserve(e.target); // animate once
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll(TARGETS).forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
})();
