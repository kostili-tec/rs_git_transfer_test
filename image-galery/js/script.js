const findBtn = document.querySelector('.find');
const gridDiv = document.querySelector('.grid');
const input = document.getElementById('input');
const testBtn = document.querySelector('.test-btn');

const url = 'https://api.unsplash.com/photos/?client_id=FYdN3NPqRZfJlZqP-pOElRcZ95ARwjpFvreQ-1zSBOM';

const quaries = {
    url: 'https://api.unsplash.com/',
    photos: 'photos/',
    oneRandom: 'photos/random?query=spring',
    tenRandom: 'photos/random?query=spring&count=20',
    perPage: '&per_page=10',
    searchPhotos: 'search/photos',
    searchQuarie: '?query=',
    inputValue: '',
    testVal: 'https://api.unsplash.com/search/photos?query=spring',
    clientId: '&client_id=FYdN3NPqRZfJlZqP-pOElRcZ95ARwjpFvreQ-1zSBOM',
}
const testUrl = quaries.url + quaries.tenRandom + quaries.clientId;
const testOne = quaries.url + quaries.oneRandom + quaries.clientId;
let findUrl;
console.log(testOne)
// console.log(quaries.url + quaries.clientId);
console.log(input.value);

findBtn.addEventListener('click', getData);
testBtn.addEventListener('click', () => {
    quaries.inputValue = input.value; 
    console.log(quaries.inputValue);
    console.log(quaries);
    // findUrl = quaries.url + quaries.searchPhotos + quaries.searchQuarie + quaries.inputValue + quaries.perPage + quaries.clientId;
    findUrl = quaries.testVal + quaries.clientId;
    console.log(findUrl);
});
// testBtn.addEventListener('click', testFunc);

async function getData() {
    const res = await fetch(findUrl);
    const data = await res.json();
    console.log(typeof(data));
    console.log(data);
    showData(data);
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

function testFunc() {
    quaries.inputValue = input.value; 
    console.log(quaries.inputValue);
    console.log(quaries);
    findUrl = quaries.url + quaries.photos + quaries.searchQuarie + quaries.inputValue + quaries.clientId;
    console.log(findUrl);
}