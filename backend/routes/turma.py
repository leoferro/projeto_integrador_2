from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlmodel import Session
from datetime import time

from ..models import Turma, Aluno, Disciplina, engine
from .calendario import CalendarioCreate, create_calendario, delete_calendario
from .aluno_turma_link import delete_atl, ATLUpdate

router = APIRouter()

class TurmaBase(BaseModel):
    vencimento: int
    link_aula: str
    mensalidade: float
    
    #Calendario Turma
    horario_inicial: time | None
    horario_final: time | None
    dia_semana: int | None
    
    disciplina_id : int
    professor_id : int
    
class TurmaCreate(TurmaBase):
    pass

class TurmaRead(TurmaBase):
    id: int
    
    class Config:
        orm_mode = True
        
class TurmaGet(TurmaRead):
    disciplina: str
    alunos: list[Aluno]
        
class TurmaUpdate(TurmaBase):
    vencimento: int  | None
    link_aula: str | None
    mensalidade: float | None
    
    disciplina_id : int | None
    professor_id : int | None

    
@router.post("/turma", response_model=TurmaRead)
def create_turma(turma: TurmaCreate):
    with Session(engine) as session:
        db_turma = Turma(**turma.dict())
        
        session.add(db_turma)
        session.commit()
        session.refresh(db_turma)
        
    data = turma.dict()
    data.update({"turma_id": db_turma.id})
    create_calendario(CalendarioCreate(**data))
    
    return db_turma
    
@router.get("/turma/{turma_id}", response_model=TurmaGet)
def read_turma(turma_id : int):
    with Session(engine) as session:
        db_turma = session.get(Turma, turma_id)
        if db_turma is None:
            raise HTTPException(status_code=404, detail="Turma not found")
        
        data = db_turma.dict()
        data.update({
            "disciplina": db_turma.disciplina.nome,
            "alunos": db_turma.alunos,
            **db_turma.calendario_turma[0].dict()
        })
        
    return data
    
@router.get("/turma", response_model=list[TurmaGet])
def read_turmas(skip : int = 0, limit : int = 100):
    data = list()
    with Session(engine) as session:
        turmas = session.query(Turma).offset(skip).limit(limit).all()

        for turma in turmas:
            local_data = turma.dict()
            local_data.update({
                "disciplina": turma.disciplina.nome,
                "alunos": turma.alunos,
                **turma.calendario_turma[0].dict()
            })
            
            data.append(local_data)
        
    return data

@router.put("/turma/{turma_id}", response_model=TurmaRead)
def update_turma(turma_id: int, turma: TurmaUpdate):
    with Session(engine) as session:
        db_turma = session.get(Turma, turma_id)
        if db_turma is None:
            raise HTTPException(status_code=404, detail="Turma not found")
        update_data = turma.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_turma, key, value)
        
        session.add(db_turma)
        session.commit()
        session.refresh(db_turma)
        
        return db_turma
    
@router.delete("/turma/{turma_id}")
def delete_turma(turma_id : int):
    with Session(engine) as session:
        db_turma = session.get(Turma, turma_id)
        if db_turma is None:
            raise HTTPException(status_code=404, detail="Turma not found")
        # delete_calendario(turma_id)
        session.delete(db_turma)
        
        # for calendario in db_turma.calendario_turma:
        
        # for aluno in db_turma.alunos:
        #     delete_atl(ATLUpdate(**{
        #         "aluno_id": aluno.id,
        #         "turma_id": db_turma.id
        #     }))
        
        session.commit()
    return {"message": "Turma deleted successfully"}