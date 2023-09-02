from fastapi import FastAPI
from sqlmodel import SQLModel
from fastapi.middleware.cors import CORSMiddleware

from .models import Aluno, AlunoTurmaLink, Disciplina, Pagamento, Professor, Turma, engine
from .routes import disciplina, professor, aluno, turma, calendario, pagamento
from .routes import aluno_turma_link, professor_aluno_link, professor_disciplina_link

app = FastAPI()
app.include_router(disciplina.router)
app.include_router(professor.router)
app.include_router(aluno.router)
app.include_router(turma.router)
app.include_router(calendario.router)
app.include_router(pagamento.router)
app.include_router(aluno_turma_link.router)
app.include_router(professor_aluno_link.router)
app.include_router(professor_disciplina_link.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.on_event("startup")
async def startup():
    SQLModel.metadata.create_all(engine)


@app.get("/")
async def root():
    return {"message": "Hello, World!"}
