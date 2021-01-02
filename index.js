// Animation

window.addEventListener("load",function () {
const ld=document.querySelector(".loader");
ld.classList.add("hidden");
});

// Sticky Navbar

window.addEventListener("scroll",function () {
  const header = document.querySelector(".navbar");
  header.classList.toggle("sticky",window.scrollY>80);
  });

// Hamburger
const burger = document.querySelector(".hamburger");
burger.addEventListener("click",function(){

  const nav = document.querySelector(".menu");
  nav.classList.toggle("nav-active");
});

//Typing Animation

var typed = new Typed(".typing", {
  strings: ["Programmer", "Front End Developer", "UI/UX Designer", "Aspiring Full Stack Developer", "Sports Lover"],
  typeSpeed:100,
  backSpeed:60,
  loop:true
});
