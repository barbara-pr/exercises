// Criando um servidor com Express 

const express = require('express');

const server = express(); // C   riando um servidor

server.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
});

server.post('/contato', (req, res) => {
    res.send('<h1>Aprendendo a pegar o valor que o usuário digitou.</h1>');
})

server.get('/contato', (req, res) => {
    res.send(`
        <h1>Contato</h1>
        <form method="POST" action="/contato">
            <label for="email">E-mail: </label>
            <input type="email" name="email" id="email">
            <label for="mensagem">Mensagem: </label>
            <textarea name="mensagem" id="mensagem"></textarea>
            <input type="submit" value="Enviar">
        </form>
    `);
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('Para desligar o nosso servidor: ctrl + c');
});