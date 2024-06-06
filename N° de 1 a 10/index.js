// Números de 1 a 10 ordenados de forma crescente e decrescente

let resultado = document.getElementById('res')

const crescente = () =>{
    let texto = ''
    for(let num = 1; num <= 10; num++){
        texto += num + '<br>'
    }
    resultado.innerHTML = texto
}

const decrescente = () =>{
    let texto = ''
    for(let num = 10; num >= 1; num--){
        texto += num + '<br>'
    }
    resultado.innerHTML = texto
}