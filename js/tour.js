// js/tour.js
document.addEventListener("DOMContentLoaded", () => {
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

  // Log if gallery images are missing
  if (!galleryImages.length) {
    console.error("%cError: No .gallery img elements found", "text-align: center; padding: 10px; background: #f8d7da; color: #721c24; border: 1px solid #721c24;");
  }
});