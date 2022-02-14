const findBtn = document.querySelector('.find');
const gridDiv = document.querySelector('.grid');
const input = document.getElementById('input');
const testBtn = document.querySelector('.test-btn');
const nav = document.querySelector('.nav');
const searchBtn = document.getElementById('search');
const crossClear = document.getElementById('cross');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// const startUrl = 'https://api.unsplash.com/photos/?client_id=FYdN3NPqRZfJlZqP-pOElRcZ95ARwjpFvreQ-1zSBOM';
const startUrl = 'https://api.unsplash.com/photos/?client_id=FYdN3NPqRZfJlZqP-pOElRcZ95ARwjpFvreQ-1zSBOM';
let numberPage = 1; 
let inputValue = '';
let btnShows = false;
const quaries = {
    url: 'https://api.unsplash.com/',
    photos: 'photos/',
    searchPhotos: 'search/photos',
    oneRandom: 'photos/random?query=spring',
    tenRandom: 'photos/random?query=car&count=10',
    startQ: '?query=car',
    page: `&page=${numberPage}`,
    perPage: '&per_page=12',
    searchQuary: `?query=${inputValue}`,    
    testVal: 'https://api.unsplash.com/search/photos?query=winter',
    clientId: '&client_id=FYdN3NPqRZfJlZqP-pOElRcZ95ARwjpFvreQ-1zSBOM',
}
const testUrl = quaries.url + quaries.tenRandom + quaries.clientId;
const testOne = quaries.url + quaries.oneRandom + quaries.clientId;
let findUrl;


document.addEventListener('DOMContentLoaded', () => {
    showHideBtns();
    findUrl = quaries.url + quaries.searchPhotos + quaries.startQ + quaries.perPage + quaries.clientId;
});

findBtn.addEventListener('click', () => {
    checkInput();
    getData(findUrl);
});
searchBtn.addEventListener('click', () => {
    checkInput();
    getData(findUrl);
});

// ======== ПОИСК ПО ENTER ========== //
input.addEventListener('focus', () => {
    input.addEventListener('keyup', (event) =>{
        if(event.key == 'Enter') {
            checkInput();
            getData(findUrl);
        }
    })
})
// ======== СТЕРЕТЬ ИНПУТ ========== //
input.addEventListener('input', () =>{
    if (input.value != ''){
        cross.style.display = 'block';
        crossClear.addEventListener('click', () =>{
            input.value = '';
            cross.style.display = 'none';
        })
    } else {
        cross.style.display = 'none';
    }
    
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
    checkInput();
    getData(findUrl);
    console.log(quaries.page);
});

nextBtn.addEventListener('click', () => {
    numberPage++;
    quaries.page = `&page=${numberPage}`;
    console.log(numberPage);
    console.log(quaries.page);
    checkInput();
    getData(findUrl);
});

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(typeof(data));
    console.log(data);
    console.log(data.total_pages);
    showDataFor(data);
}

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
            const downContainer = document.createElement('div');
            const linkButton = document.createElement('a');
                downContainer.classList.add('download-container');
                linkButton.classList.add('download-btn');
                linkButton.textContent = 'download';               
                linkButton.setAttribute('href', `${item.links.download}`);
                linkButton.setAttribute('download', "");
                linkButton.setAttribute('target', '_blank');                
                imgDiv.append(downContainer);
                downContainer.append(linkButton);   
    })
    btnShows = true;
    showHideBtns();
    
}
function hoverDownload(link){
    const imgSelector = document.querySelectorAll('.img');
    console.log(imgSelector);
    imgSelector.forEach(item => {
        const downloadCont = document.createElement('div');
        const linkButton = document.createElement('a');            
            downloadCont.classList.add('download-container');
            linkButton.classList.add('download-btn');
            linkButton.textContent = 'download';
            item.append(downloadCont);
            downloadCont.append(linkButton);            
    })    
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
