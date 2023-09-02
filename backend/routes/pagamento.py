from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlmodel import Session
from datetime import date

from ..models import Pagamento, engine
router = APIRouter()

class PagamentoBase(BaseModel):
    data_pagamento: date
    aluno_id: int

class PagamentoCreate(PagamentoBase):
    pass

class PagamentoRead(PagamentoBase):
    id : int
    
    class Config:
        orm_mode = True
        
class PagamentoUpdate(PagamentoBase):
    data_pagamento: date | None
    aluno_id : int | None
    
@router.post("/pagamento", response_model=PagamentoRead)
def create_pagamento(pagamento: PagamentoCreate):
    db_pagamento = Pagamento(**pagamento.dict())
    with Session(engine) as session:
        session.add(db_pagamento)
        session.commit()
        session.refresh(db_pagamento)
        
    return db_pagamento

@router.get("/pagamento/{pagamento_id}", response_model=PagamentoRead)
def read_pagamento(pagament_id : int):
    with Session(engine) as session:
        db_pagamento = session.get(Pagamento, pagament_id)
        if db_pagamento is None:
            raise HTTPException(status_code="404", detail="Pagamento not found")
        return db_pagamento
    
@router.get("/pagamento", response_model=list[PagamentoRead])
def read_pagamentos(skip : int = 0, limit: int = 100):
    with Session(engine) as session:
        pagamentos = session.query(Pagamento).offset(skip).limit(limit).all()
        return pagamentos
    
@router.put("/pagamento/{pagamento_id}", response_model=PagamentoRead)
def update_pagamento(pagamento_id: int, pagamento: PagamentoUpdate):
    with Session(engine) as session:
        db_pagamento = session.get(Pagamento, pagamento_id)
        if db_pagamento is None:
            raise HTTPException(status_code=404, detail="Pagamento not found")
        update_data = pagamento.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_pagamento, key, value)
        session.add(db_pagamento)
        session.commit()
        session.refresh(db_pagamento)
        
        return db_pagamento

@router.delete("/pagamento/{pagamento_id}")
def delete_pagamento(pagamento_id: int):
    with Session(engine) as session:
        db_pagamento = session.get(Pagamento, pagamento_id)
        if db_pagamento is None:
            raise HTTPException(status_code=404, detail="Pagamento not found")
        session.delete(db_pagamento)
        session.commit()
        return {"message": "Pagamento deleted successfully"}
