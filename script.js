// JavaScript for form validation or interactivity can be added here
console.log("Welcome to Arwa's portfolio!");

// Scroll animations
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.about-section, .projects-section, .contact-section');
    let windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        let position = element.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});
