from fastapi import APIRouter, HTTPException, Body
from pydantic import BaseModel
from sqlmodel import Session

from ..models import Professor, engine
from .turma import delete_turma
from .professor_aluno_link import delete_pal, PALBase
from .professor_disciplina_link import delete_pdl, PDLBase

router = APIRouter()


class ProfessorBase(BaseModel):
    nome: str
    email: str
    senha: str


class ProfessorCreate(ProfessorBase):
    disciplina_id: int | None


class ProfessorRead(ProfessorBase):
    id: int
    disciplina_id: int | None

    class Config:
        orm_mode = True


class ProfessorUpdate(BaseModel):
    nome: str | None
    email: str | None
    senha: str | None
    disciplina_id: int | None


@router.post("/professor", response_model=ProfessorRead)
def create_professor(professor: ProfessorCreate):
    with Session(engine) as session:
        db_professor = Professor(**professor.dict())
        session.add(db_professor)
        session.commit()
        session.refresh(db_professor)
    return db_professor


@router.get("/professor/{professor_id}", response_model=ProfessorRead)
def read_professor(professor_id: int):
    with Session(engine) as session:
        db_professor = session.get(Professor, professor_id)
        if db_professor is None:
            raise HTTPException(status_code=404, detail="Professor not found")
    return db_professor


@router.get("/professor", response_model=list[ProfessorRead])
def read_professors(skip: int = 0, limit: int = 100):
    with Session(engine) as session:
        professors = session.query(Professor).offset(skip).limit(limit).all()
    return professors


@router.put("/professor/{professor_id}", response_model=ProfessorRead)
def update_professor(professor_id: int, professor: ProfessorUpdate):
    with Session(engine) as session:
        db_professor = session.get(Professor, professor_id)
        if db_professor is None:
            raise HTTPException(status_code=404, detail="Professor not found")
        update_data = professor.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_professor, key, value)
        session.add(db_professor)
        session.commit()
        session.refresh(db_professor)
    return db_professor


@router.delete("/professor/{professor_id}")
def delete_professor(professor_id: int):
    with Session(engine) as session:
        db_professor = session.get(Professor, professor_id)
        if db_professor is None:
            raise HTTPException(status_code=404, detail="Professor not found")
        
        # for turma in db_professor.turmas:
        #     delete_turma(turma.id)
            
        # for aluno in db_professor.alunos:
        #     delete_pal(PALBase(**{
        #         "professor_id": db_professor.id,
        #         "aluno_id": aluno.id
        #     }))

        # for disciplina in db_professor.disciplinas:
        #     delete_pdl(PDLBase(**{
        #         "professor_id": db_professor.id,
        #         "disciplina_id": disciplina.id
        #     }))
        session.delete(db_professor)
        session.commit()
        
    return {"message": "Professor deleted successfully"}

@router.post("/professor/auth", response_model=ProfessorRead)
def authenticate_professor(data : ProfessorUpdate):
    with Session(engine) as session:
        data = data.dict()
        try:
            db_professor = session.query(Professor) \
            .where(Professor.email == data.get("email", None)) \
            .where(Professor.senha == data.get("senha", None)) \
            .one()
        except:
            raise HTTPException(status_code=401, detail="Incorrect User or Password")
        
    return db_professor