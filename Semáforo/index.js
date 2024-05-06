const vermelho = document.getElementById('vermelho')
const amarelo = document.getElementById('amarelo')
const verde = document.getElementById('verde')
const automatico = document.getElementById('automatico')

vermelho.addEventListener('click', userVermelho)
function userVermelho(){
    imgNormal.src = "img/vermelho.png"
    clearInterval(intervalId)
}

amarelo.addEventListener('click', userAmarelo)
function userAmarelo(){
    imgNormal.src = "img/amarelo.png"
    clearInterval(intervalId)
}

verde.addEventListener('click', userVerde)
function userVerde(){
    imgNormal.src = "img/verde.png"
    clearInterval(intervalId)
}

let luz = 0 //uma espécie de array
let intervalId 

automatico.addEventListener('click', userAutomatico)

function userAutomatico(){
    //para pausar a execução automática
    clearInterval(intervalId)
    
    intervalId = setInterval(function()  {
        if (luz === 0) {
            imgNormal.src = "img/vermelho.png"
        } else if (luz === 1) {
            imgNormal.src = "img/amarelo.png"
        } else if (luz === 2) {
            imgNormal.src = "img/verde.png"
        }
        
        luz++
        
        //reiniciando o ciclo
        if (luz === 3) {
            luz = 0
        }
    }, 1000) //1000 milissegundos (1 segundo)
}