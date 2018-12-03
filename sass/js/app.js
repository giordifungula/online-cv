window.onscroll = function() {Sticky()};

var header = document.getElementById("Header");
var sticky = header.offsetTop;

function Sticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}