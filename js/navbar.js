document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.querySelector(".navbar-container");
  if (!navbarContainer) {
    console.error("%cError: .navbar-container element not found in the DOM", "text-align: center; padding: 10px; background: #f8d7da; color: #721c24; border: 1px solid #721c24;");
    return;
  }
  fetch("/navbar.html")
    .then(response => {
      if (!response.ok) throw new Error(`Failed to fetch navbar.html: ${response.status}`);
      return response.text();
    })
    .then(data => {
      navbarContainer.innerHTML = data;
      const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
      const mobileMenu = document.querySelector(".navbar .mobile-menu-items");
      if (toggleButton && mobileMenu) {
        mobileMenu.style.transform = "translateX(300%)";
        // mobileMenu.style.visibility = "hidden";
        toggleButton.addEventListener("click", () => {
          mobileMenu.classList.toggle("active");
          document.body.classList.toggle("menu-active");
        });
      } else {
        console.error("%cError: Mobile menu toggle or items not found", "text-align: center; padding: 10px; background: #f8d7da; color: #721c24; border: 1px solid #721c24;");
      }
    })
    .catch(error => console.error("%cError loading navbar: %s", "text-align: center; padding: 10px; background: #f8d7da; color: #721c24; border: 1px solid #721c24;", error));
});