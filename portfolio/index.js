import i18Obj from "./translate.js";

(function(){
    const burgItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuClose = document.querySelector('.header__nav-close');
    const navItem = document.querySelector('.nav');
    burgItem.addEventListener('click', () => {
        menu.classList.add('nav__active');
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('nav__active');
    });
    navItem.addEventListener('click', () => {
        menu.classList.remove('nav__active');
    })
}());

const langButton = document.querySelector('.nav-lang');
const navLangItem = document.querySelectorAll('.nav-lang-item'); 
const portfolioBtns = document.querySelector('.portfolio-buttons'); // div buttons-container
const portfolioBtn = document.querySelectorAll('.portfolio-button');
const portfolioImages = document.querySelectorAll('.portfolio-img');

function changeImage(event) {
    if (event.target.classList.contains('portfolio-button')) {
        console.log(event.target)
    }
}

function changeClassActive(element, activeClass){
    element.forEach(item => {
        item.classList.remove(activeClass);
    });
    event.target.classList.add(activeClass);
}

portfolioBtns.addEventListener('click', event => {
    if(event.target.classList.contains('portfolio-button')) {
        let nameButton = event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${nameButton}/${index + 1}.jpg`)
        console.log(nameButton);
        changeClassActive(portfolioBtn, 'active');        
    }    
});

function getTranslate(lang) {
    const getData = document.querySelectorAll('[data-i18n]'); 
    getData.forEach((el) => {
        el.textContent = i18Obj[lang][el.dataset.i18n];
    })
}

langButton.addEventListener('click', event => {
    let nameLang = event.target.dataset.language;
    if (nameLang) {
    getTranslate(nameLang);
    changeClassActive(navLangItem, 'active-lang');
    console.log(nameLang);
    }
})



