import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { Helmet } from "react-helmet";
import { cacheLogOut, checkLoggedIn } from "../../utils/login";

import NavigationLinks from "../../components/navigation/navigation-links";
import "./planners.css";
import Agenda from "./agenda/agenda";
import axios from "axios";
import Header from "../../components/header/header";
import { URL_API } from "../../config/app-config";

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
    const url = `${URL_API}/turma`;

    const response = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  };

  const loadPagamentos = async () => {
    const url = `${URL_API}/pagamento`;

    const response = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  };

  const loadEventos = async () => {
    try {
      const turmas = await loadTurmas();
      const pagamentos = await loadPagamentos();

      setEventos([...turmas, ...pagamentos]);
    } catch (error) {
      alert("Não foi possível carregar o planner.");
    }
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
        <div className="planners-container-master">
          <h1>Meu Planner</h1>
          {eventos && <Agenda eventos={eventos} />}
          <div className="planners-legenda">
            <div className="legenda-item">
              <div className="legenda-item-color legenda-pagamento"></div>
              <p>Pagamento</p>
            </div>
            <div className="legenda-item">
              <div className="legenda-item-color legenda-aula"></div>
              <p>Aula</p>
            </div>
            <div className="legenda-item">
              <div className="legenda-item-color legenda-vencimento"></div>
              <p>Vencimento</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Planners;
