document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll(
            '.project-card, .skill-category, .about-content, ' +
            '.timeline-item, .contact-info, .contact-form'
        );
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize animation state
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-category, .about-content, ' +
        '.timeline-item, .contact-info, .contact-form'
    );
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run animations on page load
    animateOnScroll();
    
    // Run animations on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Video project play button hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const playButton = this.querySelector('.play-button');
            playButton.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            const playButton = this.querySelector('.play-button');
            playButton.style.opacity = '0';
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', formObject);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
            
            // You could add AJAX code here to actually submit the form
            /*
            fetch('your-server-endpoint', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert('Message sent successfully!');
                this.reset();
            })
            .catch(error => {
                alert('There was an error sending your message.');
            });
            */
        });
    }

    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    function animateTimeline() {
        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemPosition < windowHeight - 100) {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }
        });
    }

    // Initialize timeline items
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        if (index % 2 === 0) { // Even items (left side)
            item.style.transform = 'translateX(-30px)';
        } else { // Odd items (right side)
            item.style.transform = 'translateX(30px)';
        }
    });

    // Run timeline animation on load and scroll
    animateTimeline();
    window.addEventListener('scroll', animateTimeline);
});