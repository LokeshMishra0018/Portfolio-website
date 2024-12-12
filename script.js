const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const openMenuButton = document.querySelector("#open-menu-button");
const closeMenuButton = document.querySelector("#close-menu-button");

openMenuButton.addEventListener("click", () => {
  // Toggle Mobile Menu Visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close Menu when the close button is clicked
closeMenuButton.addEventListener("click", () => openMenuButton.click());

// Close Menu when the nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => openMenuButton.click());
});

document.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav-bar");
  if (window.scrollY > 5) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

/* Swiper JS */
const swiper = new Swiper(".testimonial-wrapper", {
  // Optional parameters
  loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
