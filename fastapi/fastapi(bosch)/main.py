from fastapi import FastAPI
from fastapi import HTTPException, status
from models import Curso

cursos = {
    1:{
        'nome':'Python',
        'aulas':20,
        'horas':80,
        'instrutor':"Cleber"
    },
    2:{
        'nome':'Java',
        'Aula':15,
        'horas':60,
        'instrutor':'Leonardo'
    }
}

app = FastAPI()

@app.get('/')
async def raiz():
    return cursos

@app.get('/cursos/{curso_id}')
async def get_curso(curso_id : int):
    try:
        curso = cursos[curso_id]
        return curso
    except KeyError:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Curso não encontrado')


@app.post('/cursos')
async def post_curso(curso: Curso):
    next_id = len(cursos) + 1
    if curso.id not in cursos:
        curso.id = next_id
        cursos[next_id] = curso
        return curso
    else:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail='Já existe um curso com o ID {curso.id}')


if __name__=="__main__":
    import uvicorn
    uvicorn.run("main:app", host='0.0.0.0',port=8000, reload=True)
