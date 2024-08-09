import express from 'express';
import pkg from '@prisma/client';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express();

app.use(express.json()); // Definir isso porque o express não lê JSON 

app.post('/usuarios', async (req, res) => {
    try {
        await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });
        res.status(201).json(req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/usuarios/:id', async (req, res) => {
    console.log(req)
    try {
        await prisma.user.update({
            // Quem vou atualizar
            where: {
                id: req.params.id
            },

            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });
        res.status(200).json(req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Usuário deletado com sucesso!' })
})

app.listen(5000, () => {
    console.log('Rodando em: http://localhost:5000/usuarios');
});

// USER: barbarapr
// PASSWORD: ovFGjrKkMoIvW46D