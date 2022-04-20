import i18Obj from "./translate.js";

window.addEventListener('DOMContentLoaded', () => {

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
    const themeButton = document.querySelector('.theme-button');
    const svgTheme = document.querySelector('.theme-icon');
    const portfolioBtns = document.querySelector('.portfolio-buttons'); // div buttons-container
    const portfolioBtn = document.querySelectorAll('.portfolio-button');
    const portfolioImages = document.querySelectorAll('.portfolio-img');

    const arrSelectror = ['body', '.section-title',  '.skills', '.portfolio', '.video', '.price'];

    let lang = 'en', theme = 'dark';
    
    function setLocalStorage() {    
        localStorage.setItem('lang', lang);
    }
    window.addEventListener('beforeunload', setLocalStorage);

    function getLocalStorage() {
        if(localStorage.getItem('lang')) {
            const langGet = localStorage.getItem('lang');
            getTranslate(langGet);
            lang = langGet;
        }
    }
    window.addEventListener('load', getLocalStorage);
    window.addEventListener('load',  () => {
        if (lang == 'en') {
            navLangItem[2].classList.remove('active-lang');
            navLangItem[0].classList.add('active-lang');        
        }if (lang == 'ru'){        
            navLangItem[0].classList.remove('active-lang');
            navLangItem[2].classList.add('active-lang');
        } 
    });
    window.addEventListener('load', getTranslate(lang));

    function changeClassActive(element, activeClass){
        element.forEach(item => {
            item.classList.remove(activeClass);
        });
        event.target.classList.add(activeClass);
    }

    portfolioBtns.addEventListener('click', event => {
        if(event.target.classList.contains('portfolio-button')) {
            let nameButton = event.target.dataset.season;
            portfolioImages.forEach((img, index) => img.src = `./assets/img/${nameButton}/${index + 1}.jpg`);        
            changeClassActive(portfolioBtn, 'active');        
        }    
    });

    function getTranslate(language) {
        const getData = document.querySelectorAll('[data-i18n]'); 
        getData.forEach((el) => {
            el.textContent = i18Obj[language][el.dataset.i18n];
        })
    }

    function changeTheme(arr) {
        arr.forEach(item => {
            const selector = document.querySelectorAll(`${item}`);
                selector.forEach(cssClass => cssClass.classList.toggle('light_theme'));     
        })
    };

    langButton.addEventListener('click', event => {
        let nameLang = event.target.dataset.language;
        if (nameLang) {
            getTranslate(nameLang);
            changeClassActive(navLangItem, 'active-lang');    
            lang = nameLang;           
        }
    })

    themeButton.addEventListener('click', event => {
        if(themeButton.classList.contains('dark-theme')){
            svgTheme.childNodes[1].setAttribute('href', './assets/svg/sprite.svg#sun_light');
            themeButton.classList.remove('dark-theme');
            themeButton.classList.add('light-theme');
            changeTheme(arrSelectror);
        } else if(themeButton.classList.contains('light-theme')){
            svgTheme.childNodes[1].setAttribute('href', './assets/svg/sprite.svg#moon_shine');
            themeButton.classList.remove('light-theme');
            themeButton.classList.add('dark-theme');
            changeTheme(arrSelectror);
        }
    })

});
    
console.log('1. Смена изображений в секции portfolio +25.\n2. Перевод страницы на два языка +25.\n3. Переключение светлой и тёмной темы +25 \n4. Дополнительный функционал: выбранный пользователем язык отображения страницы сохраняется при перезагрузке страницы (тему не сделал =(( )\n\n ps: мне кажется я тут в js сильно наговнокодил, буду благодарен если укажете на явные ошибки в отзыве');