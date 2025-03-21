const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
hamburger.addEventListener("click", function (event) {
  navMenu.classList.toggle("opacity-100");
  navMenu.classList.toggle("invisible");
  event.stopPropagation();
});

window.addEventListener("click", function (e) {
  if (e.target != navMenu) {
    navMenu.classList.remove("opacity-100");
    setTimeout(() => {
      navMenu.classList.add("invisible");
    }, 500);
  }
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
  }
};

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    moon.classList.remove("hidden");
    sun.classList.add("hidden");
  } else {
    html.classList.remove("dark");
    sun.classList.remove("hidden");
    moon.classList.add("hidden");
  }
});
