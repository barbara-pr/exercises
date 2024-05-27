'use strict'; //para pegar más práticas que cometemos e nos mostrar um ERRO

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const criarDiv = (texto) => { //uma função é definida e atribuída à const criarDiv (texto é parâmetro)
    const div = document.createElement('div'); //essa div só existe na memória, ainda não foi p/ o HTML
    div.classList.add('key');  // adiciona a classe 'key' (está no CSS) à div
    div.textContent = texto; //define o conteúdo de texto da div com o valor passado como parâmetro texto
    div.id = texto;
    document.getElementById('container').appendChild(div); //adiciona a div criada e configurada ao elemento com o ID container presente no documento HTML.
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}

const adicionarEfeito = (letra) => document.getElementById(letra)
                                           .classList.add('active');

const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    setTimeout(removeActive,100)
    /*div.addEventListener('transitionend',removeActive);*/
};

const ativarDiv = (evento) => {

    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();

    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida){
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
}


exibir(sons);
document.getElementById('container')
        .addEventListener('click', ativarDiv);

window.addEventListener('keydown',ativarDiv);