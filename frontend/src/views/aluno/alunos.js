import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { checkLoggedIn } from "../../utils/login";
import AlunoModal from "../../components/aluno/modal/aluno-modal";
import { AlunoCard, AlunosFiltro } from "../../components/aluno";
import Modal from "react-modal";
import Header from "../../components/header/header";
import "./alunos.css";
import axios from "axios";
import { URL_API } from "../../config/app-config";
import FiltroComponente from "../../components/filtro/filtro-component";

const Alunos = (props) => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [modalOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
  };

  const loadAlunos = async () => {
    const url = `${URL_API}/aluno`;

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
      console.log("SETANDO ALUNOS => ", response.data);
      setAlunos(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao carregar alunos");
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

  return (
    <div className="alunos-container">
      <Helmet>
        <title>Alunos - Classtool</title>
        <meta property="og:title" content="Alunos - Classtool" />
      </Helmet>
      <Modal
        isOpen={modalOpen}
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
        <AlunoModal closeModal={closeModal} />
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
                return <AlunoCard aluno={aluno} key={key} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alunos;
