// Ler 3 valores e colocá-los em ordem crescente.
 
const criarInput = (tipo, placeholder, id, quantidade) => {
    for (let i = 1; i <= quantidade; i++){
        const input = document.createElement('input') // criar um elemento input na memória
        input.type = tipo 
        input.placeholder = placeholder 
        input.id = `${id}${i}` // concatenando o valor de id com o índice i
        document.getElementById('inputUser').appendChild(input) // adiciona o input ao ID do HTML
    }
}
criarInput('number', 'Digite um número', 'meuInput', 3)


const ordenar = () => {
    const valores = []
    for (let i = 1; i <= 3; i++) {
        const input = document.getElementById(`meuInput${i}`) // meuInput1, meuInput2 ou meuInput3
        if (input && input.value !== '') { // verifica se o input existe e se seu valor não está vazio
            valores.push(Number(input.value)) // adicionando no array os valores já convertidos em n°
        }
    }

    if (valores.length === 3) { // verificando se três valores foram coletados
        let a = valores[0]
        let b = valores[1]
        let c = valores[2]
        let temp // variável temporária para auxiliar na troca de valores

        if (a > b) {
            temp = a
            a = b // agora 'a' tem o valor de 'b'
            b = temp // agora 'b' tem o valor de 'a'
        }
        if (a > c) {
            temp = a
            a = c
            c = temp
        }
        if (b > c) {
            temp = b
            b = c
            c = temp
        }

        document.getElementById('res').innerText = `Valores ordenados: ${a}, ${b}, ${c}`
    } else {
        document.getElementById('res').innerText = 'Por favor, insira todos os três números.'
    }
}

/* 
- Na varredura de array em estrutura de dados é assim, tem uma variável temporária que armazena o valor maior temporariamente para executar a troca e aí esse valor retorna para o índice que estava e a análise do array continua até que esteja ordenado completamente. 
- Embora não seja a mais eficiente para grandes conjuntos de dados, é uma ótima maneira de entender os fundamentos da ordenação de valores.
- A variável temporária (temp) serve como um espaço de armazenamento provisório para garantir que nenhum dado seja perdido durante a troca.
 */