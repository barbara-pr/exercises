//Pedir ao usuário dois números e apresentar o resultado da multiplicação entre eles SEM utilizar o operador de multiplicação

/* LEMBRE-SE: Enquanto na adição você está simplesmente combinando duas quantidades, na multiplicação você está multiplicando uma quantidade pelo número de vezes indicado pelo outro número */

let resultado = document.getElementById('res')

const verificar = () =>{
    let n1 = parseInt(document.getElementById('n1').value)
    let quantidade = parseInt(document.getElementById('n2').value)

    if(isNaN(n1) || isNaN(quantidade)){
        resultado.innerHTML = `Preencha todos os campos!`
        return
    }else {
        let multiplicacao = 0
        for (let i = 0; i < quantidade; i++) {
          multiplicacao += n1
        }
        resultado.innerHTML = `Resultado: ${multiplicacao}`
    }
}