
  const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navig');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
}
navSlide();