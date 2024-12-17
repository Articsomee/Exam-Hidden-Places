// Toggle Burger Menu
const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.getElementById("nav-links");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Like functionality for hearts
const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("liked"); // Add/remove 'liked' class
  });
});

//----------------------------------//
