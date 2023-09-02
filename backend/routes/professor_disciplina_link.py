from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlmodel import Session

router = APIRouter()

from ..models import engine, ProfessorDisciplinaLink

class PDLBase(BaseModel):
    professor_id: int
    disciplina_id: int

class PDLRead(PDLBase):
    class Config:
        orm_mode = True

class PDLCreate(PDLBase):
    pass

@router.post("/pdl", response_model=PDLRead)
def create_pdl(pdl: PDLCreate):
    db_pdl = ProfessorDisciplinaLink(**pdl.dict())
    with Session(engine) as session:
        try:
            check_exists = session.query(ProfessorDisciplinaLink) \
                .where(ProfessorDisciplinaLink.professor_id == db_pdl.professor_id) \
                .where(ProfessorDisciplinaLink.disciplina_id == db_pdl.disciplina_id) \
                .one()
            db_pdl = check_exists
        except:
            session.add(db_pdl)
            session.commit()
            session.refresh(db_pdl)
    
    return db_pdl

@router.get("/pdl", response_model=list[PDLRead])
def read_pdls(skip: int = 0, limit: int = 100):
    with Session(engine) as session:
        db_pdls = session.query(ProfessorDisciplinaLink).offset(skip).limit(limit).all()
    return db_pdls

@router.delete("/pdl")
def delete_pdl(data: PDLCreate):
    with Session(engine) as session:
        db_pdl = session.query(ProfessorDisciplinaLink) \
            .where(ProfessorDisciplinaLink.professor_id == data.professor_id) \
            .where(ProfessorDisciplinaLink.disciplina_id == data.disciplina_id) \
            .all()
        
        if db_pdl is None:
            raise HTTPException(status_code=404, detail="ProfessorDisciplinaLink not found")
        
        for pdl in db_pdl:
            session.delete(pdl)
        session.commit()
        return {"message": "ProfessorDisciplinaLink deleted successfully"}