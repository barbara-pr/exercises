// Adicionando o ouvinte de evento fora da função clicar()
let contar = document.getElementById('botao')
contar.addEventListener('click', clicar)

function clicar(){
    let res = document.querySelector('div#msg')
    let inicioVar = parseInt(document.getElementById('inicio').value)
    let fimVar = parseInt(document.getElementById('fim').value)
    let passoVar = parseInt(document.getElementById('passo').value)

    if(isNaN(inicioVar) || isNaN(fimVar) || isNaN(passoVar)){
        window.alert('Impossível contar!')
    } else{ 
        let i = inicioVar
        let f = fimVar
        let p = passoVar

        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }

        if (i < f){
            //Contagem progressiva:
            for (let contador = i; contador <= f; contador += p) {
                res.innerHTML += ` ${contador} \u{1F449}`
            }
        } else{
            //Contagem regressiva:
            for (let contador = i; contador >= f; contador -= p) {
                res.innerHTML += ` ${contador} \u{1F449}`
            }  
        }
        res.innerHTML += ` \u{1F3C1} `
    }
}

/* COMO EU TINHA FEITO E NÃO ESTAVA DANDO CERTO: 
    for (contador = Number(inicioVar.value); contador >= Number(fimVar.value); contador = 0 + Number(passoVar.value)) 
*/