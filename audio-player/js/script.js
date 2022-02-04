// const audio = document.querySelector('audio');
const coverImg = document.querySelector('.album-cover__img');
const songName = document.querySelector('.song-name__h1');
const playBtn = document.querySelector('.play-btn');
const pauseBtnTest = document.querySelector('.pause-btn'); // PAUSE
const pauseBtn = document.querySelector('.stop-btn');
const prevBtn = document.querySelector('.backward-btn');
const nextBtn = document.querySelector('.forward-btn');
const playSvg = document.querySelector('.icon-play');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const audioCurrentTime = document.querySelector('.current-time');
const audioFullLength = document.querySelector('.full-length');
// const audio = new Audio('../audio-player/assets/audio/loaded.mp3');
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
        name: ``,
        coverImg: `../audio-player/assets/covers/`,
        audioSrs: `../audio-player/assets/audio/`    
    }, {
        index: 4,
        name: ``,
        coverImg: `../audio-player/assets/covers/`,
        audioSrs: `../audio-player/assets/audio/`
    }
]

let current = 1;
audio.src = songs[current].audioSrs;
console.log(songs[current].name);

// =============>>> EVENTS <<<============= //
playBtn.addEventListener('click', playPauseSong);
pauseBtnTest.addEventListener('click', pauseAudio);
audio.addEventListener('timeupdate', fillProgress);
progressBar.addEventListener('click', updateProgress);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
// pauseBtn.addEventListener('click', pauseAudio);

// console.log(playSvg.innerHTML);

// =============>>> FUNCTIONS <<<============= //

function playPauseSong(){
    console.log(songs[current].name);
    if (audio.duration > 0 && !audio.paused) {
        audio.pause();
        playSvg.innerHTML = `<use xlink:href="./assets/svg/sprite.svg#media-pause"></use>`;        
    } else {
        //audio.src = '../audio-player/assets/audio/loaded.mp3';
        audio.play();
        playSvg.innerHTML = `<use xlink:href="./assets/svg/sprite.svg#media-play"></use>`;
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
    audio.play();
    
    console.log(audio.srs);
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

function playAudio() {
    audio.src = '/porfolio/kostili-tec-JSFEPRESCHOOL/audio-player/assets/audio/loaded.mp3'
    audio.currentTime = 0;
    audio.play();
}
function pauseAudio() {
    audio.pause();
    console.log('click');
}

