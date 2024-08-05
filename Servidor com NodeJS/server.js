// Arquivo que vai cuidar do servidor, algo que cuide do nosso servidor HTTP, saiba criá-lo

const http = require('http');

const server = http.createServer((req, res) => {
    const resp = [];
    resp['/'] = '<h1>Home</h1>';
    resp['/contato'] = '<h1>Contato</h1>';
    resp['semURL'] = '<h1>Sem resposta para essa URL</h1>';

    res.end(resp[req.url] || resp['semURL']);
});

    /*
    // Identificando a URL que o usuário digitou
    if(req.url == '/'){
        res.end('<h1>Home</h1>') // Resposta final do servidor
    }

    if(req.url == '/contato'){
        res.end('<h1>Contato</h1>') // Resposta final do servidor
    }

    res.end('<h1>Sem resposta para essa URL</h1>')
    */

server.listen(3001, 'localhost', () => {
    console.log('Server running on http://localhost:3001');
    console.log('Para desligar o nosso servidor: ctrl + c');
});