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


$('.testimonial').slick({
dots: true,
infinite: false,
centerMode: true,
speed: 300,
autoplay:true,
loop:true,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});