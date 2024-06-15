document.addEventListener('scroll', function() {
    const heroSection = document.getElementById('hero');
    const scrollPosition = window.scrollY;

    if (scrollPosition > window.innerHeight / 2) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(-50px)';
    } else {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
});

