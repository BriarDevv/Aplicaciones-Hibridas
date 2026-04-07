import express from 'express';
import User from './models/User.js';

const userModel = new User();

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/api/users', async (req, res) => {
    const users = await userModel.find();
    console.log(users);
    res.json(users);
});

app.get('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if(!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

app.post('/api/users', async (req, res) => {
    const newUser = {
        name: 'Jane Doe',
        email: 'janeDoe@gmail.com'
    };
    await userModel.save(newUser);
    res.status(201).json(newUser);
});

app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const deleted = await userModel.deleteById(id);
    if(!deleted) return res.status(404).json({ message: 'User not found' });
    res.json(deleted);
});

app.patch('/api/users/:id/name', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const updated = await userModel.updateNameById(id, name);
    if(!updated) return res.status(404).json({ message: 'User not found' });
    res.json(updated);
});

app.patch('/api/users/:id/email', async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    const updated = await userModel.updateEmailById(id, email);
    if(!updated) return res.status(404).json({ message: 'User not found' });
    res.json(updated);
});

app.listen( PORT, () => {
    console.log(`Servidor rodando ${PORT}`);
});