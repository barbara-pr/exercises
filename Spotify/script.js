const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document. getElementById('play');
const next = document. getElementById('next');
const previous = document. getElementById('previous');
const likeButton = document. getElementById('like');
const currentProgress = document. getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');
const shuffleButton = document.getElementById('shuffle');
const repeatButton = document.getElementById('repeat');
const songTime = document.getElementById('song-time');
const totalTime = document.getElementById('total-time');

const underPressure = {
    songName: 'Under Pressure',
    artist: 'Queen',
    file: 'Queen - Under Pressure (Lyrics)',
    liked: false
};

const hotelCalifornia = {
    songName: 'Hotel California',
    artist: 'Eagles',
    file: 'Hotel California (2013 Remaster)',
    liked: false
};

const itsMyLife = {
    songName: 'It\'s My Life',
    artist: 'Bon Jovi',
    file: 'It\'s My Life',
    liked: false
};

const andILoveHer = {
    songName: 'And I Love Her',
    artist: 'The Beatles',
    file: 'And I Love Her',
    liked: false
};

// Variáveis auxiliares que ajudam a visualizar se a função está ou não habilitada
let isPlaying = false;
let isShuffled = false;
let repeatOn = false;
// O botão de 'like' deve gerenciar o estado de cada música individualmente. Se uma música for descurtida, isso não deve afetar as outras, por isso vamos definir a variável auxiliar para cada uma

// Se a playlist armazenada não existir, o operador '??' fornece uma lista padrão.
const originalPlaylist = JSON.parse(localStorage.getItem('playlist')) ?? [underPressure, hotelCalifornia, itsMyLife, andILoveHer];
/* const originalPlaylist = [underPressure, hotelCalifornia, itsMyLife, andILoveHer]; --> Referência de como é a ordem originalmente */
let sortedPlaylist = [...originalPlaylist]; // Espalhando o conteúdo do array original
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

// Função para estilizar o botão de 'like'
function likeButtonRender(){
    if(sortedPlaylist[index].liked === true){
        likeButton.querySelector('.bi').classList.remove('bi-heart');
        likeButton.querySelector('.bi').classList.add('bi-heart-fill');
        likeButton.classList.add('button-active');
    } else{
        likeButton.querySelector('.bi').classList.add('bi-heart');
        likeButton.querySelector('.bi').classList.remove('bi-heart-fill');
        likeButton.classList.remove('button-active');
    }
}

function initializeSong(){
    cover.src = `images/${sortedPlaylist[index].file}.jpg`;
    song.src = `songs/${sortedPlaylist[index].file}.mp4`;
    songName.innerText = sortedPlaylist[index].songName;
    bandName.innerText = sortedPlaylist[index].artist;
    likeButtonRender();
}

function previousSong(){
    if(index === 0){
        index = sortedPlaylist.length - 1;
    }
    else{
        index -= 1
    }
    initializeSong();
    playSong(); // Quando mudar a música ela já vai iniciar tocando
}

function nextSong(){
    if(index === sortedPlaylist.length - 1){
        index = 0;
    }
    else{
        index += 1
    }
    initializeSong();
    playSong();
}

// Função para atualizar a barra de progresso e o tempo
function updateProgress(){
    /*
    song.currentTime // Quantos segundos já foram tocados
    song.duration // Duração total da música em segundos
    */
    const barWidth = (song.currentTime/song.duration)*100; // Dividindo o que foi tocado pelo total para encontrar o percentual da largura
    currentProgress.style.setProperty('--progress',`${barWidth}%`) // Mudando a propriedade
    songTime.innerText = toHHMMSS(song.currentTime);
}

// Função para o user pular para determinada parte da música
function jumpTo(event){
    // Este parâmetro 'event' faz com que saibamos onde foi esse clique (em qual tempo da música), garante que quando essa função for chamada ela terá acesso ao clique dado
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX // O quanto eu cliquei a partir do início
    const jumpToTime = (clickPosition/width) * song.duration;
    song.currentTime = jumpToTime;
}

function shuffleArray(preShuffleArray){ // Ela quer um array antes de ser embaralhado
    let size = sortedPlaylist.length;
    let currentIndex = size - 1; // Por que o índice coemaça em 0
    while(currentIndex > 0){
        // Agora geramos um índice aleatório
        let randomIndex = Math.floor(Math.random() * size); // Math.random não retorna n° inteiro, mas queremos ele inteiro e Math.floor mata o que vem depois da vírgula
        let aux = preShuffleArray[currentIndex];
        preShuffleArray[currentIndex] = preShuffleArray[randomIndex];
        preShuffleArray[randomIndex] = aux;
        currentIndex -= 1;
    }
}

function shuffleButtonClicked(){
    if(isShuffled === false){
        isShuffled = true; // Afirmando que, após o clique, está sim embaralhado         
        shuffleArray(sortedPlaylist); // Embaralha de fato o sortedPlaylist
        shuffleButton.classList.add('button-active'); // Pego a lista de classes que ele tem e adiciono mais uma classe à ela (que contém o estilo do botão após ser embaralhado)
    }
    else{
        isShuffled = false;
        sortedPlaylist = [...originalPlaylist]; // Desembaralha
        shuffleButton.classList.remove('button-active'); // Desativa o CSS anterior
    }
}

function repeatButtonClicked(){
    if(repeatOn === false){
        repeatOn = true;
        repeatButton.classList.add('button-active'); 
    }
    else{
        repeatOn = false;
        repeatButton.classList.remove('button-active');
    }
}

function nextOrRepeat(){
    if(repeatOn === false){
        nextSong();
    }
    else{
        playSong();
    }
}

// Função para formatar o tempo (em string)
function toHHMMSS(originalNumber){
    // Math.floor só usa o que vem antes da vírgula
    let hours = Math.floor(originalNumber / 3600); // Número de horas 
    let min = Math.floor((originalNumber - hours * 3600) / 60);
    let secs = Math.floor(originalNumber - hours * 3600 - min * 60);

    return `${hours.toString().padStart(2, '0')}:${min
        .toString()
        .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTotalTime(){
    toHHMMSS(song.duration);
    totalTime.innerText = toHHMMSS(song.duration);
}

function likeButtonClicked(){
    if(sortedPlaylist[index].liked === false){
        sortedPlaylist[index].liked = true;
    }else{
        sortedPlaylist[index].liked = false;
    }
    likeButtonRender();

    // BACK-END: O botão de 'like' exige um armazenamente daquela informação, o like deve ficar registrado num banco de dados. Os navegadores tem o recurso de localStorage: armazenamente local do navegador
    // 'setItem' = registre um item (PARÂMETROS: nome dado ao item e quem é esse item)
    localStorage.setItem('playlist', JSON.stringify(originalPlaylist));
}

initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgress); // Evento para reagir ao progresso da música
song.addEventListener('ended', nextOrRepeat); // Evento para quando a música acabar
song.addEventListener('loadedmetadata', updateTotalTime);
progressContainer.addEventListener('click', jumpTo);
shuffleButton.addEventListener('click', shuffleButtonClicked);
repeatButton.addEventListener('click', repeatButtonClicked);
likeButton.addEventListener('click', likeButtonClicked);