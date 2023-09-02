from fastapi import APIRouter, Body, HTTPException
from pydantic import BaseModel
from sqlmodel import Session
from datetime import date

from ..models import engine, AlunoTurmaLink

router = APIRouter()

# AlunoTurmaLink = ATL
class ATLBase(BaseModel):
    data_inicio: date
    aluno_id: int
    turma_id: int

class ATLCreate(ATLBase):
    pass

class ATLRead(ATLBase):
    class Config:
        orm_mode = True
        
class ATLUpdate(ATLBase):
    data_inicio: date | None

@router.post("/atl", response_model=ATLRead)
def create_atl(atl: ATLCreate):
    db_atl = AlunoTurmaLink(**atl.dict())
    with Session(engine) as session:
        session.add(db_atl)
        session.commit()
        session.refresh(db_atl)
    
    return db_atl

@router.get("/atl", response_model=list[ATLRead])
def read_atls(skip: int = 0, limit: int = 100):
    with Session(engine) as session:
        atls = session.query(AlunoTurmaLink).offset(skip).limit(limit).all()
    return atls
    
@router.delete("/atl")
def delete_atl(data: ATLUpdate):
    with Session(engine) as session:
        data = data.dict()
        key = data.get("turma_id", data.get("aluno_id", None))
        if key is None:
            raise HTTPException(status_code=422, detail="Unprocessable Entity Received")
            
        db_atl = session.query(AlunoTurmaLink) \
        .where(AlunoTurmaLink.aluno_id == data.get("aluno_id")) \
        .where(AlunoTurmaLink.turma_id == data.get("turma_id")) \
        .all()
        if db_atl is None:
            raise HTTPException(status_code=404, detail="AlunoTurmaLink not found")
        for atl in db_atl:
            session.delete(atl)
        session.commit()
        return {"message": "AlunoTurmaLink deleted successfully"}