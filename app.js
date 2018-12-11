
window.onscroll = function() {Sticky()};

var header = document.getElementById("Home");
var sticky = header.offsetTop;
// selects the header and attaches to the offset property on the header object

// function declaration
function Sticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    // When the screen is scrolled below header add the sticky class
    header.style.opacity = '0.9';
    header.style.background = '#eee';
    // also lighten the background picture
  } else {
    header.classList.remove("sticky");
    header.style.opacity = '1';
    header.style.background = '#111';
    // if its scrolled back remove the class and the opacity
  }
}