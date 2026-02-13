// Personal Profile Website - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll to contact section
  const contactBtn = document.getElementById('contact-btn');
  const connectSection = document.getElementById('connect');

  if (contactBtn && connectSection) {
    contactBtn.addEventListener('click', function(e) {
      e.preventDefault();
      connectSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  // GitHub button - open in new tab
  const githubBtn = document.getElementById('github-btn');
  const githubUrl = 'https://github.com/ghdtjrgns321-creator/Digital-Audit-Portfolio';

  if (githubBtn) {
    githubBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // Optional: Fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe contact items for fade-in effect
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
  });
});
