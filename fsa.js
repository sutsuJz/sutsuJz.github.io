
  const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navig');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
}
navSlide();

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navi").className = "test";
  } else {
    document.getElementById("navi").className = "slideUp";
  }
}