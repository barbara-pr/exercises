import tabela2024 from './tabela.js'; 
import express from 'express';

const app = express();

app.use(express.json()); // Pega as requisições e transforma em JSON

// Pegando a tabela completa
app.get('/', (req, res) => {
    res.status(200).send(tabela2024);
});

// ENDPOINT
// O usuário vai informar a sigla do time cujo os dados ele quer acessar
// Vou extrair essa informação da sigla pela requisição do usuário 
app.get('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase(); // Transforma o nome da rota em um parâmetro armazenando o valor digitado pelo usuário. EX: /:BOT.
    const time = tabela2024.find((infoTime) => infoTime.sigla === siglaInformada);

    if(!time /* time === undefined */ ){
        res.status(400).send('Não existe na série A do Brasileirão um time com a sigla informada.');
        return;
    }
    res.status(200).send(time);
});

// Englobando um só time (EX: quando o outro sofre punição e não recebe os pontos)
app.put('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase(); 
    const timeSelecionado = tabela2024.find((t) => t.sigla === siglaInformada); // Ache um time 't' tal que esse time tenha a sigla igual à sigla que foi informada pelo usuário

    // De onde vem as informações atualizadas (pontos, vitórias, derrotas...)
    const campos = Object.keys(req.body); // Array com todos os campos (chaves) que devem ser atualizados, corpo da requisição que chegou
    for(campo of campos){
        timeSelecionado[campo] = req.body[campo] // Pegando o campo do body p/ atualizar o campo do time
    };
    res.status(200).send(timeSelecionado);
});

app.post('/', (req, res) => {
    const novoTime = req.body;
    tabela2024.push(novoTime);
    res.status(200).send(novoTime);
});

app.delete('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const indiceTimeSelecionado = tabela2024.findIndex((t) => t.sigla === siglaInformada); // Acha o índice do elemento que tem essa característica; somente a posição
    const timeRemovido = tabela2024.splice(indiceTimeSelecionado, 1); // Remover a partir do índice selecionado e somente este 
    res.status(200).send(timeRemovido);
});

app.listen(200, () => {
    console.log('Rodando com sucesso em: http://localhost:200');
    console.log('Para derrubar o servidor: ctrl + c');
});