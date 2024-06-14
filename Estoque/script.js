/*
Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva um algoritmo que permita a entrada das seguintes informações: 
a) O número total de mercadorias no estoque
b) O valor de cada mercadoria
Ao final imprimir o valor total em estoque e a média do valor das mercadorias.
*/

const calcular = () => {
    let totMercadorias = parseInt(document.getElementById('total').value)
    let totEstoque = 0
    let res = document.getElementById('res')
    let valorMercadorias

    if(isNaN(totMercadorias) || totMercadorias <= 0){
        res.innerHTML = `Preencha o campo acima com um número válido!`
        return
    }

    try{
        for(let cont = 1; cont <= totMercadorias; cont++){
            valorMercadorias = parseFloat(prompt("Entre com o valor: "))
            if (isNaN(valorMercadorias) || valorMercadorias <= 0) {
                res.innerHTML = 'Por favor, entre com um valor válido para cada mercadoria!'
                return
            }
            totEstoque += valorMercadorias
        }

        let mediaMercadorias = totEstoque / totMercadorias
        res.innerHTML = `Valor total em estoque é R$${totEstoque.toFixed(2)} <br>
        Média do valor por mercadorias em estoque é R$${mediaMercadorias.toFixed(2)}`
    }

    catch(erro){
        res.innerHTML = `Ocorreu um erro: ${erro.message}`
    }
}