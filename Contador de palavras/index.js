let palavraUser = document.getElementById('palavra')
let clicar = document.getElementById('contar')
let res = document.getElementById('res')
clicar.addEventListener('click', contar)

function contar(){
let digitado = palavraUser.value.trim()
    if (digitado.length === 0) {
        res.innerHTML = "Digite algo."

    } else{  //Percorrer pela string
        let palavras = digitado.split(' ')
        let numPalavras = palavras.length
        res.innerHTML = `O texto tem ${numPalavras} ${numPalavras === 1 ? 'palavra' : 'palavras'}.`
    }
}