// const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.stop-btn');
const audio = new Audio();
let isPlay = false;

function playAudio() {
    audio.src = '/porfolio/kostili-tec-JSFEPRESCHOOL/audio-player/assets/audio/loaded.mp3'
    audio.currentTime = 0;
    audio.play();
}
function pauseAudio() {
    audio.pause();
}

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);