let lampada = document.getElementById('lampNormal')
let interruptor = document.getElementById('turnOnOff')

lampada.addEventListener('click', ligar)
function ligar(){
    if(!quebrada()){
        lampada.src = 'img/ligada.jpg'
    }
}

lampada.addEventListener('click', desligar)
function desligar(){
    if(!quebrada()){
        lampada.src = 'img/desligada.jpg'
    }
}

interruptor.addEventListener('click', lampOnOff)
function lampOnOff() {
    if (interruptor.src.endsWith('off.jpg') && !quebrada()) {
        ligar()
        interruptor.src = 'img/on.jpg'
    } else {
        desligar()
        interruptor.src = 'img/off.jpg'
    }
}

lampada.addEventListener('mouseenter', entrar)
function entrar(){
    if(!quebrada()){
        lampada.src = 'img/ligada.jpg'
        interruptor.src = 'img/on.jpg'
    }
}

lampada.addEventListener('mouseout', sair)
function sair(){
    if(!quebrada()){
        lampada.src = 'img/desligada.jpg'
        interruptor.src = 'img/off.jpg'
    }
}

lampada.addEventListener('dblclick', quebrar)
function quebrar(){
    lampada.src = 'img/quebrada.jpg'
}

function quebrada(){
    return lampada.src.indexOf('quebrada') > -1
}