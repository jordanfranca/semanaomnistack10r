const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const pass = "hVjtY6jk0UOofziR";

mongoose.connect('mongodb+srv://jorda:hVjtY6jk0UOofziR@cluster0-nandm.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(express.json());
app.use(routes);
// Métodos HTTP: GET, POST, PUT, DELETE

// Query parms: request.query (filtros, ordenação, paginação...)
// Route parms : request.params (Identificar um usuário na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)


   
app.listen(3333);  