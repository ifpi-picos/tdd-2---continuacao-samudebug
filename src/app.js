const express = require('express');
const app = express();
app.use(express.json());

const Tarefas = require('./tarefas');
const tarefas = new Tarefas();

app.post('/tarefas', (req, res) => {
    tarefas.adicionar(req.body.descricao);
    res.status(201).send('Tarefa adicionada com sucesso!');
});

app.delete('/tarefas/:indice', (req, res) => {
    tarefas.remover(req.params.indice);
    res.status(200).send('Tarefa removida com sucesso!');
});

app.get('/tarefas', (req, res) => {
    res.status(200).send(tarefas.todas());
});

app.patch('/tarefas/:indice', (req, res) => {
    tarefas.marcarConcluida(req.params.indice);
    res.status(200).send('Tarefa marcada como concluída!')
});

module.exports = app;
