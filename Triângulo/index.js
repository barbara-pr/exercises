/* Ler 3 valores (cada um representando a medida de um triângulo) e escrever se formam ou não um triângulo.
OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. */

const verificarTriangulo = () => {
    let valor1 = parseFloat(document.getElementById('n1').value)
    let valor2 = parseFloat(document.getElementById('n2').value)
    let valor3 = parseFloat(document.getElementById('n3').value)
    let resultado = document.getElementById('res')

    if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3)){
        resultado.textContent = 'Preencha todos os campos com valores válidos!'
        return
    }

    if((valor1 < (valor2 + valor3)) && (valor2 < (valor1 + valor3)) && (valor3 < (valor1 + valor2))){
        resultado.textContent = 'É triângulo!'
    } else{
        resultado.textContent = 'Não é triângulo!'
    } 
}