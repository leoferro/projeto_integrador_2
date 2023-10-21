import { useState } from "react";
import { useHistory } from "react-router-dom";
import { cacheLogIn } from "../utils/login";
import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

import "./cadastro01.css";

const CadastroForm = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation if needed

    // Prepare the data for the request
    const data = {
      nome: nome,
      email: email,
      senha: senha,
    };

    // Send the request to the backend using Axios
    axios
      .post("http://localhost:8000/professor", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data != null) {
          cacheLogIn(response.data);
          alert("Usuário cadastrado com sucesso!");
          history.push("/planners");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Erro ao cadastrar o usuário");
      });

    // Clear the input field
    setNome("");
    setEmail("");
    setSenha("");
  };

  return (
    <div className={`cadastro01-container ${props.rootClassName} `}>
      <form onSubmit={handleSubmit} className="cadastro01-form">
        <div className="cadastro01-container1">
          <h1>{props.heading}</h1>
        </div>
        <div className="cadastro01-container2">
          <input
            type="text"
            value={nome}
            title="Nome Completo"
            onChange={(e) => setNome(e.target.value)}
            placeholder={props.textinput_placeholder}
            className="enter-text input"
            required
          />
        </div>
        <div className="cadastro01-container3">
          <input
            type="email"
            value={email}
            title="Email"
            onChange={(e) => setEmail(e.target.value)}
            // onFocus={(e) => {e.target.placeholder = ""; e.target.className += " selected"}}
            onBlur={(e) => {
              e.target.placeholder = props.textinput_placeholder1;
              e.target.className = "cadastro01-textinput1 input";
            }}
            placeholder={props.textinput_placeholder1}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Insira um Email Válido: \n- exemplo@provedor.com"
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            className="cadastro01-textinput1 input"
            size="30"
            required
          />
        </div>
        <div className="cadastro01-container4">
          <input
            type="password"
            value={senha}
            title="Senha"
            onChange={(e) => setSenha(e.target.value)}
            // onFocus={(e) => {e.target.placeholder = ""; e.target.className += " selected"}}
            onBlur={(e) => {
              e.target.placeholder = props.textinput_placeholder2;
              e.target.className = "cadastro01-textinput2 input";
            }}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Senha deve conter: \n-Mínimo 06 caracteres\n-Mínimo 01 letra maiúscula\n-Mínimo 01 letra minúscula\n-Mínimo 01 dígito\n-Mínimo 01 caracter especial"
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
            placeholder={props.textinput_placeholder2}
            className="cadastro01-textinput2 input"
            autocomplete="new-password"
            minlength="6"
            pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{6,}$"
            required
          />
        </div>
        <button name="signup" type="submit" className="button">
          <span className="button button-main">
            <span>Cadastrar</span>
            <br></br>
          </span>
        </button>
      </form>
    </div>
  );
};

CadastroForm.defaultProps = {
  heading: "Cadastro",
  rootClassName: "",
  textinput_placeholder2: "Senha",
  textinput_placeholder: "Nome Completo",
  textinput_placeholder1: "Email",
};

CadastroForm.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
};

export default CadastroForm;
