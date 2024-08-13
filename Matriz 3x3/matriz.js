// Crie um programa que solicite ao usuario inserir valores numa matriz de ordem 3x3. No final o programa deverá apresentar os valores inseridos pelo usuário.

var input = require('readline-sync')

function cabecalho(){
    console.log('--------------------')
    console.log('-----MATRIZ 3x3-----')
    console.log('--------------------')
}

function rodape(){
    console.log('--------------------')
}

function criarMatriz(nLinha, nColuna){
    let matriz = []
    let array = []
    let contador = 1

    for(let linha = 0; linha < nLinha; linha++){
        for(let coluna = 0; coluna < nColuna; coluna++){
            array.push(input.question(`Digite ${contador} valor: `))
            contador++ 
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

let matriz3x3 = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 3

// Entrada de dados
cabecalho()
matriz3x3 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)

// Processamento e saída de dados
console.clear()
mostrarMatriz(matriz3x3)
rodape()