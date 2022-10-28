from typing import Optional
from pydantic import BaseModel

class Curso(BaseModel): #Por padrão já herda várias coisas, como validação de dados!
    id: Optional[int] = None #Já que é opicional
    nome: str
    aulas: int
    horas: int
    instrutor: str
