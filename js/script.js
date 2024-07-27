// Mobile Menu Toggle
const navbarToggleButton = document.querySelector(".nav .mobile-menu #navbar-toggle");
const mobileMenuLinks = document.querySelector(".nav .mobile-menu .mobile-menu-links");

navbarToggleButton.addEventListener("click", () => {
  mobileMenuLinks.classList.toggle("active")
});

// Navbar opacity based on scroll
const navbar = document.querySelector("nav.nav");
window.addEventListener("scroll", () => {
  window.scrollY > 0 ?
    navbar.classList.add("scroll") :
    navbar.classList.remove("scroll");
});