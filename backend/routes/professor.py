from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlmodel import Session

from ..models import Professor, engine

router = APIRouter()


class ProfessorBase(BaseModel):
    nome: str
    email: str
    senha: str


class ProfessorCreate(ProfessorBase):
    disciplina_id: int


class ProfessorRead(ProfessorBase):
    id: int
    disciplina_id: int

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
        session.delete(db_professor)
        session.commit()
        return {"message": "Professor deleted successfully"}
