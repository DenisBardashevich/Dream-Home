window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.style.backgroundColor = 'rgba(34, 34, 34, 0.9)';
    } else {
        header.style.backgroundColor = 'rgba(34, 34, 34, 1)';
    }
});