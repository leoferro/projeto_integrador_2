import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./aluno-cadastro.css";
import axios from "axios";
import { URL_API } from "../../../config/app-config";

const AlunoCadastro = ({ closeModal, user, editAluno }) => {
  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [ativo, setAtivo] = useState(false);
  const [turmas, setTurmas] = useState({
    lista: [],
    idSelecionado: 0,
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!turmas.idSelecionado && !editAluno) {
      alert("Selecione uma turma");
      return;
    }

    const url = !editAluno ? `${URL_API}/aluno` : `${URL_API}/aluno/${editAluno.id}`;

    const dados = {
      nome: nome,
      email: email,
      telefone: telefone,
      data_nascimento: dataNasc,
      ativo: ativo,
      status_pagamento: false,
    };

    if(!editAluno)
      dados.turma_id = turmas.idSelecionado;

    try {
      const response = editAluno ? await axios.put(url, dados, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }) : await axios.post(url, dados, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      const textoResposta = editAluno ? "atualizado" : "cadastrado";
      const textoErro = editAluno ? "atualizar" : "cadastrar";

      if (!response) {
        alert(`Erro ao ${textoErro} aluno`);
        return;
      }

      alert(`Aluno ${textoResposta} com sucesso`);
      closeModal();
    } catch (error) {
      alert(`Erro ao ${textoErro} aluno`);
    }
  };

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
      setTurmas({
        ...turmas,
        lista: response.data.filter((t) => t.professor_id == user.id),
      });
    } catch (error) {
      alert("Erro ao carregar turmas");
    }
  }

  useEffect(() => {
    if (user) {
      loadTurmas();

      console.log("RECEBI O ALUNO!!!", editAluno)
      if(editAluno) {
        setNome(editAluno.nome);
        setDataNasc(editAluno.data_nascimento);
        setEmail(editAluno.email);
        setTelefone(editAluno.telefone);
        setAtivo(editAluno.ativo);
      }
    }
  }, [user, editAluno]);

  return (
    <div data-modal="practices" className={`cadastro2-cadastro`}>
      <div className="cadastro2-nova-turma">
        <div className="cadastro2-container">
          <div className="cadastro2-container01">
            <form className="cadastro2-form" onSubmit={handleSubmit}>
              <div className="cadastro2-container02">
                {!editAluno ? <h1>Novo aluno</h1> : <h1>Editar aluno</h1>}
              </div>
              <div className="cadastro2-container03">
                <label htmlFor="nome" className="cadastro2-text1">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Nome Completo"
                  required
                  autoFocus
                  className="enter-text input"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </div>
              <div className="cadastro2-container04">
                <label htmlFor="data_nasc" className="cadastro2-text1">
                  Data de nascimento
                </label>
                <input
                  type="date"
                  id="data_nasc"
                  required
                  autoFocus
                  className="enter-text input"
                  value={dataNasc}
                  onChange={(event) => setDataNasc(event.target.value)}
                />
              </div>
              <div className="cadastro2-container05">
                <label htmlFor="email" className="cadastro2-text1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="aluno@aluno.com"
                  required
                  autoFocus
                  className="enter-text input"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="cadastro2-container06">
                <label htmlFor="telefone" className="cadastro2-text1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  required
                  placeholder="(xx) xxxxx-xxxx"
                  autoFocus
                  className="enter-text input"
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value)}
                />
              </div>
              {!editAluno && (
                <div className="cadastro-turma">
                <label htmlFor="turma" className="cadastro2-text1">
                  Turma
                </label>
                <select
                  id="turma"
                  required
                  autoFocus
                  className="enter-text input"
                  value={turmas.idSelecionado}
                  onChange={(event) => setTurmas({ ...turmas, idSelecionado: event.target.value })}
                >
                  <option value={0}>Selecione uma turma</option>
                  {turmas.lista.map((turma) => (
                    <option value={turma.id}>{turma.disciplina}</option>
                  ))}
                </select>
              </div>
              )}
              <span>Ativo?</span>
              <div className="cadastro2-container07">
                <div className="cadastro2-container08">
                  <input
                    type="radio"
                    id="ativo"
                    name="status"
                    value={true}
                    checked={ativo}
                    onChange={() => setAtivo(true)}
                  />
                  <label htmlFor="ativo" className="cadastro2-text2">
                    Sim
                  </label>
                </div>
                <div className="cadastro2-container09">
                  <input
                    type="radio"
                    id="desativado"
                    name="status"
                    value={false}
                    checked={!ativo}
                    onChange={() => setAtivo(false)}
                  />
                  <label htmlFor="desativado" className="cadastro2-text3">
                    Não
                  </label>
                </div>
              </div>
              <div className="buttons">
                <button
                  name="signup"
                  type="submit"
                  className="button button-main"
                >
                  {!editAluno ? 'Cadastrar' : 'Salvar'}
                </button>
                <button
                  className="button button-secondary"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AlunoCadastro.defaultProps = {
  text2: "Inativo",
  textinput_placeholder2: "Telefone",
  text1: "Ativo",
  heading: "Cadastro Novo Aluno",
  textinput_placeholder: "Nome Completo",
  text: "Data de Nascimento",
  textinput_placeholder1: "Email",
  rootClassName: "",
};

AlunoCadastro.propTypes = {
  text2: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default AlunoCadastro;
