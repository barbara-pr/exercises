const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document. getElementById('play');
const next = document. getElementById('next');
const previous = document. getElementById('previous');
const currentProgress = document. getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');
const shuffleButton = document.getElementById('shuffle');

const underPressure = {
    songName: 'Under Pressure',
    artist: 'Queen',
    file: 'Queen - Under Pressure (Lyrics)'
};

const hotelCalifornia = {
    songName: 'Hotel California',
    artist: 'Eagles',
    file: 'Hotel California (2013 Remaster)'
};

const itsMyLife = {
    songName: 'It\'s My Life',
    artist: 'Bon Jovi',
    file: 'It\'s My Life'
};

const andILoveHer = {
    songName: 'And I Love Her',
    artist: 'The Beatles',
    file: 'And I Love Her'
};

let isPlaying = false;
let isShuffled = false;

const playlist = [underPressure, hotelCalifornia, itsMyLife, andILoveHer];
let index = 0;

function playSong(){
    // A classe tem uma lista com os ícones do bootstrap, mas só a classe pai olha para todas elas
    // Pega só o próprio 'bi', pois a classe play só olha para ela mesma
    // .remove não remove a tag, remove a classe
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong();
    }
    else{
        playSong();
    }
}

function initializeSong(){
    cover.src = `images/${playlist[index].file}.jpg`;
    song.src = `songs/${playlist[index].file}.mp4`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

function previousSong(){
    if(index === 0){
        index = playlist.length - 1;
    }
    else{
        index -= 1
    }
    initializeSong();
    playSong(); // Quando mudar a música ela já vai iniciar tocando
}

function nextSong(){
    if(index === playlist.length - 1){
        index = 0;
    }
    else{
        index += 1
    }
    initializeSong();
    playSong();
}

function updateProgressBar(){
    /*
    song.currentTime // Quantos segundos já foram tocados
    song.duration // Duração total da música em segundos
    */
    const barWidth = (song.currentTime/song.duration)*100; // Dividindo o que foi tocado pelo total para encontrar o percentual da largura
    currentProgress.style.setProperty('--progress',`${barWidth}%`) // Mudando a propriedade
}

// Função para o user pular para determinada parte da música
function jumpTo(event){
    // Este parâmetro 'event' faz com que saibamos onde foi esse clique (em qual tempo da música), garante que quando essa função for chamada ela terá acesso ao clique dado
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX // O quanto eu cliquei a partir do início
    const jumpToTime = (clickPosition/width) * song.duration;
    song.currentTime = jumpToTime;
}

function shuffleButtonClicked(){
    if(isShuffled === false){
        isShuffled = true;
        shuffleArray();
    }
}

initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgressBar); // Evento para reagir ao progresso da música
progressContainer.addEventListener('click', jumpTo);
shuffleButton.addEventListener('click', shuffleButtonClicked);