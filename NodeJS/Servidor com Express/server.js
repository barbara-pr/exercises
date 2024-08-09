// Criando um servidor com Express 

const express = require('express');

const server = express(); // Criando um servidor

// Middleware para processar dados do formulário
server.use(express.urlencoded({ extended: true }));

// Adiciona ao server alguém que saiba responder ao método GET
server.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
});

// Rota para exibir o formulário
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

// Rota para exibir o formulário
server.post('/contato', (req, res) => {
    const { email, mensagem } = req.body;
    res.send(`<h1>Obrigado pelo contato!</h1>
    <p>E-mail: ${email}</p>
    <p>Mensagem: ${mensagem}</p>`);
})

server.listen(3004, () => {
    console.log('Server running on http://localhost:3004');
    console.log('Para desligar o nosso servidor: ctrl + c');
});