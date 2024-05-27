//Retornar o antecessor do número digitado pelo usuário

const criarInput = (tipo, placeholder, id) => {
    const input = document.createElement('input') // criar um elemento input na memória
    input.type = tipo // definir o 'type' do input
    input.placeholder = placeholder // definir o 'placeholder' do input
    input.id = id // definir o 'id' do input
    document.getElementById('inputUser').appendChild(input) // adiciona o input ao ID do HTML
}

criarInput('number', 'Digite um número', 'meuInput')

const calcularAntecessor = () => {
    const inputElement = document.getElementById('meuInput')
    const numero = parseInt(inputElement.value)
    if (isNaN(numero)) {
        document.getElementById('res').textContent = 'Por favor, insira um número válido.'
    } else {
        const antecessor = numero - 1
        document.getElementById('res').textContent = `O antecessor de ${numero} é ${antecessor}.`
    }
}