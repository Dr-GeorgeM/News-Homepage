// Select necessary elements
const navBarSide = document.querySelector(".navBarSide");
const clickedNavBarSide = document.querySelector(".clicked-navBar");
const overlay = document.querySelector(".overlay");

// Add event listener to navBarSide
navBarSide.addEventListener("click", function() {
  // Show clickedNavBarSide and overlay with a class of "active"
  clickedNavBarSide.classList.add("active");
  overlay.classList.add("active");
});
