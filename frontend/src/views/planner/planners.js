import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { Helmet } from "react-helmet";
import { cacheLogOut, checkLoggedIn } from "../../utils/login";

import NavigationLinks from "../../components/navigation/navigation-links";
import "./planners.css";
import Agenda from "./agenda/agenda";
import axios from "axios";

const Planners = (props) => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    setUser(checkLoggedIn());

    if (checkLoggedIn() == undefined) {
      // console.log(user)
      history.push("/");
    }
  }, []);

  const loadTurmas = async () => {
    const url = "http://localhost:8000/turma";

    const response = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  };

  const loadPagamentos = async () => {
    const url = "http://localhost:8000/pagamento";

    const response = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  };

  const loadEventos = async () => {
    const turmas = await loadTurmas();
    const pagamentos = await loadPagamentos();

    console.log(turmas);

    console.log(pagamentos)

    setEventos([...turmas, ...pagamentos]);
  };

  useEffect(() => {
    loadEventos();
  }, []);

  return (
    <div className="planners-container">
      <Helmet>
        <title>Planners - Classtool</title>
        <meta property="og:title" content="Planners - Classtool" />
      </Helmet>
      <section className="planners-hero">
        <header data-thq="thq-navbar" className="planners-navbar">
          <div className="planners-left">
            <nav className="planners-links"></nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="planners-right"></div>
          <div data-thq="thq-mobile-menu" className="planners-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="planners-nav"
            >
              <div className="planners-container2">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="planners-image"
                />
                <div data-thq="thq-close-menu" className="planners-menu-close">
                  <svg viewBox="0 0 1024 1024" className="planners-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="planners-nav1"
              >
                <span className="planners-text">Featureds</span>
                <span className="planners-text1">How it works</span>
                <span className="planners-text2">Prices</span>
                <span className="planners-text3">Contact</span>
                <button className="planners-book button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="planners-image1"
                  />
                  <span className="planners-text4">Book an appointment</span>
                </button>
              </nav>
            </div>
          </div>
          <header data-role="Header" className="planners-header main-nav-bar">
            <Link to="/">
              <img
                alt="logo"
                src="/Icons/logo_transparent-300h.png"
                className="planners-image2"
              />
            </Link>
            <div className="planners-nav2">
              <NavigationLinks
                text="Perfil"
                text1="Planners"
                text2="Pagamentos"
                text3="Turmas"
                text4="Alunos"
                rootClassName="rootClassName8"
              />
            </div>
            <div className="planners-btn-group">
              <button className="planners-login button">
                <span>
                  <Link to="/">
                    <span onClick={cacheLogOut}>Sair</span>
                  </Link>
                  <br></br>
                </span>
              </button>
            </div>
            <div data-role="BurgerMenu" className="planners-burger-menu1">
              <svg viewBox="0 0 1024 1024" className="planners-icon04">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="planners-mobile-menu1">
              <div className="planners-nav3">
                <div className="planners-container3">
                  <div
                    data-role="CloseMobileMenu"
                    className="planners-menu-close1"
                  >
                    <svg viewBox="0 0 1024 1024" className="planners-icon06">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <NavigationLinks
                  text="Perfil"
                  text1="Planners"
                  text2="Pagamentos"
                  text3="Turmas"
                  text4="Alunos"
                  rootClassName="rootClassName8"
                />
              </div>
            </div>
          </header>
        </header>
        <div className="planners-container-master">
          <h1>Meu Planner</h1>
          {eventos && <Agenda eventos={eventos} />}
        </div>
      </section>
    </div>
  );
};

export default Planners;
