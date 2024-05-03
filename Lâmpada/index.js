let liga = document.getElementById('ligar')
let desliga = document.getElementById('desligar')
let lampada = document.getElementById('lampNormal')

liga.addEventListener('click', ligar)
function ligar(){
    lampada.src = 'img/ligada.jpg'
}

desliga.addEventListener('click', desligar)
function desligar(){
    lampada.src = 'img/desligada.jpg'
}

lampada.addEventListener('mouseenter', entrar)
function entrar(){
    if(!quebrada()){
        lampada.src = 'img/ligada.jpg'
    }
}

lampada.addEventListener('mouseout', sair)
function sair(){
    if(!quebrada()){
        lampada.src = 'img/desligada.jpg'
    }
}

lampada.addEventListener('dblclick', quebrar)
function quebrar(){
    lampada.src = 'img/quebrada.jpg'
}

function quebrada(){
    return lampada.src.indexOf('quebrada') > -1
}