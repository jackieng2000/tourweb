// footer.js
document.addEventListener("DOMContentLoaded", () => {
  // Fetch footer.html and insert it into the footer-container
  fetch("/footer.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector(".footer-container").innerHTML = data;
      // Update the year dynamically
      document.getElementById("date").innerHTML = new Date().getFullYear();
    })
    .catch(error => console.error("Error loading footer:", error));
});
