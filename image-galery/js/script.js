const gridDiv = document.querySelector('.grid');
const input = document.getElementById('input');
const testBtn = document.querySelector('.test-btn');
const nav = document.querySelector('.nav');
const searchBtn = document.getElementById('search');
const crossClear = document.getElementById('cross');
const randomBtn = document.querySelector('.random-btn');
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
    tenRandom: 'photos/random?count=12',
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
    const randomUrl = quaries.url + quaries.tenRandom + quaries.clientId;
    getData(randomUrl, 'random');
});

searchBtn.addEventListener('click', () => {
    checkInput();
    getData(findUrl, 'results');
});

// ======== ПОИСК ПО ENTER ========== //
input.addEventListener('focus', () => {
    input.addEventListener('keyup', (event) =>{
        if(event.key == 'Enter') {
            checkInput();
            getData(findUrl, 'results');
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
randomBtn.addEventListener('click', () => {
    const randomUrl = quaries.url + quaries.tenRandom + quaries.clientId;
    // console.log(randomUrl);
    clearPage();
    getData(randomUrl, 'random');    
})

prevBtn.addEventListener('click', () => {
    numberPage--;
    if (numberPage < 0) {
        numberPage = 0;
    }
    quaries.page = `&page=${numberPage}`;
    checkInput();
    getData(findUrl, 'results');
    // console.log(quaries.page);
});

nextBtn.addEventListener('click', () => {
    numberPage++;
    quaries.page = `&page=${numberPage}`;
    // console.log(numberPage);
    // console.log(quaries.page);
    checkInput();
    getData(findUrl, 'results');
});

// ============== Functions ================ //

async function getData(url, type) {
    const res = await fetch(url);
    const data = await res.json();   
    // console.log(data);
    // console.log(data.total_pages);
    if (type == 'results'){
        showDataResults(data);
    } else if (type == 'random') {
        showRandomData(data);
    }
    
}

function showOne(obj){
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');
        imgDiv.style.backgroundImage = `url(${obj.urls.regular})`;
        gridDiv.append(imgDiv);
        // console.log(Object.keys(obj).length);
}

// ============= Random ============ //
function showRandomData(link){    
    link.map(item => {        
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');
        imgDiv.style.backgroundImage = `url(${item.urls.regular})`;
        gridDiv.append(imgDiv);
        clickDownload(item, imgDiv);
    })      
}
// ============= Search =========== //
function showDataResults(link) {
    clearPage();
    link.results.forEach(item => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');
        imgDiv.style.backgroundImage = `url(${item.urls.regular})`;
        gridDiv.append(imgDiv);
            clickDownload(item, imgDiv);            
    });
    btnShows = true;
    showHideBtns();    
}
function clickDownload(objItem, toItem){
    const downContainer = document.createElement('div');
    const linkButton = document.createElement('a');
        downContainer.classList.add('download-container');
        linkButton.classList.add('download-btn');
        linkButton.textContent = 'download';               
        linkButton.setAttribute('href', `${objItem.links.download}`);
        linkButton.setAttribute('download', "");
        linkButton.setAttribute('target', '_blank');                
        toItem.append(downContainer);
        downContainer.append(linkButton); 
}

function clearPage(){
    let imgDiv = document.querySelectorAll('.img');
    // console.log(imgDiv);
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
    // console.log(findUrl);
}
function showHideBtns(){
    if (btnShows == false) {
        nav.classList.add('hide');
    } else {
        nav.classList.remove('hide');
    }
}

console.log('1. Вёрстка +10 \n на странице есть несколько фото и строка поиска +5 \n в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n');
console.log('2. При загрузке приложения на странице отображаются полученные от API изображения +10 \n');
console.log('3. Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10\n');
console.log('4. Поиск +30 \n при открытии приложения курсор находится в поле ввода +5\n есть placeholder +5 \n автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5\n поисковый запрос можно отправить нажатием клавиши Enter +5 \n после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5 \n в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5\n');
console.log('5. На усмотрение проверяющего, я особо ничего нового в дизайн не привносил, только добавил эффекты наведения на изображения и там же кнопку скачать(не смог заставить эту заразу именно начать скачивать картинку, она открывает ее фулл). Кнопка рандом и при поиске появляются кнопки которым можно перелистывать страницы с изображениями');