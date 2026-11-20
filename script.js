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

// Dark mode toggle: the button flips data-theme on <html> between
// "light" and "dark", and the choice is saved so it stays after reload.
const themeToggle = document.querySelector("#theme-toggle");

function updateThemeButton() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

themeToggle.addEventListener("click", function () {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const nextTheme = isDark ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("arcos-theme", nextTheme);
  updateThemeButton();
});

// Set the button (sun/moon icon and label) to match the theme on load.
updateThemeButton();
