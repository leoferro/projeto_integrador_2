import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import DangerousHTML from "dangerous-html/react";
import { Helmet } from "react-helmet";

import NavigationLinks from "../../components/navigation/navigation-links";
import "./pagamentos.css";

import { cacheLogOut, checkLoggedIn } from "../../utils/login";
import Footer from "../../components/footer/footer";
import PagamentoFiltro from "../../components/pagamento/pagamento-filtro";
import FiltroComponente from "../../components/filtro/filtro-component";
import Header from "../../components/header/header";
import PagamentoStats from "../../components/pagamento/stats/pagamento-stats";
import axios from "axios";
import PagamentoTable from "../../components/pagamento/table/pagamento-table";
import { URL_API } from "../../config/app-config";

const Pagamentos = (props) => {
  const [user, setUser] = useState();
  const [turmas, setTurmas] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setUser(checkLoggedIn());

    if (checkLoggedIn() == undefined) {
      // console.log(user)
      history.push("/");
    }

    loadTurmas();
  }, []);

  const loadTurmas = async () => {
    const url = `${URL_API}/turma`;

    const dados = {
      skip: 0,
      limit: 100,
    };

    try {
      const response = await axios.get(url, dados, {
        headers: { "Content-Type": "application/json" },
      });

      if (!response) {
        alert("Erro ao carregar turmas");
        return;
      }
      console.log("SETANDO TURMAS => ", response.data);
      setTurmas(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao carregar turmas");
    }
  };


  const filtros = {
    mes: {
      handler: (value) => {
        console.log(value);
      },
    },
  };

  const tableData = [
    {
      column: "aluno",
      label: "Aluno",
    },
    {
      column: "disciplina",
      label: "Disciplina",
    },
    {
      column: "valor",
      label: "Valor",
    },
    {
      column: "vencimento",
      label: "Vencimento",
    },
    {
      column: "dataPagamento",
      label: "Data",
    },
    {
      column: "metodo",
      label: "Método",
    },
    {
      column: "status",
      label: "Status",
    },
  ]

  return (
    <div className="pagamentos-container-master">
      <Helmet>
        <title>Pagamentos - Classtool</title>
        <meta property="og:title" content="Pagamentos - Classtool" />
      </Helmet>
      <section className="pagamentos-hero">
        <div className="pagamentos-container">
          <FiltroComponente filtros={filtros} />
          <div className="pagamentos-container-data">
            <h1>Meus pagamentos</h1>
            <div className="pagamentos-container26">
              <div className="pagamentos-container27">
                <div className="pagamentos-div">
                  <PagamentoTable labels={tableData} data={[]} />
                </div>
              </div>
              {turmas && <PagamentoStats turmas={turmas} />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pagamentos;
