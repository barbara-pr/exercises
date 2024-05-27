//Ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcule e escreva o percentual que cada um representa em relação ao total de eleitores.

const calcularPercentuais = () => {
    const eleitores = parseInt(document.getElementById('eleitor').value)
    const votosBrancos = parseInt(document.getElementById('branco').value)
    const votosNulos = parseInt(document.getElementById('nulo').value)
    const votosValidos = parseInt(document.getElementById('valido').value)
    const resposta = document.getElementById('res')

    if (isNaN(eleitores) || isNaN(votosBrancos) || isNaN(votosNulos) || isNaN(votosValidos)) {
        resposta.textContent = 'Por favor, insira números válidos em todos os campos.'
        return
    }

    if (eleitores <= 0) {
        resposta.textContent = 'O número total de eleitores deve ser maior que zero.'
        return
    }

    const percentualBrancos = (votosBrancos / eleitores) * 100
    const percentualNulos = (votosNulos / eleitores) * 100
    const percentualValidos = (votosValidos / eleitores) * 100

    resposta.innerHTML = `
        <p>Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%</p>
        <p>Percentual de votos nulos: ${percentualNulos.toFixed(2)}%</p>
        <p>Percentual de votos válidos: ${percentualValidos.toFixed(2)}%</p>
    `
}