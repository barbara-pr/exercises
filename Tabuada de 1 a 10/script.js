let res = document.getElementById('res')

const verTabuada = () =>{
    let tabuada = ''
    for(cont = 1; cont <= 10; cont++){
        for(tab = 1; tab <= 10; tab++){
            let num = cont * tab
            tabuada += `${cont} x ${tab} = ${num} <br>`
        }
    }
    res.innerHTML = tabuada
}