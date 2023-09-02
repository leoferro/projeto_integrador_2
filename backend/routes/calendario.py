from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlmodel import Session
from datetime import time

from ..models import CalendarioTurma, engine

router = APIRouter()

class CalendarioBase(BaseModel):
#Calendario Turma
    turma_id: int
    horario_inicial: time
    horario_final: time
    dia_semana: int
    
class CalendarioCreate(CalendarioBase):
    pass

class CalendarioRead(CalendarioBase):
    class Config:
        orm_mode = True
        
class CalendarioUpdate(CalendarioBase):
    #Calendario Turma
    horario_inicial: time | None
    horario_final: time | None
    dia_semana: int | None
    
@router.post("/calendario", response_model=CalendarioRead)
def create_calendario(calendario: CalendarioCreate):
    with Session(engine) as session:
        db_calendario = CalendarioTurma(**calendario.dict())
        
        session.add(db_calendario)
        session.commit()
        session.refresh(db_calendario)
        
        for key, value in calendario.dict().items():
            setattr(db_calendario, key, value)
        # session.refresh(db_calendario_calendario)
        return db_calendario
    
@router.get("/calendario/{calendario_id}", response_model=CalendarioRead)
def read_calendario(calendario_id : int):
    with Session(engine) as session:
        db_calendario = session.get(CalendarioTurma, calendario_id)
        if db_calendario is None:
            raise HTTPException(status_code=404, detail="calendario not found")
        return db_calendario
    
@router.get("/calendario", response_model=list[CalendarioRead])
def read_calendarios(skip : int = 0, limit : int = 100):
    with Session(engine) as session:
        calendarios = session.query(CalendarioTurma).offset(skip).limit(limit).all()
        return calendarios

@router.put("/calendario/{calendario_id}", response_model=CalendarioRead)
def update_calendario(calendario_id: int, calendario: CalendarioUpdate):
    with Session(engine) as session:
        db_calendario = session.get(CalendarioTurma, calendario_id)
        if db_calendario is None:
            raise HTTPException(status_code=404, detail="calendario not found")
        update_data = calendario.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_calendario, key, value)
        
        session.add(db_calendario)
        session.commit()
        session.refresh(db_calendario)
        
        return db_calendario
    
@router.delete("/calendario/{turma_id}")
def delete_calendario(turma_id : int):
    with Session(engine) as session:
        db_calendario = session.query(CalendarioTurma).where(
            CalendarioTurma.turma_id == turma_id
        ).all()
        if db_calendario is None:
            raise HTTPException(status_code=404, detail="calendario not found")
        for calendario in db_calendario:
            session.delete(calendario)
        
        session.commit()
    return {"message": "calendario deleted successfully"}