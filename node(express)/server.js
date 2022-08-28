// Inicializar server usando node js

const express = require('express');
const app = express()

// Verbos HTTP
//GET
//POST
//PUT
//DELETE

//URI = http://localhost:3000/clients todo esse caminho corresponde a uma URI
//Endpoint = Corresponde apenas ao final desse caminho => O Resource pode ser nesse caso o (client).

//utilizados os verbos http - feito
//colocar os endpoints - feito
//não utilizar barras(/) no final dos endpoints - feito


app.get('/clients')
app.post('/clients')
app.put('/clients')
app.delete('/clients')


app.listen(3000, function() {
    console.log('Server está funcionando')
});
