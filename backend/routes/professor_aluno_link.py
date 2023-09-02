from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlmodel import Session

from ..models import engine, ProfessorAlunoLink

router = APIRouter()

class PALBase(BaseModel):
    
    professor_id: int
    aluno_id: int

class PALRead(PALBase):
    class Config:
        orm_mode = True

class PALCreate(PALBase):
    pass

@router.post("/pal", response_model=PALRead)
def create_pal(pal: PALCreate):
    db_pal = ProfessorAlunoLink(**pal.dict())
    with Session(engine) as session:
        session.add(db_pal)
        session.commit()
        session.refresh(db_pal)
        
    return db_pal

@router.get("/pal", response_model=list[PALRead])
def read_pals(skip: int = 0, limit: int = 100):
    with Session(engine) as session:
        pals = session.query(ProfessorAlunoLink).offset(skip).limit(100).all()
    return pals

@router.delete("/atl")
def delete_pal(data: PALBase):
    with Session(engine) as session:
        db_pal = session.query(ProfessorAlunoLink) \
            .where(ProfessorAlunoLink.aluno_id == data.aluno_id) \
            .where(ProfessorAlunoLink.professor_id == data.professor_id) \
        .all()
        if db_pal is None:
            raise HTTPException(status_code=404, detail="ProfessorAlunoLink not found")
        
        for pal in db_pal:
            session.delete(pal)
        session.commit()
        return {"message": "ProfessorAlunoLink deleted successfully"}