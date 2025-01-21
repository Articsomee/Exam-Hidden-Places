// Toggle Burger Menu
const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.getElementById("nav-links");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Like functionality for the white hearts
const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("liked"); // Add/remove 'liked' class
  });
});

const EventheartButtons = document.querySelectorAll(".event-heart-btn");

EventheartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("liked"); // For the events page
  });
});

// Map
document.querySelector("iframe").addEventListener("click", () => {
  console.log("Map clicked!");
});

//Like functionality for the orange hearts
const OrangeHeartButtons = document.querySelectorAll(".o-heart-btn");

OrangeHeartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("liked"); // Toggle the 'liked' class
  });
});

//Cards switch
document.addEventListener("DOMContentLoaded", () => {
  const categoryLinks = document.querySelectorAll(".category-link");
  const foodCards = document.querySelectorAll(".food-card");

  categoryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      // Remove 'active' class from all category links
      categoryLinks.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the clicked link
      link.classList.add("active");

      // Get the selected category
      const selectedCategory = link.getAttribute("data-category");

      // Show/hide cards based on the selected category
      foodCards.forEach((card) => {
        if (
          selectedCategory === "all" ||
          card.getAttribute("data-category") === selectedCategory
        ) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
