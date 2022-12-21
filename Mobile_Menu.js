//grab icons
const hamburgerIcon = document.querySelector(".js-hamburger-icon");
const closeIcon = document.querySelector(".js-close-icon");
const iconContainer = document.querySelector(".js-mobile-nav-icon-container");

//grab mobile nav
const mobileNav = document.querySelector(".js-nav-mobile");

//listen for click on icon

iconContainer.addEventListener("click", (e) => {
  iconContainer.classList.toggle("isOpen");
});

//toggle class based on menu open close state
