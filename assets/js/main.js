const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav_menu");
const darkModeToggle = document.querySelector(".dark-mode-toggle");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
