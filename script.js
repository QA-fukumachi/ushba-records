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
    const mobileLinks = document.querySelectorAll('.mobile-nav-links .nav-btn');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.style.overflow = 'auto';
        });
    });

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

    // 4. Optional: Add subtle parallax to the background video if needed 
    // (Disabled by default to keep high performance, but hook is here)
    /*
    const bgVideo = document.getElementById('bg-video');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        bgVideo.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.3}px))`;
    });
    */
});
