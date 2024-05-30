const dividir = () => {
    let valor1 = parseFloat(document.getElementById('n1').value)
    let valor2 
    let resultado = document.getElementById('res')
    let validInput = false // controlar o loop

    do {
        valor2 = parseFloat(document.getElementById('n2').value);
        if (isNaN(valor2) || valor2 === 0) {
            resultado.textContent = 'Preencha todos os campos e insira um valor diferente de zero no divisor.'
            return
        } else {
            validInput = true
        }
    } while (!validInput)

    if (!isNaN(valor1) && validInput) {
        let divisao = valor1 / valor2
        resultado.textContent = `Resultado da divisão ${valor1} por ${valor2} é: ${divisao}`
    } 
}