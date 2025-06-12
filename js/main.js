// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.borderBottom = '1px solid rgba(255, 59, 59, 0.2)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación para los tech items
const techItems = document.querySelectorAll('.tech-item');
techItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica para enviar el formulario
        const formData = new FormData(this);
        const formObject = Object.fromEntries(formData);
        
        // Por ahora solo mostraremos un mensaje de éxito
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        this.reset();
    });
}

// Intersection Observer para animaciones al hacer scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

// Animación para las cards de proyectos
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    projectObserver.observe(card);
});

// Animación para las categorías de habilidades
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category').forEach((category, index) => {
    category.style.opacity = '0';
    category.style.transform = 'translateX(-20px)';
    category.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    category.style.transitionDelay = `${index * 0.2}s`;
    skillObserver.observe(category);
});

// Efecto hover para los items de tecnología
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-10px) rotate(10deg)';
    });
    
    item.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0) rotate(0)';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}); 