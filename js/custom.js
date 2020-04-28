//
$(document).ready(function () {
  $("#fullpage").fullpage({
    verticalCentered: false,
    scrollingSpeed: 600,
    autoScrolling: false,
    css3: true,
    navigation: true,
    navigationPosition: "right",
  });
});

const navbar = document.getElementById("navbar");
const navbarPosition = 1000;

console.log(navbar);
console.log(navbarPosition);

// wow
$(function () {
  new WOW().init();
  $(".rotate").textrotator();
});

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (window.pageYOffset > navbarPosition) {
    navbar.classList.add("navbar-fixed-top");
    navbar.classList.toggle("hidden");

    // navbar.classList.toggle("transition");
  }
  if (window.pageYOffset < navbarPosition) {
    navbar.classList.remove("navbar-fixed-top");
    navbar.classList.toggle("hidden");
    // navbar.classList.toggle("transition");
  }
}
