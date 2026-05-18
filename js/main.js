document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------
     Active nav link
  -------------------------------------------------- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* --------------------------------------------------
     Mobile menu toggle
  -------------------------------------------------- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });

    document.addEventListener('click', e => {
      if (!e.target.closest('.nav')) {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  }

  /* --------------------------------------------------
     Scroll fade-in animation
  -------------------------------------------------- */
  const fadeTargets = document.querySelectorAll('.fade-up');
  if (fadeTargets.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    fadeTargets.forEach(el => observer.observe(el));
  }

  /* --------------------------------------------------
     Staggered card animation
  -------------------------------------------------- */
  document.querySelectorAll('.projects-grid').forEach(grid => {
    grid.querySelectorAll('.project-card').forEach((card, i) => {
      card.style.transitionDelay = `${i * 60}ms`;
    });
  });

});
