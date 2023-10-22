import React, { useState } from "react";
import PropTypes from "prop-types";
import "./aluno-cadastro.css";

const AlunoCadastro = () => {
  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [ativo, setAtivo] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nome, dataNasc, email, telefone, ativo });
  };

  return (
    <div data-modal="practices" className={`cadastro2-cadastro`}>
      <div className="cadastro2-nova-turma">
        <div className="cadastro2-container">
          <div className="cadastro2-container01">
            <form className="cadastro2-form" onSubmit={handleSubmit}>
              <div className="cadastro2-container02">
                <h1>Novo aluno</h1>
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
              <button name="signup" type="submit" className="button">
                <span className="button button-main">
                  <span>Cadastrar</span>
                  <br></br>
                </span>
              </button>
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
