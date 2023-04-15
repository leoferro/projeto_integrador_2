from fastapi import FastAPI
from sqlmodel import create_engine, SQLModel
from .models import *

app = FastAPI()


@app.on_event("startup")
async def startup():
    engine = create_engine("postgresql://postgres@localhost:5432/pi")
    SQLModel.metadata.create_all(engine)


@app.get("/")
async def root():
    return {"message": "Hello, World!"}
