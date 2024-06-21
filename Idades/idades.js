function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //ano atual
    var fano = document.getElementById('ano') //ano digitado pelo usuário
    var res = document.querySelector('div#res')

    if (Number(fano.value) > ano || fano.value.length < 4){
        window.alert('[ERRO] Preencha os campos corretamente!')
    } else {
        var fsex = document.getElementsByName('sexo') //para pegar qual dado o usuário selecionou
        var idade = ano - Number(fano.value) //como será calculado a idade 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked){  //[0] = Feminino, pois é o 1° input e [1] Masculino, pois é o 2° input
            genero = 'Feminino'
            if(idade >=0 && idade <= 11){
                img.setAttribute('src', 'imagens/feminino-criança.png')
            } else if (idade <= 65){
                img.setAttribute('src', 'imagens/feminino-adulto.png')
            } else{
                img.setAttribute('src', 'imagens/feminino-idoso.png')
            }

        } else if (fsex[1].checked){
            genero = 'Masculino'
            if(idade >=0 && idade <= 11){
                img.setAttribute('src', './imagens/masculino-criança.jpg')
            } else if (idade <= 65){
                img.setAttribute('src', './imagens/masculino-adulto.jpg')
            } else{
                img.setAttribute('src', './imagens/masculino-idoso.jpg')
            }
        }
        res.style.textAlign = 'center' //usando esse style aqui p/ centralizar somente quando o JS rodar
        res.innerHTML = `<strong>Gênero:</strong> ${genero} - <strong>Idade:</strong> ${idade} ano(s)`
        res.appendChild(img) //vou adicionar o elemento img
        img.style.borderRadius = '200px'
        img.style.width = '60px'
        img.style.height = '60px'
        img.style.display = 'block'
        img.style.margin = 'auto'
    }
}

/* Condição para atribuir o gênero com o operador ternário: 

var genero = sexo[0].checked ? 'Masculino':'Femenino */


/*
 ao invés de fazer 2 cadeias de ifs e elses (pra homem e mulher), eu separei as imagens em 2 pastas e fiz da seguinte forma:

if(fgen[0].checked) genero = 'homem';
else genero = 'mulher';

if(idade <= 10) img.setAttribute('src', `images/${genero}/baby.png`)
else if(idade <= 21) img.setAttribute('src', `images/${genero}/teen.png`)
else if(idade <= 50) img.setAttribute('src', `images/${genero}/adult.png`)
else img.setAttribute('src', `images/${genero}/old.png`)

dai dependendo do gênero o algoritmo puxa a foto de uma pasta diferente

vais criar uma pasta chamada imagem e dentro dessa pasta vai ter duas pastas , uma vai se chamar homem e outra mulher, ai vais colocar as imagens de acordo com género... já no código, vais criar uma variável chamada genero e ela podera receber entre duas strings "homem" ou "mulher" de acordo com as pastas criadas..
*/