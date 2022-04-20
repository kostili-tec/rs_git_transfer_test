window.addEventListener('DOMContentLoaded', () => {

    const burgItem = document.querySelector('.header__burger');
    const burgItemPets = document.querySelectorAll('.header__burger__pets-page .burger__line');
    const menu = document.querySelector('.nav');
    const menuItem = document.querySelectorAll('.nav-link');

    let isOpenNav = false;
    console.log(isOpenNav);

    burgItem.addEventListener('click', () => {
        if (isOpenNav){
            menu.classList.add('slide-out');
            menu.classList.remove('slide-in');
            burgItem.style.transform = '';          
            isOpenNav = false;
            console.log(isOpenNav);
            burgItemPets.forEach((item) => item.style.backgroundColor = "#000");
        } else {
            menu.classList.add('slide-in');
            menu.classList.remove('slide-out');
            burgItem.style.transform = 'rotate(90deg)';
            isOpenNav = true;
            console.log(isOpenNav);
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

