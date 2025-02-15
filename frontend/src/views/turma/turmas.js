import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { checkLoggedIn } from "../../utils/login";
import { TurmaCard, TurmaFiltro, TurmaModal, FiltroComponente } from "../../components/turma";
import Modal from "react-modal";
import axios from "axios";
import Header from "../../components/header/header";
import "./turmas.css";
import { URL_API } from "../../config/app-config";

const Turmas = () => {
  //const history = useHistory()
  const [user, setUser] = useState(undefined);
  const [modalOpen, setIsOpen] = useState(false);
  const [navBarStyle, setNavBarStyle] = useState("turmas-navbar");
  const [turmas, setTurmas] = useState([]);
  const [turmasFiltro, setTurmasFiltro] = useState({
    qtdAluno: null,
    diaSemana: null,
    vencimento: null,
    txtPesquisa: null,
  });
  const [editTurma, setEditTurma] = useState(null);

  useEffect(() => {
    setUser(checkLoggedIn());

    if (checkLoggedIn() == undefined) {
      history.push("/");
    }
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (reload) => {
    setIsOpen(false);
    if(reload) {
      loadTurmas();
    }
  };

  const loadTurmas = async () => {
    const url = `${URL_API}/turma`;

    const dados = {
      skip: 0,
      limit: 100,
      professor_id: user.id,
    };

    try {
      const response = await axios.get(url, dados, {
        headers: { "Content-Type": "application/json" },
      });

      if (!response) {
        alert("Erro ao carregar turmas");
        return;
      }
      setTurmas(response.data.filter(t => t.professor_id == user.id));
    } catch (error) {
      alert("Erro ao carregar turmas");
    }
  };

  useEffect(() => {
    if (user) {
      loadTurmas();
    }
  }, [user]);

  const filtros = {
    qtdAluno: {
      handler: (value) => {
        setTurmasFiltro({
          ...turmasFiltro,
          qtdAluno: value != 0 ? value : null,
        });
      },
    },
    diaSemana: {
      handler: (value) => {
        setTurmasFiltro({
          ...turmasFiltro,
          diaSemana: value != 0 ? value : null,
        });
      },
    },
    vencimento: {
      handler: (value) => {
        setTurmasFiltro({
          ...turmasFiltro,
          vencimento: value != 0 ? value : null,
        });
      },
    },
    pesquisa: {
      handler: (value) => {
        setTurmasFiltro({
          ...turmasFiltro,
          txtPesquisa: value,
        });
      },
    },
  };

  return (
    <div className="turmas-container">
      <Helmet>
        <title>Turmas - Classtool</title>
        <meta property="og:title" content="Turmas - Classtool" />
      </Helmet>
      <div className="turmas-modal">
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              top: "0px",
              left: "0px",
              right: "0px",
              bottom: "0px",
              padding: "24px",
              position: "absolute",
              width: "70%",
              height: "90%",
              margin: "auto",
              display: "flex",
              borderRadius: "12px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0px 0px 25px -2px rgba(66, 68, 90, 0.4)",
            },
            overlay: {
              backdropFilter: "blur(4px)",
            },
          }}
        >
          <TurmaModal editTurma={editTurma} closeModal={closeModal} />
        </Modal>
      </div>
      <section className="turmas-hero">
        <h1>Minhas turmas</h1>
        <div className="turmas-container-master">
          {/* <TurmaFiltro openModal={openModal} /> */}
          <FiltroComponente openModal={openModal} filtros={filtros} />
          <div className="turmas-container">
            <div className="turmas-grid">
              {turmas
                .filter((turma) => {
                  let filtroDiaSemana = null;
                  let filtroQtdAluno = null;
                  let filtroVencimento = null;
                  let filtroPesquisa = null;

                  const checaFiltro = (filtro) => {
                    return filtro == null || filtro;
                  };

                  if (turmasFiltro.diaSemana) {
                    filtroDiaSemana =
                      turma.dia_semana === Number(turmasFiltro.diaSemana);
                  }

                  if (turmasFiltro.qtdAluno) {
                    if (turmasFiltro.qtdAluno.includes("+")) {
                      filtroQtdAluno =
                        turma.alunos.length >=
                        Number(turmasFiltro.qtdAluno.replace("+", ""));
                    } else {
                      filtroQtdAluno =
                        turma.alunos.length == Number(turmasFiltro.qtdAluno);
                    }
                  }

                  if (turmasFiltro.vencimento) {
                    filtroVencimento =
                      turma.vencimento === Number(turmasFiltro.vencimento);
                  }

                  if (
                    turmasFiltro.txtPesquisa &&
                    turmasFiltro.txtPesquisa != ""
                  ) {
                    filtroPesquisa = turma.disciplina
                      .toLowerCase()
                      .includes(turmasFiltro.txtPesquisa.toLowerCase());
                  }

                  return (
                    checaFiltro(filtroDiaSemana) &&
                    checaFiltro(filtroQtdAluno) &&
                    checaFiltro(filtroVencimento) &&
                    checaFiltro(filtroPesquisa)
                  );
                })
                .map((turma) => {
                  return (
                    <Link
                      to={`/turma/${turma.id}`}
                      style={{ textDecoration: "none", height: "fit-content" }}
                    >
                      <TurmaCard key={turma.id} turma={turma} />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Turmas;
