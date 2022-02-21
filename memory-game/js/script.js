alert('Привет! Я не успел сделать это задание =( Прошу дать мне несколько дней и оставить свои контакты в оценке задания(или сразу написать мне), чтобы я с вами связался для повтороной проверки . Спасибо за понимание \n Telegram: https://t.me/nebuchadnezzars_dream \n Disсord: EHG#4728(danil (@kostili-tec)) (В консоле продублирую)');
console.log('Привет! Я не успел сделать это задание =( Прошу дать мне несколько дней и оставить свои контакты в оценке задания(или сразу написать мне), чтобы я с вами связался для повтороной проверки . Спасибо за понимание \n Telegram: https://t.me/nebuchadnezzars_dream \n Disсord: EHG#4728(danil (@kostili-tec)) (В консоле продублирую)');
const cards = document.querySelectorAll('.memory-card');
const restart = document.querySelector('.restart');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let count = 0, step = 0;

shuffle();

restart.addEventListener('click', flipAll)

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    step++;
   
    console.log(`step = ${step}`);
    
    // hasFlippedCard = false;

    checkForMath();

    checkFlip();
}

function checkForMath() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
    // isMatch ? count++ : count--;
    console.log(`count: ${count}`);
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        // lockBoard = false;
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function kamaPunch(){
    cards[1].classList.toggle('flip');
}
    // setInterval(kamaPunch, 100);
    // setInterval(() => { clearInterval(kamaPunch);}, 5000);
    
function checkFlip(){
    cards.forEach(card =>{
        if (card.classList.contains('flip')) {
            count++;
        } 
        if (count != 12) {
            count = 0;
        }
    })
    if (count == 12) {
        count = 0; 
        flipAll();  
    }
}

function flipAll(){
        cards.forEach(card => {
            card.classList.remove('flip');
        })
       
        cards.forEach(card => card.addEventListener('click', flipCard));
    
    // count = 0;
    step = 0;
    shuffle();
    // disableCards();
    
}

function shuffle() {
    // cards.forEach(card => {
    //     let randomPos = Math.floor(Math.random() * 12);
    //     card.style.order = randomPos;
    //     console.log(`${card.dataset.framework} = ${randomPos}`);
    // });
    let randomArr = [];
    for (let i = 0; i < 12; i++) {
        randomArr[i] = i;
    }
    randomArr.sort(() => Math.random() - 0.5);
    cards.forEach((card, index) => {
        card.style.order = randomArr[index];
        console.log(`${card.dataset.framework} = ${ randomArr[index]}`);
    })
    // console.log(randomArr);
};

cards.forEach(card => card.addEventListener('click', flipCard));
console.log('test');

