// Inicializar server usando node js

const express = require('express');
const app = express();

const data = require("./data.json");
app.use(express.json());

/*

Verbos HTTP
GET
POST
PUT
DELETE

URI = http://localhost:3000/clients todo esse caminho corresponde a uma URI
Endpoint = Corresponde apenas ao final desse caminho => O Resource pode ser nesse caso o (client).

utilizados os verbos http - feito
colocar os endpoints - feito
não utilizar barras(/) no final dos endpoints - feito

parametros da callback function
req => request
res => response

*/

//( GET )
app.get('/clients',function(req, res){
    res.json(data);
});

//Método para selecionar o cliente por id, colocar (/numero do id) na frente do endpoint( GET )
app.get('/clients/:id',function(req, res){
    const {id} = req.params;
    const client = data.find(cli => cli.id == id);
    //estrutura caso o id não seja achado(o numero do erro pode mudar dependendo do caso)
    if( !client ){
        return res.status(204).json();
    }
    res.json(client);
});

//Extrai apenas nome e email do client ( POST )
app.post('/clients',function(req, res){
    const { name, email } = req.body;
    //salvar novo client( post )
    res.json({name, email})
});

//Atualizar o Client( PUT )
app.put('/clients/:id',function(req, res){
    const {id} = req.params;
    const client = data.find(cli => cli.id == id);

    if( !client ){
        return res.status(204).json();
    }
    const { name } = req.body;
    client.name = name;

    res.json(client);

}); 

//Deletar um client ( DELETE  )
app.delete('/clients/:id',function(req, res){
    const {id} = req.params;
    const clientsFiltered = data.filter(client => client.id != id);

    res.json(clientsFiltered);
});
//===============================================//
//Mensagem( para testar se estiver funcionando )
//Numero da porta: 3000

app.listen(3000, function() {
    console.log('Server está funcionando')
});