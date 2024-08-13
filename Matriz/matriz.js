// Crie um programa que solicite ao usuario inserir valores numa matriz de ordem 3x3. No final o programa deverá apresentar os valores inseridos pelo usuário, destacando os valores pares e a quantidade.

var input = require('readline-sync')

let matriz3x3 = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 3
let matrizPar = []
let totalPar = 0

function criarMatriz(nLinha, nColuna){
    let matriz = []
    let array = []

    for(let linha = 0; linha < nLinha; linha++){
        for(let coluna = 0; coluna < nColuna; coluna++){
            array.push(input.question(`Digite o valor [${linha}][${coluna}]: `))
        }
        matriz.push(array)
        array = []
    }
    return matriz
}

function mostrarMatriz(matriz){
    for(let contador = 0; contador < matriz.length; contador++){
        console.log(matriz[contador])
    }
}

function matrizComPar(matriz){
    for(let linha = 0; linha < matriz.length; linha++){
        for(let coluna = 0; coluna < matriz.length; coluna++){
            if(Number(matriz[linha][coluna] % 2 == 0)){
                matriz[linha][coluna] = `(${matriz[linha][coluna]})`
            }
        }
    }
    return matriz
}

function somaMatrizPar(matriz){
    let soma = 0
    for(let linha = 0; linha < matriz.length; linha++){
        for(let coluna = 0; coluna < matriz.length; coluna++){
            if(Number(matriz[linha][coluna] % 2 == 0)){
                soma++
            }
        }
    }
    return soma
}


matriz3x3 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)

totalPar = somaMatrizPar(matriz3x3)
matrizPar = matrizComPar(matriz3x3)

matrizPar = matrizComPar(matriz3x3)
mostrarMatriz(matriz3x3)
mostrarMatriz(matrizPar)
console.log(`Total dos valores pares: ${totalPar}`)