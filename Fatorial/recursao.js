// O usuário digita um número e o programa retorna o fatorial dele.

function calcularFatorial() {
    let res = document.getElementById('res')
    let numUser = Number(document.getElementById('num').value)

    if (isNaN(numUser) || numUser < 0 || numUser == '') {
        res.innerHTML = "Preencha o campo com um número válido!"
        return
    } else {
        let resultado = fatorial(numUser)
        res.innerHTML = `O fatorial do número ${numUser} é ${resultado}.`
    }
}

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}