let numUser = document.getElementById('num')
let ver = document.getElementById('verificar')
ver.addEventListener('click', primo)
 
function primo() {
    let numUserP = parseInt(numUser.value)
    if (isNaN(numUserP) || numUserP < 0) {
        res.innerHTML = "Número inválido!"

    } else {
        let isPrimo = true
        for (let i = 2; i <= Math.sqrt(numUserP); i++) {
            if (numUserP % i === 0) {
                isPrimo = false
                break
            }
        }
        if (numUserP === 1 || numUserP === 0){
            isPrimo = false
        }

        res.innerHTML = `O número ${numUserP} ${isPrimo ? "é" : "não é"} primo!`
    }
}