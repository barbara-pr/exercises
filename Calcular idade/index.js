let anoAtual = new Date().getFullYear()
let anoUser = document.getElementById('ano')
let gerarAge = document.getElementById('gerar')
let res = document.getElementById('res')
gerarAge.addEventListener('click', idade)

function idade(){
    let anoNascimento = parseInt(anoUser.value);
    if (isNaN(anoNascimento) || anoNascimento <= 0 || anoNascimento > anoAtual) {
        res.innerHTML = "Ano inválido!"
    } else {
        let calcIdade = anoAtual - anoNascimento
        res.innerHTML = `Sua idade é ${calcIdade}`
    }
}