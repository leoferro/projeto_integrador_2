from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlmodel import Session
from datetime import date, datetime

from ..models import Aluno, Turma, engine
from .aluno_turma_link import ATLCreate, ATLUpdate, create_atl, delete_atl
from .professor_aluno_link import PALCreate, PALBase, create_pal, delete_pal
from .pagamento import delete_pagamento

router = APIRouter()

class AlunoBase(BaseModel):
    nome: str
    email: str
    # senha: str
    telefone: str
    data_nascimento: date
    ativo: bool
    status_pagamento: bool

class AlunoCreate(AlunoBase):
    turma_id: int

class AlunoRead(AlunoBase):
    id: int
    
    class Config:
        orm_mode = True

class AlunoUpdate(AlunoBase):
    nome: str | None
    email: str | None
    senha: str | None
    telefone: str | None
    data_nascimento: date | None
    ativo: bool | None
    status_pagamento: bool | None
    
@router.post("/aluno", response_model=AlunoRead)
def create_aluno(aluno : AlunoCreate):
    with Session(engine) as session:
        try:
            db_aluno = session.query(Aluno).where(Aluno.email == aluno.email).one()
        except:
            db_aluno = Aluno(**aluno.dict())
            session.add(db_aluno)
            session.commit()
            session.refresh(db_aluno)
        
        create_atl(ATLCreate(**{
            "data_inicio": datetime.now().date(),
            "aluno_id": db_aluno.id,
            "turma_id": aluno.turma_id
        }))
        
        create_pal(PALCreate(**{
            "professor_id": session.get(Turma, aluno.turma_id).professor_id,
            "aluno_id": db_aluno.id 
        }))
        
        return db_aluno

@router.get("/aluno/{aluno_id}", response_model=AlunoRead)
def read_aluno(aluno_id : int):
    with Session(engine) as session:
        db_aluno = session.get(Aluno, aluno_id)
        if db_aluno is None:
            raise HTTPException(status_code=404, detail="Aluno not found")
        return db_aluno

@router.get("/aluno", response_model=list[AlunoRead])
def read_alunos(skip: int = 0, limit: int = 100):
    with Session(engine) as session:
        alunos = session.query(Aluno).offset(skip).limit(limit).all()
        return alunos

@router.put("/aluno/{aluno_id}", response_model=AlunoRead)
def update_aluno(aluno_id: int, aluno: AlunoUpdate):
    with Session(engine) as session:
        db_aluno = session.get(Aluno, aluno_id)
        if db_aluno is None:
            raise HTTPException(status_code=404, detail="Aluno not found")
        update_data = aluno.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_aluno, key, value)
        session.add(db_aluno)
        session.commit()
        session.refresh(db_aluno)
        
        return db_aluno

@router.delete("/aluno/{aluno_id}")
def delete_aluno(aluno_id: int):
    with Session(engine) as session:
        db_aluno = session.get(Aluno, aluno_id)
        if db_aluno is None:
            raise HTTPException(status_code=404, detail="Aluno not found")
        
        # for turma in db_aluno.turmas:
        #     delete_atl(ATLUpdate(**{
        #         "turma_id": turma.id,
        #         "aluno_id": db_aluno.id
        #     }))
        
        # for professor in db_aluno.professores:
        #     delete_pal(PALBase(**{
        #         "professor_id": professor.id,
        #         "aluno_id": db_aluno.id
        #     }))
        
        # for pagamento in db_aluno.pagamentos:
        #     delete_pagamento(pagamento.id)
        
        session.delete(db_aluno)
        session.commit()
    return {"message": "Aluno deleted successfully"}
