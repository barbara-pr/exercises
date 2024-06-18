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

function fatorial(numUser) {
    let fat = 1

    if (numUser === 0 || numUser === 1) {
        return 1
    } else {
        for(let cont = numUser; cont > 1; cont--){
            fat *= cont
        } 
        return fat
    }
}