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
const testimonios = sliderTestimony.querySelectorAll('.slider__item');
let currentIndexTestimony = 0;

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

// Programming the cover slider

    // Obtenemos los elementos del slider
    const slider = document.querySelector('.main__slider__container');
    const items = document.querySelectorAll('.main__slider__slide');
    const images = document.querySelectorAll('.main__slider__slide img');
    const paginationItems = document.querySelectorAll('.main__slider__pagination-item');
  
    // Configuramos el ancho del slider y de los elementos
    const itemWidth = items[0].offsetWidth;
    const sliderWidth = items.length * itemWidth;
    slider.style.width = sliderWidth + 'px';
    items.forEach(item => item.style.width = itemWidth + 'px');
  
    // Iniciamos el slider
    let currentIndex = 0;
    let intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      updateSlider(currentIndex);
    }, 5000);
  
    // Actualizamos el slider para mostrar la imagen indicada
    function updateSlider(index) {
      // Actualizamos la paginación
      paginationItems.forEach(item => item.classList.remove('active'));
      paginationItems[index].classList.add('active');
  
      // Desvanecemos las imágenes que no están en el centro
      images.forEach((image, i) => {
        if (i < index || i > index) {
          image.style.opacity = 0;
        }
      });
  
      // Movemos el slider para centrar la imagen indicada
      const offset = itemWidth * index;
      slider.style.transform = `translateX(-${offset}px)`;
  
      // Mostramos la imagen indicada
      const currentImage = images[index];
      currentImage.style.opacity = 1;
    }
  
    // Configuramos los botones de paginación
    paginationItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        clearInterval(intervalId);
        updateSlider(index);
        intervalId = setInterval(() => {
          currentIndex = (currentIndex + 1) % items.length;
          updateSlider(currentIndex);
        }, 5000);
      });
    });

