import requests

source = 'http://0.0.0.0:8000/'

def post(path, json, back = None):
    req = requests.post(f'{source}{path}', json= json)

    assert req.status_code == 200, f'post on {path}'

    if back:
        return req.json()[back]


def put(path, id, data):
    req = requests.put(f'{source}{path}/{str(id)}',  json=data)

    assert req.status_code == 200, f'put on {path}'


def delete(path, id):
    req = requests.delete(f'{source}{path}/{str(id)}')

    assert req.status_code == 200, f'delete on {path}'

#------------------------POST------------------------------

print('teste POST')

## Professor

dic = {
        "nome": "App_teste",
        "email": "App_teste",
        "senha": "App_teste",
        "disciplina_id": 1
    }

professor_id = post('professor', dic, 'id')

## Disciplina

dic = {
  "nome": "App_teste",
  "professor_id": professor_id
}

disciplina_id = post('disciplina', dic, 'id')

## Turma

dic = {
  "vencimento": 10,
  "link_aula": "App_teste",
  "mensalidade": 100,
  "horario_inicial": "10:00",
  "horario_final": "11:00",
  "dia_semana": 3,
  "disciplina_id": disciplina_id,
  "professor_id": professor_id
}

turma_id = post('turma', dic, 'id')

## Aluno

dic = {
  "nome": "App_teste",
  "email": "App@Teste",
  "telefone": "999999999",
  "data_nascimento": "2023-10-30",
  "ativo": True,
  "status_pagamento": True,
  "turma_id": turma_id
}

aluno_id = post('aluno', dic, 'id')

## Pagamento

dic = {
  "data_pagamento": "2023-10-30",
  "valor": 100,
  "aluno_id": aluno_id
}

pagamento_id = post('pagamento', dic, 'id')

#------------------------PUT-------------------------------

print('teste_PUT')

## Professor

dic = {
        "nome": "PUT_TESTE"
    }

put('professor', professor_id, dic)

## Disciplina

dic = {
  "nome": "PUT_TESTE"
}

put('disciplina', disciplina_id, dic)

## Turma

dic = {
  "link_aula": "PUT_TESTE"
}

put('turma', turma_id, dic)

## Aluno

dic = {
  "nome": "PUT_TESTE"
}

put('aluno',aluno_id, dic)

## Pagamento

dic = {
  "valor": 999
}

put('pagamento',pagamento_id, dic)


#------------------------DELETE----------------------------

print('teste DELETE')

delete('pagamento', pagamento_id)
delete('aluno', aluno_id)
delete('turma', turma_id)
delete('disciplina', disciplina_id)
delete('professor', professor_id)

print('tese completo')