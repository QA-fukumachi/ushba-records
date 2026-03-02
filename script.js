document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar scroll effect - add glassmorphism when scrolling down
    const nav = document.querySelector('.top-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Prevent scrolling when menu is open
        if (mobileMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = document.querySelectorAll('.mobile-nav-links .nav-btn:not(.has-dropdown), .mobile-dropdown-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.style.overflow = 'auto';
        });
    });

    // Mobile Dropdown Toggle (About)
    const mobileAboutBtn = document.querySelector('.mobile-about-btn');
    const mobileDropdownContent = document.querySelector('.mobile-dropdown-content');

    if (mobileAboutBtn && mobileDropdownContent) {
        mobileAboutBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent closing immediately
            const icon = mobileAboutBtn.querySelector('.nav-dropdown-icon');
            mobileDropdownContent.classList.toggle('open');
            if (mobileDropdownContent.classList.contains('open')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    }

    // 3. Dropdown Toggle for Releases
    const releaseToggle = document.getElementById('ushba001-toggle');
    const releaseContent = document.getElementById('ushba001-content');

    if (releaseToggle && releaseContent) {
        releaseToggle.addEventListener('click', () => {
            const isExpanded = releaseToggle.getAttribute('aria-expanded') === 'true';

            // Toggle State
            releaseToggle.classList.toggle('active');
            releaseContent.classList.toggle('open');
            releaseToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // 4. Dropdown Toggle for Photographer Bio
    const photographerToggle = document.getElementById('photographer-toggle');
    const photographerContent = document.getElementById('photographer-content');

    if (photographerToggle && photographerContent) {
        photographerToggle.addEventListener('click', () => {
            const isExpanded = photographerToggle.getAttribute('aria-expanded') === 'true';

            // Toggle State
            photographerToggle.classList.toggle('active');
            photographerContent.classList.toggle('open');
            photographerToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // 5. Optional: Add subtle parallax to the background video if needed 
    // (Disabled by default to keep high performance, but hook is here)
    /*
    const bgVideo = document.getElementById('bg-video');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        bgVideo.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.3}px))`;
    });
    */

    // 5. Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    // Optional: stop observing once in-view
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.image-wrapper');
        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        const animatedElements = document.querySelectorAll('.image-wrapper');
        animatedElements.forEach(el => el.classList.add('in-view'));
    }
});
