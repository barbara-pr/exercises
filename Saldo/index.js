/* 
Faça um algortimo para ler o número da conta do cliente, saldo, débito e crédito. Após calcular e escrever o saldo atual, também verificar se o aldo atual é maior ou igual a zero e escrever a mensagem "saldo positivo" ou "saldo negativo".
*/

const verificar = () => {
    // Seleciona os inputs
    const contaUser = parseInt(document.getElementById('conta').value)
    const saldoUser = parseFloat(document.getElementById('saldo').value)
    const debitoUser = parseFloat(document.getElementById('debito').value)
    const creditoUser = parseFloat(document.getElementById('credito').value)
    const res = document.getElementById('res')

    // convertendo os valores dos inputs para um array para não ter que fazer vários "isNaN"
    const valores = [contaUser, saldoUser, debitoUser, creditoUser]

    if (valores.some(valor => isNaN(valor))) {
        res.textContent = "Digite números válidos."
        return
    }
    // crédito = entrada
    // débito = saída
    const saldoAtual = saldoUser + creditoUser - debitoUser 

    res.textContent = `Saldo Atual: R$ ${saldoAtual.toFixed(2)}. `

    if (saldoAtual >= 0) {
        res.textContent += "Saldo positivo!"
    } else {
        res.textContent += "Saldo negativo!"
    }
}