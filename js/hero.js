// js/hero.js
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById('hero');
  const images = [
    'img/tour1-01.jpg',
    'img/tour2-01.jpg',
    'img/tour3-01.jpg',
    'img/tour4-01.jpg'
  ];
  let current = 0;
  function cycleBackground() {
    if (hero) {
      hero.style.background = `url(${images[current]}) center/cover no-repeat`;
      hero.style.transition = 'background 1s ease';
      current = (current + 1) % images.length;
    } else {
      console.error("%cError: #hero element not found", "text-align: center; padding: 10px; background: #f8d7da; color: #721c24; border: 1px solid #721c24;");
    }
  }
  cycleBackground();
  setInterval(cycleBackground, 3000);
});