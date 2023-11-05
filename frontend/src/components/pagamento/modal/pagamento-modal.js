import { checkLoggedIn } from "../../../utils/login";
import { useState, useEffect } from "react";
import axios from "axios";
import "./pagamento-modal.css";
import { URL_API } from "../../../config/app-config";
import { exibeDataInternacional } from "../../../utils/funcoes_gerais";

const PagamentoModal = ({ closeModal }) => {
  const [valor, setValor] = useState(0);
  const [data, setData] = useState(exibeDataInternacional(new Date()));
  const [alunos, setAlunos] = useState({
    lista: [],
    selecionado: null,
  });
  const [turmas, setTurmas] = useState([]);

  const user = checkLoggedIn();

  const loadTurmas = async () => {
    const url = `${URL_API}/turma`;

    try {
      const response = await axios.get(url, {
        headers: { "Content-Type": "application/json" },
      });

      if (!response) {
        return;
      }
      const turmasProfessor = response.data.filter(
        (t) => t.professor_id === user.id
      );
      setTurmas(turmasProfessor);
      setAlunos({
        ...alunos,
        lista: turmasProfessor.map((t) => t.alunos).flat(),
      });
    } catch (error) {

    }
  };

  const addPagamento = async () => {
    try {
      if (!alunos.selecionado) {
        alert("Selecione um aluno");
        return;
      }

      if (!valor) {
        alert("Informe o valor");
        return;
      }

      if (isNaN(valor)) {
        alert("Valor inválido");
        return;
      }

      if (!data) {
        alert("Informe a data");
        return;
      }

      const url = `${URL_API}/pagamento`;

      const body = {
        aluno_id: alunos.selecionado.id,
        valor,
        data_pagamento: data,
      };

      const response = await axios.post(url, body, {
        headers: { "Content-Type": "application/json" },
      });

      if (!response) {
        alert("Erro ao salvar pagamento");
        return;
      }

      alert("Pagamento salvo com sucesso");
      closeModal(true);
    } catch (e) {
      alert("Erro ao salvar pagamento");
    }
  };

  const handleSelectAluno = (e) => {
    try {
      const alunoTurma = turmas.find((t) => t.alunos.some((a) => a.id == 2));

      setAlunos({
        ...alunos,
        selecionado: alunoTurma.alunos.find((a) => a.id == e.target.value),
      });

      setValor(alunoTurma.mensalidade);
    } catch {}
  };

  useEffect(() => {
    loadTurmas();
  }, []);

  return (
    <div className="aluno-turma-modal-container">
      <div className="aluno-turma-modal-header">
        <h2>Novo pagamento</h2>
      </div>
      <div className="aluno-turma-modal-body">
        <div className="form-control">
          <label className="form-label" htmlFor="aluno">
            Aluno
          </label>
          <select
            className="form-select"
            id="aluno"
            onChange={(e) => handleSelectAluno(e)}
          >
            <option value="">Selecione</option>
            {alunos.lista.map((aluno) => (
              <option value={aluno.id}>{aluno.nome}</option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="valor">
            Valor
          </label>
          <input
            className="form-input"
            type="number"
            id="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="data">
            Data
          </label>
          <input
            className="form-input"
            type="date"
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
      </div>
      <div className="pagamento-modal-footer">
        <button className="button button-main" onClick={addPagamento}>
          Salvar
        </button>
        <button className="button button-secondary" onClick={closeModal}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default PagamentoModal;
