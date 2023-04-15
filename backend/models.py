__all__ = ["Aluno", "CalendarioTurma", "Disciplina", "Pagamento", "Professor", "Turma"]

from sqlmodel import SQLModel, Field


class Aluno(SQLModel, table=True):
    id: int = Field(primary_key=True)
    nome: str
    email: str
    senha: str
    telefone: str
    data_nascimento: str
    ativo: bool
    status_pagamento: bool


class CalendarioTurma(SQLModel, table=True):
    id: int = Field(primary_key=True)
    inicio: str
    duracao: str
    dia_semana: int
    turma_id: int = Field(foreign_key="turma.id")


class Disciplina(SQLModel, table=True):
    id: int = Field(primary_key=True)
    nome: str


class Pagamento(SQLModel, table=True):
    id: int = Field(primary_key=True)
    data_pagamento: str
    valor: float
    aluno_id: int = Field(foreign_key="aluno.id")


class Professor(SQLModel, table=True):
    id: int = Field(primary_key=True)
    nome: str
    email: str
    senha: str
    disciplina_id: int = Field(foreign_key="disciplina.id")


class Turma(SQLModel, table=True):
    id: int = Field(primary_key=True)
