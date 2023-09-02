from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlmodel import Session

from ..models import Disciplina, engine
from .professor_disciplina_link import create_pdl, PDLCreate


router = APIRouter()


class DisciplinaBase(BaseModel):
    nome: str


class DisciplinaCreate(DisciplinaBase):
    professor_id: int | None


class DisciplinaRead(DisciplinaBase):
    id: int

    class Config:
        orm_mode = True


class DisciplinaUpdate(DisciplinaBase):
    pass


# Create a new disciplina
@router.post("/disciplina/", response_model=DisciplinaRead)
def create_disciplina(disciplina: DisciplinaCreate):
    db = Session(engine)
    db_disciplina = Disciplina(**disciplina.dict())
    db.add(db_disciplina)
    db.commit()
    db.refresh(db_disciplina)
    
    if disciplina.professor_id:
        create_pdl(PDLCreate(**{
            "professor_id": disciplina.professor_id,
            "disciplina_id": db_disciplina.id
        }))
    
    return db_disciplina


# Retrieve a disciplina by id
@router.get("/disciplina/{disciplina_id}", response_model=DisciplinaRead)
def read_disciplina(disciplina_id: int):
    db = Session(engine)
    db_disciplina = db.get(Disciplina, disciplina_id)
    if not db_disciplina:
        raise HTTPException(status_code=404, detail="Disciplina not found")
    return db_disciplina


# Retrieve all disciplinas
@router.get("/disciplina/", response_model=list[DisciplinaRead])
def read_disciplinas():
    db = Session(engine)
    disciplinas = db.query(Disciplina).all()
    return disciplinas


# Update a disciplina by id
@router.put("/disciplina/{disciplina_id}", response_model=DisciplinaRead)
def update_disciplina(disciplina_id: int, disciplina: DisciplinaUpdate):
    db = Session(engine)
    db_disciplina = db.get(Disciplina, disciplina_id)
    if not db_disciplina:
        raise HTTPException(status_code=404, detail="Disciplina not found")
    update_data = disciplina.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_disciplina, key, value)
    db.add(db_disciplina)
    db.commit()
    db.refresh(db_disciplina)
    return db_disciplina


# Delete a disciplina by id
@router.delete("/disciplina/{disciplina_id}")
def delete_disciplina(disciplina_id: int):
    db = Session(engine)
    db_disciplina = db.get(Disciplina, disciplina_id)
    if not db_disciplina:
        raise HTTPException(status_code=404, detail="Disciplina not found")
    db.delete(db_disciplina)
    db.commit()
    return {"message": "Disciplina deleted successfully"}

@router.post("/disciplina_search", response_model=DisciplinaRead)
def search_turma(data: DisciplinaBase):
    with Session(engine) as session:
        print(data)
        try:
            db_disciplina = session.query(Disciplina).where(
                Disciplina.nome == data.nome
            ).one()
        except Exception as e:
            raise HTTPException(status_code=404, detail="Turma not found")
    
    return db_disciplina