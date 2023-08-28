const express = require('express');
const app = express();
const bancoDeDados = require('../bancodedados');
const jogadores = require('./controladores/jogadores')




app.get('/', jogadores.vezDeQuem);
app.get('/remover' , jogadores.remover)
app.get('/adicionar' , jogadores.adicionar)


// app.listen(8000)

