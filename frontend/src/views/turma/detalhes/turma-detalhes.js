import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { URL_API } from "../../../config/app-config";
import axios from "axios";
import Loading from "../../../components/loading/loading";
import { Helmet } from "react-helmet";
import {
  exibeDiaSemana,
  exibePeriodoHora,
} from "../../../utils/funcoes_gerais";
import Modal from "react-modal";
import "./turma-detalhes.css";
import AlunoTurmaModal from "../../../components/aluno/modal/aluno-turma";

const TurmaDetalhes = () => {
  const { id } = useParams();
  const [turma, setTurma] = useState();
  const [showAlunoModal, setShowAlunoModal] = useState(false);

  const loadTurma = async () => {
    const url = `${URL_API}/turma/${id}`;
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response) {
        setTurma(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!turma) {
      loadTurma();
    }
  }, [id]);

  return (
    <div className="perfil-container">
      <Helmet>
        <title>Turma - Classtool</title>
        <meta property="og:title" content="Turma - Classtool" />
      </Helmet>
      {turma && (
        <Modal
          isOpen={showAlunoModal}
          onRequestClose={() => setShowAlunoModal(false)}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <AlunoTurmaModal turma={turma} closeModal={() => setShowAlunoModal(false)} />
        </Modal>
      )}
      <section className="container-hero">
        {turma ? (
          <>
            <h1>Detalhes da turma</h1>
            <div className="turma-info">
              <div className="turma-info-header">
                <h2>{turma.disciplina}</h2>
                <span>{exibeDiaSemana(turma.dia_semana)}</span>
              </div>
              <span>
                {exibePeriodoHora(turma.horario_inicial, turma.horario_final)}
              </span>
              <p>R${turma.mensalidade}</p>
              <div className="turma-alunos">
                <div className="turma-alunos-header">
                  <h3>Alunos</h3>
                  <button
                    className="button button-main"
                    onClick={() => setShowAlunoModal(true)}
                  >
                    Adicionar
                  </button>
                </div>
                {turma.alunos.length ? (
                  <ul className="lista-alunos">
                    {turma.alunos.map((aluno) => (
                      <li key={aluno.id}>
                        {aluno.nome}
                        <a href={`mailto:${aluno.email}`} className="aluno-email">{aluno.email}</a>
                        </li>
                    ))}
                  </ul>
                ) : (
                  <p>Nenhum aluno matriculado</p>
                )}
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </section>
    </div>
  );
};

export default TurmaDetalhes;
