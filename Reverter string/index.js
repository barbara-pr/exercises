let palavraUser = document.getElementById('palavra')
let rev = document.getElementById('reverte')
let res = document.getElementById('res')
rev.addEventListener('click', reverter)

function reverter() {
    let palavra = palavraUser.value;
    if (palavra.length === 0) {
        res.innerHTML = "Digite algo."

    } else {
        let palavraRevertida = ""
        for (let i = palavra.length - 1; i >= 0; i--) {
            palavraRevertida += palavra[i]
        }
        res.innerHTML = "String revertida: " + palavraRevertida
    }
}