import { useEffect } from "react";
import { useState } from "react";
import "./aluno-turma.css";
import { URL_API } from "../../../config/app-config";
import axios from "axios";
import Loading from "../../loading/loading";
import { exibeDataInternacional } from "../../../utils/funcoes_gerais";
import { checkLoggedIn } from "../../../utils/login";

const AlunoTurmaModal = ({ turma, closeModal }) => {
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);
  const [alunos, setAlunos] = useState([]);

  const loadAlunos = async (userId) => {
    const url = `${URL_API}/aluno/p/${userId}`;

    const dados = {
      skip: 0,
      limit: 100,
    };

    try {
      const response = await axios.get(url, dados, {
        headers: { "Content-Type": "application/json" },
      });

      if (!response) {
        alert("Erro ao carregar alunos");
        return;
      }

      setAlunos(response.data);
    } catch (error) {

      alert("Erro ao carregar alunos");
    }
  };

  const addAlunoTurma = async () => {
    const url = `${URL_API}/atl`; // aluno-turma-link

    const data = {
      data_inicio: exibeDataInternacional(new Date()),
      turma_id: turma.id,
      aluno_id: alunoSelecionado.id,
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          "Allow-Cross-Origin": "*",
        },
      });

      if (!response) {
        alert("Erro ao adicionar aluno");
        return;
      }
      alert("Aluno adicionado com sucesso");

    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao adicionar aluno");
    }
  };

  useEffect(() => {
    var user = checkLoggedIn();
    loadAlunos(user.id);
  }, []);

  return turma ? (
    <div className="aluno-turma-modal-container">
      <div className="aluno-turma-modal-header">
        <h2>Adicionar aluno</h2>
        <span>
          Selecione um aluno para adicionar a turma <b>{turma.disciplina}</b>
        </span>
      </div>
      <div className="aluno-turma-modal-body">
        <div className="aluno-turma-modal-alunos">
          {alunos.map((aluno) => (
            <div
              className={`aluno-turma-modal-aluno ${
                alunoSelecionado && alunoSelecionado._id === aluno._id
                  ? "selecionado"
                  : ""
              }`}
              onClick={() => {
                alunoSelecionado?.id === aluno.id
                  ? setAlunoSelecionado(null)
                  : setAlunoSelecionado(aluno);
              }}
            >
              <div className="aluno-info">
                <h3>{aluno.nome}</h3>
                <span>{aluno.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="aluno-turma-modal-footer">
        <button className="button button-main" onClick={addAlunoTurma}>
          Adicionar
        </button>
        <button className="button button-secondary" onClick={closeModal}>
          Cancelar
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default AlunoTurmaModal;
