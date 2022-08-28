from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

#Rota Principal
@app.get("/")
def raiz():
    return {"Teste": "Teste"}

#Model
class Usuario(BaseModel):
    id: int
    email: str
    senha: str

#Base de dados

base_de_dados = [
    Usuario(id=1, email="roger@roger.com.br", senha="roger123"),
    Usuario(id=2, email="teste@teste.com.br", senha="teste123")
]

#Get All
@app.get("/usuarios")
def get_todos_os_usuarios():
    return base_de_dados

#Get Id
@app.get("/usuarios/{id_usuario}")
def get_usuario_usando_id(id_usuario: int):
    for usuario in base_de_dados:
        if(usuario.id == id_usuario):
            return usuario
    
    return {"Status": 404, "Mensagem": "Não encontrou usuario"}

#Rota Insere
@app.post("/usuarios")
def insere_usuario(usuario: Usuario):
    # criar regras de negocio
    base_de_dados.append(usuario)
    return usuario