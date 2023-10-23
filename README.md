# Projeto integrador 2

Repositório para guardarmos o desenvolvimento do projeto integrador 2.

## Requirements

- Docker

### Rodando as aplicações

1. Instale o Docker: https://www.docker.com/get-started

2. Clone o repositório:

```bash
git clone https://github.com/leoferro/projeto_integrador_2.git
```

3. Navegue até o diretório do projeto:

```bash
cd projeto_integrador_2
```

4. Inicie os containers com o Docker Compose:

```bash
docker-compose up
```

Este comando iniciará 3 containers: dev_database, dev_backend e dev_frontend.
- O container dev_database mapeia a porta 5432 do host à porta 5432 do container.
- O container dev_backend mapeia a porta 8000 do host à porta 8000 do container.
- O container dev_frontend mapeia a porta 80 do host à porta 3000 do container.

5. Acesse a API em `http://localhost:8000/`.
6. Acesse o frontend em `http://localhost`


## Licença

This project is licensed under the [MIT License](LICENSE).
