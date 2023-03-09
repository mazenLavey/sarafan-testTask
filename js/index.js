
// nav logic
const megamenu = document.getElementById('megamenu');
const megamenuIcon = document.getElementById('megamenu-icon');
const megamenuLayout = document.querySelector('.megamenu__layout');
const header = document.getElementById('header');

megamenuIcon.addEventListener('click', ()=>{
    megamenuIcon.classList.toggle('active');
    megamenu.classList.toggle('active');
    megamenuLayout.classList.toggle('active');
    header.classList.toggle('noShadow');
})

megamenuLayout.addEventListener('click', ()=>{
    megamenuIcon.classList.remove('active');
    megamenu.classList.remove('active');
    megamenuLayout.classList.remove('active');
    header.classList.remove('noShadow');
})

const megamenuHeader = document.querySelectorAll('.megamenu__header');

megamenuHeader.forEach((element)=>{
    element.addEventListener('click', ()=>{
        element.nextElementSibling.classList.toggle('active');
    })
})


// slider logic
const sliderArrowLeft = document.getElementById('slider__arrow-left');
const sliderArrowRight = document.getElementById('slider__arrow-right');
const innerSlider = document.querySelector('.inner__slider');
const slideImgs = document.querySelectorAll('.inner__slider img');
const sliderBullets = document.querySelectorAll(".slider__btn span");

let imgWidth
let count = 0;

window.addEventListener('resize', ()=>{
    imgWidth = slideImgs[0].offsetWidth;
})

function changeBullets() {
    sliderBullets.forEach((bullet)=>{
        bullet.classList.remove('active');
    });

    sliderBullets[count].classList.add('active');

}

sliderArrowLeft.addEventListener('click', ()=>{
    imgWidth = slideImgs[0].offsetWidth;
    count--,
    count < 0 ? count = slideImgs.length-1: null;
    innerSlider.style = `transform: translateX(-${imgWidth * count}px)`;
    changeBullets()
});

sliderArrowRight.addEventListener('click', ()=>{
    imgWidth = slideImgs[0].offsetWidth;
    count++,
    count > slideImgs.length-1? count = 0: null;
    innerSlider.style = `transform: translateX(-${imgWidth * count}px)`;
    changeBullets()
});


// popup gallery

const galleryImgs = document.querySelectorAll('.info img');
const popup = document.getElementById('popup');
const popupLayout = document.querySelector('.popup__layout');
const closePopup = document.getElementById('close-popup');

galleryImgs.forEach((img)=>{
    img.addEventListener('click', (e)=>{
        console.log(popup)
        popup.classList.add('active');
        popupLayout.classList.add('active');
        let popupImg = document.createElement('img');
        popupImg.src = img.src;
        popupImg.alt = img.alt;
        popup.insertAdjacentElement( "beforeend" ,popupImg);
    })
})

popupLayout.addEventListener('click', ()=>{
    popup.classList.remove('active');
    popupLayout.classList.remove('active');
    popup.querySelector('img').remove();
})

closePopup.addEventListener('click', ()=>{
    popup.classList.remove('active');
    popupLayout.classList.remove('active');
    popup.querySelector('img').remove();
})