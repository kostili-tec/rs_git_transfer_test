const findBtn = document.querySelector('.find');
const gridDiv = document.querySelector('.grid');
const input = document.getElementById('input');
const testBtn = document.querySelector('.test-btn');
const nav = document.querySelector('.nav');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const url = 'https://api.unsplash.com/photos/?client_id=FYdN3NPqRZfJlZqP-pOElRcZ95ARwjpFvreQ-1zSBOM';
let numberPage = 1; 
let = inputValue = '';
let = btnShows = false;
const quaries = {
    url: 'https://api.unsplash.com/',
    photos: 'photos/',
    searchPhotos: 'search/photos',
    oneRandom: 'photos/random?query=spring',
    tenRandom: 'photos/random?query=spring&count=20',
    page: `&page=${numberPage}`,
    perPage: '&per_page=12',
    searchQuary: `?query=${inputValue}`,    
    testVal: 'https://api.unsplash.com/search/photos?query=winter',
    clientId: '&client_id=FYdN3NPqRZfJlZqP-pOElRcZ95ARwjpFvreQ-1zSBOM',
}
const testUrl = quaries.url + quaries.tenRandom + quaries.clientId;
const testOne = quaries.url + quaries.oneRandom + quaries.clientId;
let findUrl;
// console.log(testOne)
// console.log(quaries.url + quaries.clientId);
// console.log(input.value);

document.addEventListener('DOMContentLoaded', showHideBtns);

// findBtn.addEventListener('click', getData);
findBtn.addEventListener('click', () => {
    checkInput();
    getData(findUrl);
});
testBtn.addEventListener('click', () => {
    inputValue = input.value; 
    quaries.searchQuary = `?query=${inputValue}`
    console.log('inputValue = ' + inputValue);
    console.log('searchQuary = ' + quaries.searchQuary);
    // console.log(quaries);
    // findUrl = quaries.url + quaries.searchPhotos + quaries.searchQuarie + quaries.inputValue + quaries.perPage + quaries.clientId;

    // findUrl = quaries.testVal + quaries.perPage + quaries.page + quaries.clientId; //worked
    // https://api.unsplash.com/search/photos?query=winter&per_page=11&page=1&client_id=FYdN3NPqRZfJlZqP-pOElRcZ95ARwjpFvreQ-1zSBOM

    findUrl = quaries.url + quaries.searchPhotos + quaries.searchQuary + quaries.page + quaries.perPage + quaries.clientId;
    console.log(findUrl);
    // console.log(quaries.page);
});
prevBtn.addEventListener('click', () => {
    numberPage--;
    if (numberPage < 0) {
        numberPage = 0;
    }
    quaries.page = `&page=${numberPage}`;
    console.log(quaries.page);
});

nextBtn.addEventListener('click', () => {
    numberPage++;
    quaries.page = `&page=${numberPage}`;
    console.log(numberPage);
    console.log(quaries.page);
});
// testBtn.addEventListener('click', testFunc);

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(typeof(data));
    console.log(data);
    // showData(data);
    showDataFor(data);
    // showOne(data);
}

// function getUrl(obj) {
//     if (!input.value) {
//         const inputUrl = 
//     }
// }

function showOne(obj){
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');
        imgDiv.style.backgroundImage = `url(${obj.urls.regular})`;
        gridDiv.append(imgDiv);
        console.log(Object.keys(obj).length);

}

function showData(link){
    
    link.map(item => {        
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');
        imgDiv.style.backgroundImage = `url(${item.urls.regular})`;
        gridDiv.append(imgDiv);
    })   
    console.log(Object.keys(link).length);
}

function showDataFor(link) {
    clearPage();
    link.results.forEach(item => {

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');
        imgDiv.style.backgroundImage = `url(${item.urls.regular})`;
        gridDiv.append(imgDiv);
        // console.log(item);
    })
    btnShows = true;
    showHideBtns();
}
function clearPage(){
    let imgDiv = document.querySelectorAll('.img');
    console.log(imgDiv);
        imgDiv.forEach(item => {
            item.remove();
        });
    btnShows = false;
    showHideBtns();
}
function checkInput(){
    inputValue = input.value; 
    quaries.searchQuary = `?query=${inputValue}`;
    findUrl = quaries.url + quaries.searchPhotos + quaries.searchQuary + quaries.page + quaries.perPage + quaries.clientId;
    console.log(findUrl);
}
function showHideBtns(){
    if (btnShows == false) {
        nav.classList.add('hide');
    } else {
        nav.classList.remove('hide');
    }
}
function testFunc() {
    quaries.inputValue = input.value; 
    console.log(quaries.inputValue);
    console.log(quaries);
    findUrl = quaries.url + quaries.photos + quaries.searchQuary + quaries.inputValue + quaries.clientId;
    console.log(findUrl);
}