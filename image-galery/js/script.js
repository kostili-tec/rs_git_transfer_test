const findBtn = document.querySelector('.find');
const gridDiv = document.querySelector('.grid');

const url = 'https://api.unsplash.com/photos/?client_id=FYdN3NPqRZfJlZqP-pOElRcZ95ARwjpFvreQ-1zSBOM';

findBtn.addEventListener('click', getData);

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    showData(data);
}

function showData(link){
    
    link.map(item => {        
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');
        imgDiv.style.backgroundImage = `url(${item.urls.regular})`;
        gridDiv.append(imgDiv);
    })   
}

