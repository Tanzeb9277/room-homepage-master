const previousSlide = document.querySelector('.previous-slide')
const nextSlide = document.querySelector('.next-slide')
const slides = document.querySelectorAll('.slide-info')
const heroImage = document.querySelector('.hero-img img')
const openBtn = document.querySelector('.open-btn'); // Select the button that opens the lightbox
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav-options')



const heroImages = {
    0: 'images/desktop-image-hero-1.jpg',
    1: 'images/desktop-image-hero-2.jpg',
    2: 'images/desktop-image-hero-3.jpg'
}

let currentSlide = 0;

previousSlide.addEventListener('click', () => {

    if(currentSlide == 0){
        slides[currentSlide].classList.remove('display')
        currentSlide = 2;
        slides[currentSlide].classList.add('display')
        heroImage.src = heroImages[currentSlide]
    }else{
        slides[currentSlide].classList.remove('display')
        currentSlide--;
        slides[currentSlide].classList.add('display')
        heroImage.src = heroImages[currentSlide]
    }
    
})

nextSlide.addEventListener('click', () => {

    if(currentSlide == 2){
        slides[currentSlide].classList.remove('display')
        currentSlide = 0;
        slides[currentSlide].classList.add('display')
        heroImage.src = heroImages[currentSlide]
    }else{
        slides[currentSlide].classList.remove('display')
        currentSlide++;
        slides[currentSlide].classList.add('display')
        heroImage.src = heroImages[currentSlide]
    }
    
})

openBtn.addEventListener('click', () =>{
    menu.style.transform ="translateX(0px)";
  })
  
  closeBtn.addEventListener('click', () =>{
    menu.style.transform ="translateX(-100vw)";
  })