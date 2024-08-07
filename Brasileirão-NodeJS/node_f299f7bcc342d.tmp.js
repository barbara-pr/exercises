import tabela2024 from './tabela.js'; 
import express from 'express';

const app = express();

// Pegando a tabela completa
app.get('/', (req, res) => {
    res.send(tabela2024);
});

// O usuário vai informar a sigla do time cujo os dados ele quer acessar
// Vou extrair essa informação da sigla pela requisição do usuário 
app.get('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase(); // Esse caminho vai estar na rota porque eu disse que caminho vai ser acessado quando o usuário colocar '/:sigla' --> EX: /:BOT. Ou seja, estamos transformando aquele nome na rota em um parâmetro que vai armazenar o valor digitado pelo usuário.
    const time = tabela2024.find(infoTime => infoTime.sigla === siglaInformada);
    res.send(time);
});

app.listen(300, () => {
    console.log('Rodando com sucesso em: http://localhost:300');
    console.log('Para derrubar o servidor: ctrl + c');
});
