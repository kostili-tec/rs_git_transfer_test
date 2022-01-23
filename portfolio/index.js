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