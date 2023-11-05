import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { PagamentoModal, PagamentoStats, PagamentoTable } from "../../components/pagamento";
import { URL_API } from "../../config/app-config";
import { checkLoggedIn } from "../../utils/login";
import FiltroComponente from "../../components/filtro/filtro-component";
import axios from "axios";
import "./pagamentos.css";
import Modal from "react-modal";
import moment from "moment";

const Pagamentos = (props) => {
  const [user, setUser] = useState();
  const [pagamentos, setPagamentos] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const usuario = checkLoggedIn();
    setUser(usuario);

    loadTurmas(usuario);
  }, []);

  useEffect(() => {
    if(turmas) {
      loadPagamentos();
    }
  }, [turmas])

  const loadPagamentos = async (usuario) => {
    const url = `${URL_API}/pagamento`;

    try {
      const response = await axios.get(url, {
        headers: { "Content-Type": "application/json" },
      });

      if (!response) {
        alert("Erro ao carregar pagamentos");
        return;
      }

      const idsAlunosTurma = turmas.map(t => t.alunos).flat().map(a => a.id);

      const todosPagamentos = response.data.filter(p => idsAlunosTurma.includes(p.aluno_id));

      const pagamentosPendentes =  buscaPagamentosPendentes(todosPagamentos);

      setPagamentos([...todosPagamentos, ...pagamentosPendentes]);
    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao carregar pagamentos");
    }
  }

  const loadTurmas = async () => {
    const url = `${URL_API}/turma`;

    try {
      const response = await axios.get(url, {
        headers: { "Content-Type": "application/json" },
      });

      if (!response) {
        alert("Erro ao carregar turmas");
        return;
      }

      setTurmas(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao carregar turmas");
    }
  }


  const filtros = {
    mes: {
      handler: (value) => {
        console.log(value);
      },
    },
  };

  const tableData = [
    {
      column: "aluno_id",
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
      column: "data_pagamento",
      label: "Data",
    },
  ]

  const closeModal = (reload) => {
    setModal(false);
    if (reload) {
      loadTurmas();
    }
  }

  const buscaPagamentosPendentes = (tdsPagamentos) => {
    const pendentes = [];
    // aqui nós vamos pegar todos os pagamentos do mês atual de cada turma
    // vamos ver quais alunos não pagaram e vamos inserir um pagamento pendente para cada um
    // o valor do pagamento pendente é o valor da mensalidade da turma
    
    // vamos pegar o mês atual
    const mesAtual = new Date().getMonth() + 1;
    const anoAtual = new Date().getFullYear();
    // vamos pegar todos os pagamentos do mês atual
    const pagamentosMesAtual = tdsPagamentos.filter(p => moment(p.data_pagamento).month() + 1 === mesAtual && 
      new Date(p.data_pagamento).getFullYear() === anoAtual);

    // vamos pegar os ids dos alunos que pagaram
    const idsAlunosPagantes = pagamentosMesAtual.map(p => p.aluno_id);

    // vamos pegar os ids dos alunos que não pagaram
    const idsAlunosPendentes = turmas.map(t => t.alunos).flat()
    .filter(a => a.ativo)
    .map(a => a.id).filter(id => !idsAlunosPagantes.includes(id));


    // vamos inserir um pagamento pendente para cada aluno
    idsAlunosPendentes.forEach(id => {
      const alunoTurma = turmas.find(t => t.alunos.some(a => a.id === id));
      const mensalidade = alunoTurma.mensalidade;

      // se o pagamento já passou do vencimento, vamos inserir o pagamento pendente com o status de atrasado

      const statusPagamento = moment().date(alunoTurma.vencimento).isAfter(moment()) ? "pendente" : "atrasado";

      const pagamentoPendente = {
        aluno_id: id,
        valor: mensalidade,
        data_pagamento: null,
        status: statusPagamento,
      };

      pendentes.push(pagamentoPendente);
    });

    return pendentes;
  }

  return (
    <div className="pagamentos-container-master">
      <Helmet>
        <title>Pagamentos - Classtool</title>
        <meta property="og:title" content="Pagamentos - Classtool" />
      </Helmet>
      <Modal
          isOpen={modal}
          onRequestClose={() => setModal(false)}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <PagamentoModal closeModal={closeModal} />
        </Modal>
      <section className="pagamentos-hero">
        <div className="pagamentos-container">
          <FiltroComponente filtros={filtros} openModal={() => setModal(true)} />
          <div className="pagamentos-container-data">
            <h1>Meus pagamentos</h1>
            <div className="pagamentos-container-master">
              <div className="pagamentos-container-table">
                <div className="pagamentos-div">
                  {pagamentos && turmas && <PagamentoTable labels={tableData} data={pagamentos} turmas={turmas} />}
                </div>
              </div>
              {pagamentos && turmas && <PagamentoStats pagamentos={pagamentos} turmas={turmas} pendentes={buscaPagamentosPendentes(pagamentos)} />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pagamentos;
