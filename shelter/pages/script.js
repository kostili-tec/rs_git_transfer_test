window.addEventListener('DOMContentLoaded', () => {

    const burgItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.nav');
    const menuItem = document.querySelectorAll('.nav-link');
    

    let isOpenNav = false;

    burgItem.addEventListener('click', () => {
        if (isOpenNav){
            menu.classList.remove('nav-open');
            burgItem.style.transform = '';          
            isOpenNav = false;
        } else {
            menu.classList.add('nav-open');
            burgItem.style.transform = 'rotate(90deg)';
            isOpenNav = true;
        }        
    })
    menuItem.forEach((item) => item.addEventListener('click', () => {
        menu.classList.remove('nav-open');
        burgItem.style.transform = '';          
        isOpenNav = false;
    }))
    // menuItem.addEventListener('click', () => {
    //     menu.classList.remove('nav-open');
    //     burgItem.style.transform = '';          
    //     isOpenNav = false;
    // })


})

