const restify = require('restify');
const server = restify.createServer();

server.get('/', (req, res) => {
    res.send('Servidor criado com resposta para o path.');
});

server.listen(8081, () => {
    console.log('Server running on http://localhost:8081');
    console.log('Para desligar o nosso servidor: ctrl + c');
});