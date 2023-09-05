let seacrh = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    seacrh.classList.toggle('active');
}

// Scroll Indicaor
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



//scroll animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


window.addEventListener("scroll", reveal);


// Scroll animation side to center
const boxes = document.querySelectorAll(".side");

const checkBoxes = () => {
  const triggerBottom = (window.innerHeight/5)*4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if(boxTop < triggerBottom) box.classList.add("show");
    else box.classList.remove("show");
  });
};

window.addEventListener("scroll",checkBoxes);
checkBoxes()



// Swiper
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//payment
function toggle(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')
  var popup = document.getElementById('popup');
  popup.classList.toggle('active')
  var revshow = document.getElementById('revshow');
  revshow.classList.toggle('active')
}