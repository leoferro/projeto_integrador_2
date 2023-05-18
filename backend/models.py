from datetime import date

from sqlmodel import Field, Relationship, SQLModel, create_engine

__all__ = ["Aluno", "Disciplina", "Pagamento", "Professor", "Turma", "AlunoTurmaLink", "engine"]

engine = create_engine("postgresql://postgres@localhost:5432/pi")


class AlunoTurmaLink(SQLModel, table=True):
    aluno_id: int | None = Field(default=None, primary_key=True, foreign_key="aluno.id")
    turma_id: int | None = Field(default=None, primary_key=True, foreign_key="turma.id")


class Pagamento(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    data_pagamento: date
    valor: float

    aluno_id: int | None = Field(default=None, foreign_key="aluno.id")
    aluno: "Aluno" = Relationship(back_populates="pagamentos")


class Aluno(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    nome: str
    email: str
    senha: str
    telefone: str
    data_nascimento: date
    ativo: bool
    status_pagamento: bool

    pagamentos: list["Pagamento"] = Relationship(back_populates="aluno")
    turmas: list["Turma"] = Relationship(back_populates="alunos", link_model=AlunoTurmaLink)


class Disciplina(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    nome: str

    turmas: list["Turma"] = Relationship(back_populates="disciplina")


class Professor(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    nome: str
    email: str
    senha: str

    turmas: list["Turma"] = Relationship(back_populates="professor")


class Turma(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    inicio: str
    duracao: str
    dia_semana: int

    alunos: list["Aluno"] = Relationship(back_populates="turmas", link_model=AlunoTurmaLink)

    disciplina_id: int | None = Field(default=None, foreign_key="disciplina.id")
    disciplina: "Disciplina" = Relationship(back_populates="turmas")

    professor_id: int | None = Field(default=None, foreign_key="professor.id")
    professor: "Professor" = Relationship(back_populates="turmas")
