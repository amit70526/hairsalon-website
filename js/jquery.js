/******************hero slider***************** */
var swiper = new Swiper(".home-slider", {
    autoplay:true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let navbar = document.querySelector('header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}


/*testimonial slider*/
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
