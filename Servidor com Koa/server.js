const Koa = require('Koa');
const Router = require('koa-router');

const server = new Koa();
const router = new Router();

router.get('/', (ctx) => {
    ctx.body = '<h1>Você está na Home</h1>'; // Passamos o corpo
}).get('/contato', (ctx) => {
    ctx.body = `<h1>Contato</h1>
    <form method="POST" action="/contato">
        <label for="email">E-mail: </label>
        <input type="email" name="email" id="email">
        <label for="mensagem">Mensagem: </label>
        <textarea name="mensagem" id="mensagem"></textarea>
        <input type="submit" value="Enviar">
    </form>`
}).post('/contato', (ctx) => {
    ctx.body = '<h1>Pegando os valores do usuário!</h1>'
});

server.use(router.routes()); // O Koa tem que conhecer as rotas que estão dentro do Router

server.listen(3005, () => {
    console.log('Server running on http://localhost:3005');
    console.log('Para desligar o nosso servidor: ctrl + c');
});