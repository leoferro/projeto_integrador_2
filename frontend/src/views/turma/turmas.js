import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavigationLinks from "../../components/navigation/navigation-links";
import TurmaModal from "../../components/modal/turma/turma-modal";
import Modal from "react-modal";
import "./turmas.css";

import { cacheLogOut, checkLoggedIn } from "../../utils/login";
import TurmaFiltro from "./turma-filtro";

const Turmas = () => {
  //const history = useHistory()
  const [modalOpen, setIsOpen] = useState(false);
  const [navBarStyle, setNavBarStyle] = useState("turmas-navbar");
  const [turmas, setTurmas] = useState([]);

  //  useEffect(() => {
  //    setUser(checkLoggedIn())
  //
  //    if(checkLoggedIn() == undefined){
  // console.log(user)
  //      history.push("/")
  //    }
  //
  //  }, [])

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const loadTurmas = () => {
    const url = "http://localhost:8000/turma"; // Substitua pelo URL correto

    // Define os parâmetros que você quer enviar no corpo da requisição
    const dados = {
      skip: 0,
      limit: 100,
      professor_id: 1, // Substitua pelo ID do professor desejado
    };
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
          onAfterOpen={() => {
            setNavBarStyle("turmas-navbar-open");
          }}
          onAfterClose={() => {
            setNavBarStyle("turmas-navbar");
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
          <TurmaModal />
        </Modal>
      </div>
      <section className="turmas-hero">
        <div className="turmas-container01">
          <TurmaFiltro openModal={openModal} />
          <div className="turmas-container30">
            <div className="turmas-container31">
              <h1>
                <span>Minhas turmas</span>
                <br></br>
              </h1>
            </div>
          </div>
        </div>
        <header data-thq="thq-navbar" className={navBarStyle}>
          <div className="turmas-left">
            <nav className="turmas-links"></nav>
          </div>
          <header data-role="Header" className="main-nav-bar">
            <Link to="/">
              <img
                alt="logo"
                src="/Icons/logo_transparent-300h.png"
                className="turmas-image08"
              />
            </Link>
            <div className="turmas-nav2">
              <NavigationLinks
                text="Perfil"
                text1="Planners"
                text2="Pagamentos"
                text3="Turmas"
                text4="Alunos"
                rootClassName="rootClassName14"
              ></NavigationLinks>
            </div>
            <div className="turmas-btn-group">
              <button className="turmas-login button">
                <span>
                  <Link to="/">
                    <span onClick={cacheLogOut}>Sair</span>
                  </Link>
                  <br></br>
                </span>
              </button>
            </div>
          </header>
        </header>
      </section>
    </div>
  );
};

export default Turmas;
