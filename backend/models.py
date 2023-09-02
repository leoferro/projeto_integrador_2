from datetime import date, time

from sqlalchemy import UniqueConstraint
from sqlmodel import Field, Relationship, SQLModel, create_engine

__all__ = ["Aluno", "Disciplina", "Pagamento", "Professor", "Turma", "AlunoTurmaLink", "engine"]

engine = create_engine("postgresql://postgres@host.docker.internal:5432/pi")

class ProfessorDisciplinaLink(SQLModel, table=True):
    professor_id : int | None = Field(default=None, primary_key=True, foreign_key="professor.id")
    disciplina_id : int | None = Field(default=None, primary_key=True, foreign_key="disciplina.id")

class ProfessorAlunoLink(SQLModel, table=True):
    professor_id : int | None = Field(default=None, primary_key=True, foreign_key="professor.id")
    aluno_id : int | None = Field(default=None, primary_key=True, foreign_key="aluno.id")

class AlunoTurmaLink(SQLModel, table=True):
    data_inicio : date
    
    aluno_id: int | None = Field(default=None, primary_key=True, foreign_key="aluno.id")
    turma_id: int | None = Field(default=None, primary_key=True, foreign_key="turma.id")


class Pagamento(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    data_pagamento: date

    aluno_id: int | None = Field(default=None, foreign_key="aluno.id")
    aluno: "Aluno" = Relationship(back_populates="pagamentos")


class Aluno(SQLModel, table=True):
    __table_args__ = (UniqueConstraint("email"),)
    id: int | None = Field(default=None, primary_key=True)
    nome: str
    email: str
    # senha: str
    telefone: str
    data_nascimento: date
    ativo: bool
    status_pagamento: bool

    pagamentos: list["Pagamento"] = Relationship(
        back_populates="aluno",
        sa_relationship_kwargs={"cascade": "all, delete"}
    )
    turmas: list["Turma"] = Relationship(back_populates="alunos", link_model=AlunoTurmaLink)
    professores: list["Professor"] = Relationship(back_populates="alunos", link_model=ProfessorAlunoLink)


class Disciplina(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    nome: str

    turmas: list["Turma"] = Relationship(back_populates="disciplina")
    professores: list["Professor"] = Relationship(back_populates="disciplinas", link_model=ProfessorDisciplinaLink)


class Professor(SQLModel, table=True):
    __table_args__ = (UniqueConstraint("email"),)
    id: int | None = Field(default=None, primary_key=True)
    nome: str
    email: str
    senha: str

    turmas: list["Turma"] = Relationship(
        back_populates="professor",
        sa_relationship_kwargs={"cascade": "delete, delete-orphan"}
        )
    
    disciplinas: list["Disciplina"] = Relationship(
        back_populates="professores", 
        link_model=ProfessorDisciplinaLink, 
        # sa_relationship_kwargs={"cascade": "delete-orphan"}
    )
    
    alunos: list["Aluno"] = Relationship(
        back_populates="professores", 
        link_model=ProfessorAlunoLink, 
        # sa_relationship_kwargs= {"cascade":"delete-orphan"}
    )


class Turma(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    vencimento: int
    link_aula: str
    mensalidade: float

    alunos: list["Aluno"] = Relationship(
        back_populates="turmas", 
        link_model=AlunoTurmaLink
    )

    disciplina_id: int | None = Field(default=None, foreign_key="disciplina.id")
    disciplina: "Disciplina" = Relationship(back_populates="turmas")

    professor_id: int | None = Field(default=None, foreign_key="professor.id")
    professor: "Professor" = Relationship(back_populates="turmas")
    
    calendario_turma: "CalendarioTurma" = Relationship(
        back_populates="turma",
        sa_relationship_kwargs={"cascade": "delete"}
    )

class CalendarioTurma(SQLModel, table=True):
    horario_inicial: time
    horario_final: time
    dia_semana: int
    
    turma_id: int | None = Field(default=None, primary_key=True, foreign_key="turma.id")
    turma: "Turma" = Relationship(back_populates="calendario_turma")
    