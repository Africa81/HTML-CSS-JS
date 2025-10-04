document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Simple Form Submission Handling (Simulates success, as there is no backend)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // In a real application, you would send this data to a server here.
            
            // Simple success alert
            alert('Message Sent Successfully! We appreciate your interest and will get back to you soon.');
            
            // Clear the form fields
            contactForm.reset();
        });
    }

    // 3. CTA button click event (directs to locations)
    document.querySelectorAll('.main-cta, .nav-cta').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById('locations').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});