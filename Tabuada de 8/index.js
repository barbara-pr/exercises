let res = document.getElementById('res')

const gerar = () =>{
    let tabuada = ''
    for(let tab = 1; tab <= 10; tab++){
        let num = tab * 8 
        tabuada += `8 x ${tab} = ${num} <br>`
    }
    res.innerHTML = tabuada
}