// uma condição para a altura ser formatada automaticamente
document.getElementById('altura').addEventListener('input', function() {
    let altura = this.value.replace(/[^\d]/g, '')
    if (altura.length >= 3) {
        altura = altura.slice(0, -2) + '.' + altura.slice(-2)
    }
    this.value = altura 
})

function medir(){
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value.replace(',', '.'))
    let res = document.getElementById('res')

    let calc = peso / (altura * altura)

    if(calc < 18.5){
        res.innerHTML = 'Abaixo do peso!'
    }
    else if(calc >= 18.5 && calc < 25.0){
        res.innerHTML = 'Peso ideal!'
    }
    else if(calc >= 25.0 && calc < 29.9){
        res.innerHTML = 'Levemente acima do peso!'
    }
    else if(calc >= 30.0 && calc < 34.9){
        res.innerHTML = 'Obesidade grau I!'
    }
    else if(calc >= 35.0 && calc < 39.9){
        res.innerHTML = 'Obesidade grau II (severa)!'
    }
    else if(calc >= 40.0){
        res.innerHTML = 'Obesidade grau III (mórbida)!'
    }
    else{
        res.innerHTML = 'Digite valores válidos!'
    }
}