import usuarios from './users.js';
import express from 'express';

// Instancia do framework Express
const app = express();


// Define que a API irá receber e enviar dados no formato JSON
app.use(express.json());

// Define a porta que a API irá rodar
const porta = 3000;


// Inicia a API na porta definida
app.listen(porta, () => {
    console.log(`API iniciada na porta ${porta}`);
});


// Define a rota principal da API
app.get('/', (req, res) => {
    res.status(200).send(usuarios); // Retorna a lista de usuários
});


// Define a rota de usuários
app.get('/usuarios', (req, res) => {   
    res.status(200).send(usuarios); // Retorna a lista de usuários
});


// Define a rota de usuários com filtro por ID
app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id; // Pega o ID do usuário
    const usuario = usuarios.find(usuario => usuario.id == id); // Busca o usuário pelo ID

    // Se o usuário não for encontrado, retorna status 404
    if (!usuario) {
        res.status(404).send('Usuário não encontrado.');
        return; // Encerra a execução da função
    }

    // Retorna o usuário encontrado
    res.json(usuario);
});


// Define a rota de criação de usuário
app.post('/', (req, res) => {
    const novoUser = req.body; // Pega os dados do usuário enviado
    usuarios.push(novoUser); // Adiciona o novo usuário na lista
    res.status(201).send(novoUser); // Retorna o novo usuário criado
});


// Define a rota de atualização de usúario
app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id; // Pega o ID do usuário
    const usuario = usuarios.find(usuario => usuario.id == id); // Busca o usuário pelo ID
    
    // Se o usuário não for encontrado, retorna status 404
    if (!usuario) {
        res.status(404).send('Usuário não encontrado.');
        return; // Encerra a execução da função
    }

    const campos = Object.keys(req.body); // Pega as chaves do objeto enviado

    // Encontra os campos enviados e atualiza o usuário
    for (let campo of campos) {
        usuario[campo] = req.body[campo];
    }

    // Retorna o usuário atualizados
    res.status(200).send(usuario);
});


// Define a rota de remoção de usuário
app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id; // Pega o ID do usuário
    const index = usuarios.findIndex(usuario => usuario.id == id); // Busca o índice do usuário pelo ID
    const userRemovido = usuarios[index]; // Pega o usuário que será removido
    
    // Se o usuário não for encontrado, retorna status 404
    if (index == -1) {
        res.status(404).send('Usuário não encontrado.');
        return; // Encerra a execução da função
    }

    // Remove o usuário da lista
    usuarios.splice(index, 1); 

    // Retorna o usuário removido
    res.status(200).send(userRemovido);
});

