// Navbar scroll functionality
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('.hero');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  // Mobile menu toggle functionality
  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });

    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });

    // Also close mobile menu for new menu-btn scroll-link buttons
    document.querySelectorAll('.menu-btn.primary.scroll-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && mobileNav.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    // Close mobile menu on window resize if screen becomes large
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
  
  // Smooth scroll functionality for About Us button
  const scrollLinks = document.querySelectorAll('.scroll-link');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get target from href attribute or data-target attribute
      const targetId = this.getAttribute('href') || this.getAttribute('data-target');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Hide navbar when scrolling past video background
  if (navbar && heroSection) {
    window.addEventListener('scroll', () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      
      if (heroBottom <= 0) {
        // Video is no longer visible - hide navbar
        navbar.classList.add('navbar-hidden');
      } else {
        // Video is still visible - show navbar
        navbar.classList.remove('navbar-hidden');
      }
    });
  }
});
  