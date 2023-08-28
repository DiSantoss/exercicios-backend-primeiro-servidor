const express = require('express');
const app = express();
const controladores = require('./controladores/controladores');


app.get('/imoveis', controladores.home)
app.get('/imoveis/:id', controladores.movelFiltrado)

app.listen(8000)