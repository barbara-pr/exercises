const verificar = () => {
    let number1 = parseInt(document.getElementById('n1').value)
    let number2 = parseInt(document.getElementById('n2').value)
    let res = document.getElementById('res')

    if(isNaN(number1) || isNaN(number2)){
        res.innerHTML = "Digite números válidos."
        return
    }
    
    if(number1 > number2){
        res.innerHTML = "O primeiro número é maior que o segundo."
        return
    } else if (number1 < number2) {
        res.textContent = "O segundo número é maior que o primeiro."
    } else {
        res.textContent = "Os dois números são iguais."
    }
}