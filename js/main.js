/**
 * The Lee Company Japan - Main JavaScript
 */

(function() {
  'use strict';

  // ========================================
  // Mobile Menu Toggle
  // ========================================
  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function() {
      const isActive = this.classList.toggle('is-active');
      nav.classList.toggle('is-active');
      this.setAttribute('aria-expanded', isActive);

      // Prevent body scroll when menu is open
      document.body.style.overflow = isActive ? 'hidden' : '';
    });
  }

  // ========================================
  // Mobile Dropdown Toggle
  // ========================================
  function initMobileDropdowns() {
    const dropdownItems = document.querySelectorAll('.main-nav__item');

    dropdownItems.forEach(function(item) {
      const link = item.querySelector('.main-nav__link--has-dropdown');

      if (!link) return;

      link.addEventListener('click', function(e) {
        // Only toggle on mobile
        if (window.innerWidth <= 992) {
          e.preventDefault();
          item.classList.toggle('is-open');
        }
      });
    });
  }

  // ========================================
  // Close mobile menu on resize
  // ========================================
  function initResizeHandler() {
    let resizeTimer;

    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth > 992) {
          const toggle = document.querySelector('.mobile-menu-toggle');
          const nav = document.querySelector('.main-nav');
          const openItems = document.querySelectorAll('.main-nav__item.is-open');

          if (toggle) {
            toggle.classList.remove('is-active');
            toggle.setAttribute('aria-expanded', 'false');
          }
          if (nav) {
            nav.classList.remove('is-active');
          }
          openItems.forEach(function(item) {
            item.classList.remove('is-open');
          });
          document.body.style.overflow = '';
        }
      }, 250);
    });
  }

  // ========================================
  // Header scroll effect (optional)
  // ========================================
  function initScrollEffect() {
    const header = document.querySelector('.main-header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // ========================================
  // Initialize
  // ========================================
  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initMobileDropdowns();
    initResizeHandler();
    initScrollEffect();
  });

})();
