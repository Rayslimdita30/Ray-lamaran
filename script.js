const revealElements = document.querySelectorAll(
    ".photo-wrapper, .sidebar-section, .cv-header, .main-section, .cv-footer"
);

if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("motion-enabled");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach((element, index) => {
        element.classList.add("reveal");
        element.style.setProperty(
            "--reveal-delay",
            `${Math.min(index * 55, 330)}ms`
        );
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("is-visible");
    });
}
