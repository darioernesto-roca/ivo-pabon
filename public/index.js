// Program the hamburger button and the nav

const hamburgerBtn = document.querySelector(".hamburger");
const navContainer = document.querySelector('.main-header__nav-container');
const navElement = document.querySelector('.main-header__nav ')

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle("is-active");
    navContainer.classList.toggle('active');
})


// Programming the buttons

    // Obtain the button elements with the class main__btn-container__btn-reserve
    const buttons = document.getElementsByClassName("main__btn-container__btn-reserve");

    // Iterate for eah button
    for (let i = 0; i < buttons.length; i++) {
        // Añadimos un evento click a cada botón
        buttons[i].addEventListener("click", function() {
            // Redirigimos al ID especificado
            location.href = "#contact";
        });
    }


// Programming the slider testimonials

const sliderTestimony = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider__arrow_prev');
const nextBtn = document.querySelector('.slider__arrow_next');
const testimonios = document.querySelectorAll('.slider__item');
let currentIndexTestimony = 0;

console.log(sliderTestimony);

function showTestimonio(index) {
  testimonios.forEach(testimonio => testimonio.classList.remove('slider-active'));
  testimonios[index].classList.add('slider-active');
}


function showNextTestimonio() {
  currentIndexTestimony++;
  if (currentIndexTestimony >= testimonios.length) {
    currentIndexTestimony = 0;
  }
  showTestimonio(currentIndexTestimony);
}

function showPrevTestimonio() {
  currentIndexTestimony--;
  if (currentIndexTestimony < 0) {
    currentIndexTestimony = testimonios.length - 1;
  }
  showTestimonio(currentIndexTestimony);
}

prevBtn.addEventListener('click', showPrevTestimonio);
nextBtn.addEventListener('click', showNextTestimonio);

showTestimonio(currentIndexTestimony);