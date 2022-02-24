console.log(`
1. Вёрстка +10
    реализован интерфейс игры +5
    в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2. Логика игры. Карточки, по которым кликнул игрок, переворачиваются согласно правилам игры +10
3. Игра завершается, когда открыты все карточки +10
4. По окончанию игры выводится её результат - количество ходов, которые понадобились для завершения игры +10
5. Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой сохраняются результаты предыдущих 10 игр +10
6. По клику на карточку – она переворачивается плавно, если пара не совпадает – обе карточки так же плавно переварачиваются рубашкой вверх +10
7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
    высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо

7ой пункт на усмотрение проверяющего, потому что я особо в дизайне ничего не менял(уже не успеваю и не успею). Предыдущие 6 пунктов я вроде выполнил. 
Спасибо за отклик. Удачи в дальнейшей учебе!
`)

const cards = document.querySelectorAll('.memory-card');
const restart = document.querySelector('.reset-icon');
const showMenu = document.querySelector('.table-icon');
const gameSection = document.querySelector('.memory-game');
const scoreSection = document.querySelector('.table-records');
const scoreRecordsH2 = document.querySelector('.score-records__h2');
const scoreMain = document.querySelector('.score-main__h3');
const scoreList = document.querySelector('.records__ol');
const newGame = document.querySelector('.new-game__btn');
const reset = document.querySelector('.reset__btn');

let hasFlippedCard = false;
let lockBoard = false;
let isShowed = false;
let firstCard, secondCard;
let count = 0, step = 0;
let arrResults = [];

shuffle();

document.addEventListener('DOMContentLoaded', () =>{
    // if(localStorage.storedList) {
    //     loadLocalStore();
    // }
    if(localStorage.arrResultsLocal) {
        arrResults = JSON.parse(localStorage.getItem('arrResultsLocal'));
        createScore();
    }
});

newGame.addEventListener('click', () => {
    showHideScore();
    flipAll();
});
reset.addEventListener('click', () => {
    deleteLocalScore();
})
restart.addEventListener('click', flipAll);
showMenu.addEventListener('click', showHideScore);

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
    scoreRecordsH2.textContent = `Your Score: ${step}`;
    scoreMain.textContent = `Score: ${step}`;
   
    // console.log(`step = ${step}`);
    
    // hasFlippedCard = false;

    checkForMath();

    // checkFlip();
}

function checkForMath() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
    if (isMatch) {
        count++;
    }

    if (count == 6) {
        
        saveLocalResult(step);
        createScore();
        showHideScore(true);
        
        count = 0;
    }   
    // console.log(`count: ${count}`);
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
   
    step = 0;
    shuffle();
    // disableCards();
    
}

function shuffle() {    
    let randomArr = [];
    for (let i = 0; i < 12; i++) {
        randomArr[i] = i;
    }
    randomArr.sort(() => Math.random() - 0.5);

    
    cards.forEach((card, index) => {
        card.style.order = randomArr[index];
        
        // console.log(`${card.dataset.framework} = ${ randomArr[index]}`);        
    })
    // console.log(randomArr);
}

function showHideScore(showOrHide) {
    const showRecord = () => {        
        isShowed = true;
        gameSection.style = 'display: none';
        scoreSection.style = 'display: flex;';
        scoreMain.style = 'display: none';
    }
    const hideRecord = () => {       
        isShowed = false;
        gameSection.style = 'display: flex;';
        scoreSection.style = 'display: none;';
        scoreMain.style = 'display: block';
    }
    if (showOrHide == true) return showRecord();
    if (showOrHide == false) return hideRecord();

    isShowed == false ? showRecord() : hideRecord();
}

function saveLocalResult(result){   
    if (arrResults.length >= 10) {
        arrResults.splice(0, 1);
    }
    arrResults.push(result);
    localStorage.setItem('arrResultsLocal', JSON.stringify(arrResults));
}

function createScore(){
    clearScore();
    arrResults.map((item, index) => {
        let newScore = document.createElement("li");
        newScore.classList.add('round');
        newScore.textContent = `Score: ${item}`;
        scoreList.append(newScore);

    })
}

function clearScore(){    
    scoreList.innerHTML = "";
}
function deleteLocalScore(){
    arrResults.splice(0, arrResults.length);
    localStorage.setItem('arrResultsLocal', JSON.stringify(arrResults));
    clearScore();
}


cards.forEach(card => card.addEventListener('click', flipCard));
// console.log('test');

const showName = () => {
    const clearName = () =>{
        const pShow = document.querySelectorAll('.showName');
        pShow.forEach(index => {
            index.remove();
        })
    };
    clearName();
    cards.forEach((card, index) => {    
        let p = document.createElement('p');
        p.className = 'showName';
        p.textContent = `${card.dataset.framework}`;
        card.append(p);
    })
}