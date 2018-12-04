// $("html, body").animate({ scrollTop: 0 }, "slow");
// =============== NavBar for Mobile =============== //
    // function openNav() {
    //     document.getElementById("myTopNav").style.width = "200px";
    //     // document.getElementById("myTopNav").style.background = "#3dfaaa";
    //     // collects the Id and changes style from 0 to 200;
    // }
    // function closeNav() {
    //     document.getElementById("myTopNav").style.width = "0";
    //     // collects id and closes it back to 0
    // }
    // function thankYou(){
    //     var x = document.getElementById("subject");
    //     x.addEventListener(click, function(){
    //         console.log("Thank you for submitting the form");
    //     });
    // }

// alert(1);
window.onscroll = function() {Sticky()};

var header = document.getElementById("Home");
var sticky = header.offsetTop;
// selects the header and attaches to the offset property on the header object

// function declaration
function Sticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    // When the screen is scrolled add the sticky class
    header.style.opacity = '0.9';
    // also lighten the background picture
  } else {
    header.classList.remove("sticky");
    header.style.opacity = '1';
    // if its scrolled back remove the class and the opacity
    
    
  }
}