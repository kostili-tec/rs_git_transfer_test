// const audio = document.querySelector('audio');
const coverImg = document.querySelector('.album-cover__img');
const songName = document.querySelector('.song-name__h1');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.stop-btn');
const prevBtn = document.querySelector('.backward-btn');
const nextBtn = document.querySelector('.forward-btn');
const volumeBtn = document.querySelector('.volume-btn');
const playSvg = document.querySelector('.icon-play');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const audioCurrentTime = document.querySelector('.current-time');
const audioFullLength = document.querySelector('.full-length');
const audio = new Audio();
let isPlay = false;


const songs = [
    {
        index: 0,
        name: `Power Glove - Loaded`,
        coverImg: `../audio-player/assets/covers/power_glove-playback.jpg`,
        audioSrs: `../audio-player/assets/audio/loaded.mp3`
    }, {
        index: 1,
        name: `Dance With the Dead - Master of Puppets`,
        coverImg: `../audio-player/assets/covers/dwtd.jpg`,
        audioSrs: `../audio-player/assets/audio/master_of_puppets.mp3`    
    }, {
        index: 2,
        name: `GUNSHIP - Dark All Day`,
        coverImg: `../audio-player/assets/covers/dark_all_day.jpg`,
        audioSrs: `../audio-player/assets/audio/dark_all_day.mp3`    
    }, {
        index: 3,
        name: `Carpenter Brut – Night Stalker`,
        coverImg: `../audio-player/assets/covers/night_stalker.jpg`,
        audioSrs: `../audio-player/assets/audio/night_stalker.mp3`    
    }, {
        index: 4,
        name: `the Midnight - Nocturnal`,
        coverImg: `../audio-player/assets/covers/nocturnal.jpg`,
        audioSrs: `../audio-player/assets/audio/nocturnal.mp3`
    }
]

let current = 0;
audio.src = songs[current].audioSrs;

// =============>>> EVENTS <<<============= //
playBtn.addEventListener('click', playPauseAudio);
audio.addEventListener('timeupdate', fillProgress);
progressBar.addEventListener('click', updateProgress);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('ended', nextSong);


// console.log(playSvg.innerHTML);

// =============>>> FUNCTIONS <<<============= //

function playPauseSong(){   
    if (audio.duration > 0 && !audio.paused) {
        audio.pause();
        playSvg.innerHTML = `<use xlink:href="./assets/svg/sprite.svg#media-pause"></use>`;        
    } else {        
        audio.play();
        playSvg.innerHTML = `<use xlink:href="./assets/svg/sprite.svg#media-play"></use>`;
    }
}

function playAudio() {
    audio.src = songs[current].audioSrs;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;   
}
function pauseAudio() {
    audio.pause();
    isPlay = false;   
}
function playPauseAudio(){
    if (isPlay) {       
        audio.pause();
        isPlay = false;
        playSvg.innerHTML = `<use xlink:href="./assets/svg/sprite.svg#media-play"></use>`; 
    } else if (!isPlay) {  
        audio.play();
        isPlay = true;
        playSvg.innerHTML = `<use xlink:href="./assets/svg/sprite.svg#media-pause"></use>`;
    }
}

function nextSong() {
    current++;
    playNextOrBack();
}
function prevSong() {
    current--;
    playNextOrBack();
}
function playNextOrBack(){
    if (current > songs.length - 1) {
        current = 0;
    } else if (current < 0) {
        current = songs.length - 1;
    }   
    songName.textContent = songs[current].name;
    audio.srs = songs[current].audioSrs;
    coverImg.src = songs[current].coverImg;    
    playAudio();   
    
    // console.log(audio.srs);
}

function fillProgress(e) {
    progress.style.width = audio.currentTime / audio.duration * 100 + "%";

    let minsCurrent = Math.floor(audio.currentTime / 60);
    let secsCurrent = Math.floor(audio.currentTime % 60);
    if (minsCurrent < 10) {
        minsCurrent = '0' + minsCurrent;
    }
    if (secsCurrent < 10) {
        secsCurrent = '0' + secsCurrent;
    }
    audioCurrentTime.textContent = `${minsCurrent}:${secsCurrent}`;

    let minsFull = parseInt(audio.duration / 60, 10);
    let secsFull = parseInt(audio.duration % 60);
    if (minsFull < 10) {
        minsFull = '0' + minsFull;
    }
    if (secsFull < 10) {
        secsFull = '0' + secsFull;
    }
    audioFullLength.textContent = `${minsFull}:${secsFull}`;
}

function updateProgress(e) {
    audio.currentTime = (e.offsetX / this.clientWidth) * audio.duration;
}

    let tickName = songName.textContent.split('');
    tickName.push('  ');
     
    let indexStart = 1, indexTicker;

function tickerName() {
    indexTicker = indexStart;
    let tickChange = [];
    // console.log(tickOut);
    for(let i = 0; i < tickName.length - 1; i++) {
        tickChange[i] = tickName[indexTicker];
        indexTicker++;
        if(indexTicker >= tickName.length) {
            indexTicker = 0;
        }
    }
    indexTicker = indexStart;
    let tickEnd = tickChange.join('');
    console.log(indexTicker);
    console.log(tickEnd);
    songName.textContent = tickEnd;
    if(indexStart >= tickName.length){
        indexStart = 0;
    } else {
        indexStart++;
    }
  
   
    
}

//    setInterval(tickerName, 2000);


// // остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);