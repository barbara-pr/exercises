// Escreva um algoritmo para ler 5 números e ao final da leitura escrever a soma total dos 5 números lidos.

let res = document.getElementById('res')

const inputUser = () => {
    try{
        let soma = 0
        let arrayNum = []

        for(let i = 0; i < 5; i++){
            let inputs = prompt("Digite até o 5° número: ")
            let num = parseFloat(inputs)

            if (isNaN(num)) { 
                throw new Error("Valor inválido inserido")
            }

            arrayNum.push(num)
            soma += num
        }
        res.textContent = `A soma dos números é: ${soma}`
    } catch (error) {
        res.textContent = 'ERROR!' +  error.message
    }
}