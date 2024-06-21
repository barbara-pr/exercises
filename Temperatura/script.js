// Você chegou nos EUA e viu 100 graus Fahrenheit, mas você quer saber quanto é esta tempertaura em graus Celsius. 

const gerar = () => {
    let res = document.getElementById('res')
    let fahrenheit = Number(document.getElementById('grausF').value)

    if(isNaN(fahrenheit) || fahrenheit == ''){
        res.innerHTML = `Valor inválido!`
    } else{
        let celsius = ((fahrenheit - 32) * 5) / 9
        res.innerHTML = `${fahrenheit}°F equivale a ${celsius.toFixed(1)}°C`
    }
}