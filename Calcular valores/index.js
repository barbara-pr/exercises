/* 
Uma revendedora de carros usados paga a seus vendedores um salário fixo por mês, mais uma comissão fixa por carro vendido e mais 5% sobre o total de vendas efetuadas. 
- Escreva um algoritmo que leia o número de carros vendidos, o valor total das vendas, o valor que ele recebe por cada carro e o salário fixo e calcule o salário do mesmo.
*/

const calcular = () => {
    const totalCarrosVendidos = parseInt(document.getElementById('carrosVendidos').value)
    const valorTotalVendas = parseFloat(document.getElementById('valorTotalVendas').value)
    const comissaoPorCarro = parseFloat(document.getElementById('comissao').value)
    const salarioFixo = parseFloat(document.getElementById('salario').value)
    const resposta = document.getElementById('res')

    if (isNaN(totalCarrosVendidos) || isNaN(valorTotalVendas) || isNaN(comissaoPorCarro) || isNaN(salarioFixo)) {
        resposta.textContent = 'Por favor, insira números válidos em todos os campos.'
        return
    }

    const comissaoTotal = totalCarrosVendidos * comissaoPorCarro
    const bonusPercentual = valorTotalVendas * 0.05
    const salarioFinal = salarioFixo + comissaoTotal + bonusPercentual

    resposta.innerHTML = `
        <p>O número de carros vendidos foi ${totalCarrosVendidos}</p>
        <p>O valor total das vendas foi R$ ${valorTotalVendas.toFixed(2)}</p>
        <p>O valor da comissão por carro é R$ ${comissaoPorCarro.toFixed(2)}</p>
        <p>O salário fixo é R$ ${salarioFixo.toFixed(2)}</p>
        <p>O salário final é R$ ${salarioFinal.toFixed(2)}</p>
    `
}