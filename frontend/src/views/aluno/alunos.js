import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { checkLoggedIn } from "../../utils/login";
import { AlunoCard, AlunoModal } from "../../components/aluno";
import { URL_API } from "../../config/app-config";
import FiltroComponente from "../../components/filtro/filtro-component";
import Modal from "react-modal";
import "./alunos.css";
import axios from "axios";

const Alunos = (props) => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [modalOpen, setIsOpen] = useState({
    open: false,
    aluno: null,
  });
  const [alunos, setAlunos] = useState([]);
  const [alunosFiltro, setAlunosFiltros] = useState({
    txtPesquisa: "",
    status: "",
  });
  const [navBarStyle, setNavBarStyle] = useState("alunos-navbar");

  useEffect(() => {
    setUser(checkLoggedIn());

    if (checkLoggedIn() == undefined) {
      // console.log(user)
      history.push("/");
    }
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen({
      open: false,
      aluno: null,
    });
  };

  const loadAlunos = async () => {
    const url = `${URL_API}/aluno/p/${user.id}`;

    try {
      const alunosResponse = await axios.get(url, {
        headers: { "Content-Type": "application/json" },
      });

      if (!alunosResponse) {
        alert("Erro ao carregar alunos");
        return;
      }
      setAlunos(alunosResponse.data);
    } catch (error) {
      alert("Erro ao carregar alunos");
      console.log(error)
    }
  };

  const filtrosData = {
    pesquisa: {
      handler: (texto) => {
        setAlunosFiltros({ ...alunosFiltro, txtPesquisa: texto });
      },
    },
    status: {
      handler: (status) => {
        setAlunosFiltros({ ...alunosFiltro, status: status });
      },
    },
  };

  useEffect(() => {
    if (user) {
      loadAlunos();
    }
  }, [user]);

  const editEvent = (aluno) => {
    setIsOpen({
      open: true,
      aluno: aluno,
    });
  };

  return (
    <div className="alunos-container">
      <Helmet>
        <title>Alunos - Classtool</title>
        <meta property="og:title" content="Alunos - Classtool" />
      </Helmet>
      <Modal
        isOpen={modalOpen.open}
        onRequestClose={closeModal}
        onAfterOpen={() => {
          setNavBarStyle("alunos-navbar-open");
        }}
        onAfterClose={() => {
          setNavBarStyle("alunos-navbar");
        }}
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
            backgroundColor: "#ffffff",
          },
          overlay: {
            backdropFilter: "blur(4px)",
          },
        }}
      >
        <AlunoModal closeModal={closeModal} user={user} editAluno={modalOpen.aluno} />
      </Modal>
      <section className="alunos-hero">
        <div className="alunos-container27">
          <h1>Meus alunos</h1>
        </div>
        <div className="alunos-container-master">
          <FiltroComponente openModal={openModal} filtros={filtrosData} />
          <div className="alunos-list">
            {alunos
              .filter((aluno) => {
                let filtroPesquisa = null;
                let statusPesquisa = null;

                const checaFiltro = (filtro) => {
                  return filtro == null || filtro;
                };

                if (alunosFiltro.status && alunosFiltro.status != "0") {
                  statusPesquisa = aluno.ativo == (alunosFiltro.status == "1");
                }

                if (
                  alunosFiltro.txtPesquisa &&
                  alunosFiltro.txtPesquisa != ""
                ) {
                  filtroPesquisa =
                    aluno.nome
                      .toLowerCase()
                      .includes(alunosFiltro.txtPesquisa.toLowerCase()) ||
                    aluno.email
                      .toLowerCase()
                      .includes(alunosFiltro.txtPesquisa.toLowerCase());
                }

                return (
                  checaFiltro(filtroPesquisa) && checaFiltro(statusPesquisa)
                );
              })
              .map((aluno, key) => {
                return <AlunoCard aluno={aluno} key={key} editEvent={() => {
                  editEvent(aluno);
                }} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alunos;
