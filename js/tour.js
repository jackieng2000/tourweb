// js/tour.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  const date = document.getElementById("date");
  if (date) date.innerHTML = new Date().getFullYear();

  // Hero background cycle
  const hero = document.getElementById('hero');
  const images = [
    'img/tour1-01.jpeg',
    'img/tour2-01.jpeg',
    'img/tour3-01.jpeg',
    'img/tour4-01.jpeg'
  ];
  let current = 0;
  function cycleBackground() {
    hero.style.background = `url(${images[current]}) center/cover no-repeat`;
    hero.style.transition = 'background 1s ease'; // fade via opacity or CSS
    current = (current + 1) % images.length;
  }
  cycleBackground();
  setInterval(cycleBackground, 5000);

  // Lightbox functionality for tour pages
  const galleryImages = document.querySelectorAll('.gallery img');
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  document.body.appendChild(lightbox);

  galleryImages.forEach(img => {
    img.addEventListener('click', e => {
      lightbox.style.display = 'block';
      const newImg = document.createElement('img');
      newImg.src = img.src;
      newImg.className = 'lightbox-content';
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(newImg);
    });
  });

  lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.style.display = 'none';
  });
});