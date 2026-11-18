// The Menu button only shows on small screens (see style.css).
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", function () {
  // is-open is the class that shows the links
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

// After a tap on a link, hide the menu again.
const links = nav.querySelectorAll("a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Keep the year in the footer up to date.
document.querySelector("#year").textContent = new Date().getFullYear();
