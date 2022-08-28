// Inicializar server usando node js

const express = require('express');
const app = express();

const data = require("./data.json");
app.use(express.json());

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


app.get('/clients',function(req, res){
    res.json(data);
});
app.post('/clients',function(req, res){});
app.put('/clients',function(req, res){}); 
app.delete('/clients',function(req, res){});


app.listen(3000, function() {
    console.log('Server está funcionando')
});
