const express = require('express');
const app = express();
const {controladorSoma,controladorSub,controladorMulti,controladorDiv} = require('./controladores/contas')


app.get('/',(req,res)=>{
    res.send('Essa é a Rota Principal')
})
app.get('/somar', controladorSoma);
app.get('/subtrair', controladorSub);
app.get('/multiplicar', controladorMulti);
app.get('/dividir', controladorDiv);



app.listen(3000)