window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar-top");
var offset = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= offset) {
    navbar.classList.add("fixed-full")
  } else {
    navbar.classList.remove("fixed-full");
  }
}