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
const navbarPositionStart = 650;
const navbarPositionEnd = 850;

console.log(navbar);

// wow
$(function () {
  new WOW().init();
  $(".rotate").textrotator();
});

window.onscroll = function () {
  myFunction();
  console.log(window.pageYOffset);
};

const myFunction = () => {
  if (
    window.pageYOffset >= navbarPositionEnd &&
    !navbar.classList.contains("navbar-fixed-top")
  ) {
    navbar.classList.toggle("navbar-fixed-top");
    navbar.classList.toggle("hidden");
    navbar.classList.remove("fadeOutUp");
    navbar.classList.add("fadeInDown");
    console.log("added");
  }
  if (
    window.pageYOffset <= navbarPositionStart &&
    navbar.classList.contains("navbar-fixed-top")
  ) {
    navbar.classList.remove("fadeInDown");
    navbar.classList.add("fadeOutUp");
    navbar.classList.toggle("hidden");
    navbar.classList.toggle("navbar-fixed-top");
    console.log("removed");
  }
};
