FROM python:3.11.3-slim-bullseye

# Seta o diretório de trabalho para /app e cria uma estrutura mínima de subdiretórios
# Essa estrutura de subdiretórios é necessário por causa do projeto do FastAPI
WORKDIR /app
RUN mkdir backend

COPY requirements.txt ./backend

# Instala os módulos do python necessários ao projeto
RUN pip install --no-cache-dir -r ./backend/requirements.txt

# Copia o restande dos arquivos para /app/backend
COPY . ./backend

EXPOSE 8000

CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]