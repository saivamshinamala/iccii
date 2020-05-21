/* Contact Us */
var contact = document.getElementById("log");
var lbtn = document.getElementById("lbtn");
var btn = document.getElementById("btn");
var navbar = document.querySelector(".navbar");
lbtn.onclick = function () {
    contact.style.display = "block";
    navbar.style.zIndex = -999;
    contact.style.zIndex = 99;
}
btn.onclick = function () {
    contact.style.display = "none";
    navbar.style.zIndex = 99;
    contact.style.zIndex = 0;
}

/* image Carousel */
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

/* Mobile Nav Display */
var iconOpen = document.querySelector(".js--nav-icon");
iconOpen.onclick = function () {
    if (document.querySelector(".main-nav").style.display == "block") {
        document.querySelector(".main-nav").style.display = "none";
        let element = document.querySelector(".js--nav-icon i");
        return;
    }
    document.querySelector(".main-nav").style.display = "block";
    let element = document.querySelector(".js--nav-icon i");}