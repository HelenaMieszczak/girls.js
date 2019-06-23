var carousel = document.querySelector('.carousel');
var stage = document.querySelector(".carousel-stage");
var prev = document.querySelector(".carousel-prev");
var next = document.querySelector(".carousel-next");
var slide = document.querySelectorAll(".single-slide");


var currentIndex = 0
var slideWidth = slide[0].clientWidth;
var slidesNumber =slide.length - 1;

// console.log(slideWidth);

function goToSlide(index){
    console.log("index:" + index)
    if (index < 0) {
        index = slidesNumber;
    } else if (index > slidesNumber) {
        index = 0;
    }

    console.log(" left:" + index *(-slideWidth))
    carousel.style.left = index * (-slideWidth);
    currentIndex = index;
    console.log("current index" + currentIndex)
}

// goToSlide()

function slideToNext() {
    goToSlide(currentIndex + 1);
}

// slideToNext()

function slideToPrev() {
    goToSlide(currentIndex - 1);
}

// slideToPrev()

function bindEvents() {
    prev.addEventListener("click", slideToPrev);
    next.addEventListener("click", slideToNext);
}

bindEvents()

function autorotate(){
    setInterval(slideToNext, 4000);
}

autorotate()
