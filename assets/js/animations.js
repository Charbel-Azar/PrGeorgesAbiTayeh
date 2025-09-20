// Smooth Scroll Animations
(function() {
    'use strict';

    // Animation configuration
    const ANIMATION_CONFIG = {
        duration: 800,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // CSS for animations
    const animationCSS = `
        <style id="scroll-animations">
            /* Fade in animations */
            .fade-in {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .fade-in.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Slide in from left */
            .slide-left {
                opacity: 0;
                transform: translateX(-50px);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .slide-left.animate {
                opacity: 1;
                transform: translateX(0);
            }
            
            /* Slide in from right */
            .slide-right {
                opacity: 0;
                transform: translateX(50px);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .slide-right.animate {
                opacity: 1;
                transform: translateX(0);
            }
            
            /* Scale in animation */
            .scale-in {
                opacity: 0;
                transform: scale(0.8);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .scale-in.animate {
                opacity: 1;
                transform: scale(1);
            }
            
            /* Stagger animation for cards */
            .stagger-item {
                opacity: 0;
                transform: translateY(15px);
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .stagger-item.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Hero text animation - removed to prevent conflict with CSS animations */
            
            /* Floating animation for ribbons */
            .floating {
                animation: floating 3s ease-in-out infinite;
            }
            
            @keyframes floating {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-10px);
                }
            }
            
            /* Pulse animation for buttons */
            .pulse-on-scroll {
                transition: all 0.3s ease;
            }
            
            .pulse-on-scroll:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 30px rgba(255, 77, 166, 0.3);
            }
            
            /* Gradient animation removed to prevent conflict with existing CSS */
        </style>
    `;

    // Add CSS to head
    document.head.insertAdjacentHTML('beforeend', animationCSS);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Handle stagger animations
                if (entry.target.classList.contains('stagger-container')) {
                    const items = entry.target.querySelectorAll('.stagger-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 150);
                    });
                }
            }
        });
    }, {
        threshold: ANIMATION_CONFIG.threshold,
        rootMargin: ANIMATION_CONFIG.rootMargin
    });

    // Apply animations to elements
    function initAnimations() {
        // Hero section - removed JavaScript animations to prevent conflict with CSS animations

        // Hero gradient animation removed to prevent conflict with existing CSS animations

        // Doctor section - more subtle animation
        const doctorSection = document.querySelector('#doctor');
        if (doctorSection) {
            const doctorTitle = doctorSection.querySelector('h2');
            const doctorLead = doctorSection.querySelector('.lead');
            const doctorGrid = doctorSection.querySelector('.grid');
            
            if (doctorTitle) doctorTitle.classList.add('fade-in');
            if (doctorLead) doctorLead.classList.add('fade-in');
            if (doctorGrid) {
                doctorGrid.classList.add('stagger-container');
                const cards = doctorGrid.querySelectorAll('.card');
                cards.forEach(card => {
                    card.classList.add('stagger-item');
                });
            }
        }

        // Age guide section
        const ageGuide = document.querySelector('#age-guide');
        if (ageGuide) {
            const ageTitle = ageGuide.querySelector('h2');
            const ageLead = ageGuide.querySelector('.lead');
            const ageGrid = ageGuide.querySelector('.grid');
            
            if (ageTitle) ageTitle.classList.add('fade-in');
            if (ageLead) ageLead.classList.add('fade-in');
            if (ageGrid) {
                ageGrid.classList.add('stagger-container');
                const cards = ageGrid.querySelectorAll('.card');
                cards.forEach(card => {
                    card.classList.add('stagger-item');
                });
            }
        }

        // Prevention tips section
        const preventionSection = document.querySelector('#prevention-title')?.closest('section');
        if (preventionSection) {
            const preventionTitle = preventionSection.querySelector('h2');
            const preventionLead = preventionSection.querySelector('.lead');
            const preventionGrid = preventionSection.querySelector('.grid');
            
            if (preventionTitle) preventionTitle.classList.add('fade-in');
            if (preventionLead) preventionLead.classList.add('fade-in');
            if (preventionGrid) {
                preventionGrid.classList.add('stagger-container');
                const cards = preventionGrid.querySelectorAll('.card');
                cards.forEach(card => {
                    card.classList.add('stagger-item');
                });
            }
        }

        // FAQ section
        const faqSection = document.querySelector('#faq-title')?.closest('section');
        if (faqSection) {
            const faqTitle = faqSection.querySelector('h2');
            const faqContainer = faqSection.querySelector('.faq-container');
            
            if (faqTitle) faqTitle.classList.add('fade-in');
            if (faqContainer) {
                faqContainer.classList.add('stagger-container');
                const faqItems = faqContainer.querySelectorAll('.faq-item');
                faqItems.forEach(item => {
                    item.classList.add('stagger-item');
                });
            }
        }

        // Myth vs Fact section
        const mythFactSection = document.querySelector('#myth-fact-title')?.closest('section');
        if (mythFactSection) {
            const mythFactTitle = mythFactSection.querySelector('h2');
            const mythFactLead = mythFactSection.querySelector('.lead');
            const mythFactContainer = mythFactSection.querySelector('.myth-fact-container');
            
            if (mythFactTitle) mythFactTitle.classList.add('fade-in');
            if (mythFactLead) mythFactLead.classList.add('fade-in');
            if (mythFactContainer) {
                mythFactContainer.classList.add('stagger-container');
                const cards = mythFactContainer.querySelectorAll('.myth-card, .fact-card');
                cards.forEach(card => {
                    card.classList.add('stagger-item');
                });
            }
        }

        // Add floating animation to ribbons
        const ribbons = document.querySelectorAll('.fa-solid.fa-ribbon');
        ribbons.forEach(ribbon => {
            ribbon.classList.add('floating');
        });

        // Add pulse animation to buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.classList.add('pulse-on-scroll');
        });

        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in, .stagger-container');
        animatedElements.forEach(el => observer.observe(el));
    }

    // Smooth scroll for anchor links
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Removed parallax effect to prevent overlapping issues
    function initParallax() {
        // Parallax removed for better scroll experience
    }

    // Initialize all animations when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initAnimations();
            initSmoothScroll();
            initParallax();
        });
    } else {
        initAnimations();
        initSmoothScroll();
        initParallax();
    }

})();
