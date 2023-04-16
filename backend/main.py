from fastapi import FastAPI
from sqlmodel import SQLModel

from .models import Aluno, AlunoTurmaLink, Disciplina, Pagamento, Professor, Turma, engine
from .routes import disciplina, professor

app = FastAPI()
app.include_router(disciplina.router)
app.include_router(professor.router)


@app.on_event("startup")
async def startup():
    SQLModel.metadata.create_all(engine)


@app.get("/")
async def root():
    return {"message": "Hello, World!"}
