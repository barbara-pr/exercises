// Com dicionário (objeto)
// As chaves são as URLs e os valores são as respostas HTML.

const http = require('http');

const server = http.createServer((req, res) => {
    const responses = {
        '/': '<h1>Home</h1>',
        '/contato': '<h1>Contato</h1>',
        'semURL': '<h1>Sem resposta para essa URL</h1>'
    };

    // Obtém a resposta correspondente à URL ou a mensagem para URLs não reconhecidas
    const responseText = responses[req.url] || responses['semURL'];

    res.end(responseText);
});

server.listen(3001, 'localhost', () => {
    console.log('Server running on http://localhost:3001');
    console.log('Para desligar o nosso servidor: ctrl + c');
});