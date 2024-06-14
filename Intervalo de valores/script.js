// Ler 10 valores e escrever quantos desses vlores lidos estão no intervalo [10, 20] --incluindo os valores 10 e 20-- e quantos deles estão fora deste intervalo.

let res = document.getElementById('res')

const verificar = () =>{
    let contDentro = 0
    let contFora = 0
    let soma = 0
    for(let cont = 1; cont <= 10; cont++){
        let input = Number(prompt('Digite um número: '))
        soma += input

        if(input >= 10 && input <= 20){
            contDentro++
        } else{
            contFora++
        }  
    }
    let media = soma / 10
    res.innerHTML = `Quantidade de valores <strong>dentro</strong>  do intervalo 10 e 20: ${contDentro} <br>
    Quantidade de valores <strong>fora</strong> do intervalo entre 10 e 20: ${contFora} <br>
    A <strong>média</strong> de <em>todos</em> os valores digitados é: ${media.toFixed(2)}`
}