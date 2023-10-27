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
        <div className="planners-container-master">
          <h1>Meu Planner</h1>
          {eventos && <Agenda eventos={eventos} />}
        </div>
      </section>
    </div>
  );
};

export default Planners;
