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
const mybutton = document.getElementById("myBtn");

console.log(navbar);

// wow
$(function () {
  new WOW().init();
  $(".rotate").textrotator();
});

window.onscroll = function () {
  myFunction();
  scrollFunction();
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

    mybutton.classList.toggle("hidden");
  }
  // if (
  //   window.pageYOffset <= navbarPositionStart &&
  //   navbar.classList.contains("navbar-fixed-top")
  // ) {
  //   navbar.classList.remove("fadeInDown");
  //   navbar.classList.add("fadeOutUp");
  //   // navbar.classList.toggle("hidden");
  //   // navbar.classList.toggle("navbar-fixed-top");
  //   console.log("removed");
  // }
};

//Get the button:

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
