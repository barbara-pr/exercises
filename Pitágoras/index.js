/* 
c² = a² + b²
'c' = comprimento da hipotenusa
'a' e 'b' = comprimentos dos catetos
Catetos são os dois lados que formam o ângulo reto (90°)
Hipotenusa é o lado oposto ao ângulo reto
A hipotenusa deve ser maior que cada lado 'a' e 'b' individualmente
*/

import { pitagoras } from "./calculo.js"

document.getElementById('verificar').addEventListener('click', verificar)

function verificar() {
    let catetoO = parseFloat(document.getElementById('AB').value)
    let catetoA = parseFloat(document.getElementById('BC').value)

    if (isNaN(catetoO) || catetoO <= 0 || isNaN(catetoA) || catetoA <= 0) {
        document.getElementById('res').innerHTML = 'Preencha todos os campos com valores válidos!'
        return
    } else{
        let calculo = (pitagoras(catetoO, catetoA)).toFixed(2)
        document.getElementById('res').innerHTML = `<strong>Teorema de Pitágoras:</strong> <br> A hipotenusa (lado AC) vale: ${calculo}`
    }
}