window.addEventListener('DOMContentLoaded', () => {

    const burgItem = document.querySelector('.header__burger');
    const burgItemPets = document.querySelectorAll('.header__burger__pets-page .burger__line');
    const menu = document.querySelector('.nav');
    const menuItem = document.querySelectorAll('.nav-link');

    let isOpenNav = false;

    burgItem.addEventListener('click', () => {
        if (isOpenNav){
            menu.classList.remove('nav-open');
            burgItem.style.transform = '';          
            isOpenNav = false;
            burgItemPets.forEach((item) => item.style.backgroundColor = "#000");
        } else {
            menu.classList.add('nav-open');
            burgItem.style.transform = 'rotate(90deg)';
            isOpenNav = true;
            burgItemPets.forEach((item) => item.style.backgroundColor = "#F1CDB3");
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

