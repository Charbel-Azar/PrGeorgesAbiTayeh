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
            /* Enhanced fade in animations with smooth transitions */
            .fade-in {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .fade-in.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Slide in from left with enhanced easing */
            .slide-left {
                opacity: 0;
                transform: translateX(-60px);
                transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .slide-left.animate {
                opacity: 1;
                transform: translateX(0);
            }
            
            /* Slide in from right with enhanced easing */
            .slide-right {
                opacity: 0;
                transform: translateX(60px);
                transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .slide-right.animate {
                opacity: 1;
                transform: translateX(0);
            }
            
            /* Slide in from up */
            .slide-up {
                opacity: 0;
                transform: translateY(40px);
                transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .slide-up.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Slide in from down */
            .slide-down {
                opacity: 0;
                transform: translateY(-40px);
                transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .slide-down.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Enhanced scale in animation */
            .scale-in {
                opacity: 0;
                transform: scale(0.8);
                transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .scale-in.animate {
                opacity: 1;
                transform: scale(1);
            }
            
            /* Enhanced stagger animation for cards */
            .stagger-item {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .stagger-item.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Stagger delays for sequential animations */
            .stagger-1 { transition-delay: 0.1s; }
            .stagger-2 { transition-delay: 0.2s; }
            .stagger-3 { transition-delay: 0.3s; }
            .stagger-4 { transition-delay: 0.4s; }
            .stagger-5 { transition-delay: 0.5s; }
            
            /* Floating animation for decorative elements */
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
            
            /* Enhanced pulse animation for buttons */
            .pulse-on-scroll {
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .pulse-on-scroll:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
            }
            
            /* Smooth hover effects for cards */
            .card {
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .card:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(0,0,0,0.15);
            }
            
            /* Respect user's motion preferences */
            @media (prefers-reduced-motion: reduce) {
                .fade-in, .slide-left, .slide-right, .slide-up, .slide-down, .scale-in, .stagger-item {
                    opacity: 1;
                    transform: none;
                    transition: none;
                }
            }
            
            /* Ensure animations work on mobile */
            @media (prefers-reduced-motion: no-preference) {
                .fade-in, .slide-left, .slide-right, .slide-up, .slide-down, .scale-in, .stagger-item {
                    will-change: transform, opacity;
                }
            }
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
        console.log('Initializing animations...');
        
        // Hero section animations
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            const heroTitle = heroSection.querySelector('h1');
            const heroSubtitle = heroSection.querySelector('p');
            const heroImage = heroSection.querySelector('img');
            const heroQuote = heroSection.querySelector('blockquote');
            const heroButton = heroSection.querySelector('.btn');
            
            if (heroTitle) heroTitle.classList.add('slide-in-down');
            if (heroSubtitle) heroSubtitle.classList.add('slide-in-up', 'stagger-1');
            if (heroImage) heroImage.classList.add('scale-in', 'stagger-2');
            if (heroQuote) heroQuote.classList.add('slide-in-up', 'stagger-3');
            if (heroButton) heroButton.classList.add('fade-in', 'stagger-4');
        }

        // Risk factors section
        const riskFactorsSection = document.querySelector('#risk-factors');
        if (riskFactorsSection) {
            const riskTitle = riskFactorsSection.querySelector('h2');
            const riskLead = riskFactorsSection.querySelector('.lead');
            const riskImage = riskFactorsSection.querySelector('img');
            const riskTabs = riskFactorsSection.querySelector('.tabs-container');
            
            if (riskTitle) riskTitle.classList.add('fade-in');
            if (riskLead) riskLead.classList.add('fade-in', 'stagger-1');
            if (riskImage) riskImage.classList.add('scale-in', 'stagger-2');
            if (riskTabs) {
                riskTabs.classList.add('slide-in-up', 'stagger-3');
                const tabButtons = riskTabs.querySelectorAll('.tab-button');
                const tabContents = riskTabs.querySelectorAll('.tab-content');
                
                tabButtons.forEach((button, index) => {
                    button.classList.add('stagger-item');
                });
                
                tabContents.forEach((content, index) => {
                    content.classList.add('stagger-item');
                });
            }
        }

        // Breast screening section
        const screeningSection = document.querySelector('#breast-screening');
        if (screeningSection) {
            const screeningTitle = screeningSection.querySelector('h2');
            const screeningLead = screeningSection.querySelector('.lead');
            const screeningImage = screeningSection.querySelector('img');
            const screeningCard = screeningSection.querySelector('.card');
            
            if (screeningTitle) screeningTitle.classList.add('fade-in');
            if (screeningLead) screeningLead.classList.add('fade-in', 'stagger-1');
            if (screeningImage) screeningImage.classList.add('scale-in', 'stagger-2');
            if (screeningCard) {
                screeningCard.classList.add('slide-in-up', 'stagger-3');
                const benefits = screeningCard.querySelectorAll('.grid > div');
                benefits.forEach((benefit, index) => {
                    benefit.classList.add('stagger-item');
                });
            }
        }

        // Screening recommendations section
        const recommendationsSection = document.querySelector('#screening-recommendations');
        if (recommendationsSection) {
            const recTitle = recommendationsSection.querySelector('h2');
            const recLead = recommendationsSection.querySelector('.lead');
            const recImage = recommendationsSection.querySelector('img');
            const recTabs = recommendationsSection.querySelector('.tabs-container');
            
            if (recTitle) recTitle.classList.add('fade-in');
            if (recLead) recLead.classList.add('fade-in', 'stagger-1');
            if (recImage) recImage.classList.add('scale-in', 'stagger-2');
            if (recTabs) {
                recTabs.classList.add('slide-in-up', 'stagger-3');
                const tabButtons = recTabs.querySelectorAll('.tab-button');
                const tabContents = recTabs.querySelectorAll('.tab-content');
                
                tabButtons.forEach((button, index) => {
                    button.classList.add('stagger-item');
                });
                
                tabContents.forEach((content, index) => {
                    content.classList.add('stagger-item');
                });
            }
        }

        // Signs and symptoms section
        const signsSection = document.querySelector('#signs-symptoms');
        if (signsSection) {
            const signsTitle = signsSection.querySelector('h2');
            const signsLead = signsSection.querySelector('.lead');
            const signsImage = signsSection.querySelector('img');
            const signsCard = signsSection.querySelector('.card');
            const signsForm = signsSection.querySelector('form');
            
            if (signsTitle) signsTitle.classList.add('fade-in');
            if (signsLead) signsLead.classList.add('fade-in', 'stagger-1');
            if (signsImage) signsImage.classList.add('scale-in', 'stagger-2');
            if (signsCard) {
                signsCard.classList.add('slide-in-up', 'stagger-3');
                const symptoms = signsCard.querySelectorAll('.grid > div');
                symptoms.forEach((symptom, index) => {
                    symptom.classList.add('stagger-item');
                });
            }
            if (signsForm) signsForm.classList.add('fade-in', 'stagger-4');
        }

        // MyHealthScore section
        const myHealthScoreSection = document.querySelector('#genetics-title')?.closest('section');
        if (myHealthScoreSection) {
            const healthTitle = myHealthScoreSection.querySelector('h2');
            const healthContent = myHealthScoreSection.querySelector('p');
            const healthButtons = myHealthScoreSection.querySelectorAll('.btn');
            
            if (healthTitle) healthTitle.classList.add('fade-in');
            if (healthContent) healthContent.classList.add('fade-in', 'stagger-1');
            healthButtons.forEach((button, index) => {
                button.classList.add('stagger-item');
            });
        }

        // Add floating animation to decorative elements
        const floatingElements = document.querySelectorAll('.fa-solid.fa-heart, .fa-solid.fa-shield-heart, .fa-solid.fa-stethoscope');
        floatingElements.forEach(element => {
            element.classList.add('floating');
        });

        // Add pulse animation to buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.classList.add('pulse-on-scroll');
        });

        // Add hover effects to cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.add('card');
        });

        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down, .scale-in, .stagger-container, .stagger-item');
        animatedElements.forEach(el => observer.observe(el));
        
        console.log(`Total animated elements: ${animatedElements.length}`);
        console.log('Animations initialized successfully!');
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
