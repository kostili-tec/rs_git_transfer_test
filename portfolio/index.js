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

const btnWinter = document.querySelector('.winter-button');
const portfolioBtns = document.querySelector('.portfolio-buttons'); // div buttons-container
const portfolioBtn = document.querySelectorAll('.portfolio-button');
const portfolioImages = document.querySelectorAll('.portfolio-img');

function changeImage(event) {
    if (event.target.classList.contains('portfolio-button')) {
        console.log(event.target)
    }
}

function changeClassActive(element){
    element.forEach(item => {
        item.classList.remove('active');
    });
    this.event.target.classList.add('active');
    
    
}

// btnWinter.addEventListener('click', () => {
//     portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`)
// })

portfolioBtns.addEventListener('click', event => {
    if(event.target.classList.contains('portfolio-button')) {
        let nameButton = event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${nameButton}/${index + 1}.jpg`)
        console.log(nameButton);
        changeClassActive(portfolioBtn);        
    }    
})


