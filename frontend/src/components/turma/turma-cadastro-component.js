import React, { useState } from "react";

import axios from "axios";
import InputMask from "react-input-mask";

import "./turma-cadastro-component.css";
import { checkLoggedIn } from "../../utils/login";
import { URL_API } from "../../config/app-config";

const TurmaCadastroComponent = ({ rootClassName, closeModal }) => {
  const [disciplina, setDisciplina] = useState("");
  const [horarioInicio, setHorarioInicio] = useState({
    hora: "00",
    minuto: "00",
  });
  const [horarioFim, setHorarioFim] = useState({
    hora: "00",
    minuto: "00",
  });
  const [valorHoraAula, setValorHoraAula] = useState(0);
  const [diaVencimento, setDiaVencimento] = useState(1);
  const [diaDaSemana, setDiaDaSemana] = useState(1);

  const user = checkLoggedIn();

  const updateHora = (value, setHora) => {
    try {
      // se houver letras, remove
      if (isNaN(value)) {
        value = value.replace(/\D/g, "");
      }
      var hora = value;
      switch (value.length) {
        case 1:
          hora = "0" + value;
          setHora(hora);
          break;
        case 2:
          setHora(hora);
          break;
        default:
          hora = value.substring(1);
          setHora(hora);
          break;
      }
      if(Number(hora) > 23) {
        setHora("23");
      }
      else if (Number(hora) < 0 || Number(hora) == "") {
        setHora("00");
      }
    } catch {}
  };

  const updateMinuto = (value, setMinuto) => {
    try {
      // se houver letras, remove
      if (isNaN(value)) {
        value = value.replace(/\D/g, "");
      }
      var minuto = value;
      switch (value.length) {
        case 1:
          minuto = "0" + value;
          setMinuto(minuto);
          break;
        case 2:
          setMinuto(minuto);
          break;
        default:
          minuto = value.substring(1);
          setMinuto(minuto);
          break;
      }
      if(Number(minuto) > 59) {
        setMinuto("59");
      }
      else if (Number(minuto) < 0 || Number(minuto) == "") {
        setMinuto("00");
      }

    } catch (e) {
    }
  };

  const intLeadingZero = (value) => {
    if (value) {
      return String(value).padStart(2, "0");
    }
  };

  const diasOptions = () => {
    let items = [];
    for (let i = 1; i < 31; i++)
      items.push(
        <option key={i} value={i}>
          {i}
        </option>
      );

    return items;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (disciplina == "") {
      alert("Disciplina não pode ser vazia");
      return;
    }

    const horario_inicial = `${horarioInicio.hora}:${horarioInicio.minuto}`;
    const horario_final = `${horarioFim.hora}:${horarioFim.minuto}`;

    if(horario_inicial === horario_final) {
      alert("Horário inicial e final não podem ser iguais");
      return;
    }

    if (Number(horario_inicial.replace(":", "")) > Number(horario_final.replace(":", ""))) {
      alert("Horário inicial não pode ser maior que o final");
      return;
    }

    // Perform form validation if needed
    const disciplinaRequest = await axios
      .post(
        `${URL_API}/disciplina_search`,
        { nome: disciplina },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        // Create Professor Disciplina Relationship
        const create_pdl = axios
          .post(
            `${URL_API}/pdl`,
            { professor_id: user.id, disciplina_id: response.data.id },
            { headers: { "Content-Type": "application/json" } }
          )
          .catch((error) => {});

        return response.data;
      })
      .catch((error) => {
        const response = axios
          .post(
            `${URL_API}/disciplina`,
            { nome: disciplina, professor_id: user.id },
            { headers: { "Content-Type": "application/json" } }
          )
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            alert("Failed to Create Disciplina");
            return error;
          });

        return response;
      });

    if (disciplinaRequest.response) return;

    // Prepare the data for the request
    const data = {
      vencimento: diaVencimento,
      link_aula: "http://meet.google.com",
      mensalidade: valorHoraAula,
      horario_inicial: horario_inicial,
      horario_final: horario_final,
      dia_semana: diaDaSemana,
      disciplina_id: disciplinaRequest.id,
      professor_id: user.id,
    };

    try {
      const response = await axios.post(`${URL_API}/turma`, data, {
        headers: { "Content-Type": "application/json" },
      });


    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error:", error);
    }
    alert("Turma cadastrada com sucesso");
    closeModal(true);
    // Clear the input field
    setDisciplina("");
  };

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function handleValorChange(event) {
    const value = Number(event.target.value.replace(/\D/g, "")) / 100;
    setValorHoraAula(value);
  }

  return (
    <div className={`cadastro02-container ${rootClassName}`}>
      <form className="turma-cadastro-form">
        <h1>Cadastro Nova Turma</h1>
        <div className="form-control">
          <input
            type="text"
            required
            autoFocus
            value={disciplina}
            onChange={(event) => setDisciplina(event.target.value)}
            placeholder="Disciplina"
            className="enter-text input"
          />
        </div>
        <div className="form-control">
          <label htmlFor="dia_semana" className="form-label">
            Dia da semana
          </label>
          <select
            id="dia_semana"
            required
            className="cadastro02-select"
            value={diaDaSemana}
            onChange={(event) => setDiaDaSemana(event.target.value)}
          >
            <option value="1">Segunda</option>
            <option value="2">Terça</option>
            <option value="3">Quarta</option>
            <option value="4">Quinta</option>
            <option value="5">Sexta</option>
            <option value="6">Sábado</option>
            <option value="7">Domingo</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="time01" className="form-label">
            Início da aula
          </label>
          <div className="horario-inicio">
            <input
              placeholder="Horario"
              type="text"
              id="hora_inicio"
              className="cadastro02-textinput3 enter-text input"
              value={horarioInicio.hora}
              onChange={(e) => {
                updateHora(e.target.value, (h) => {
                  setHorarioInicio({
                    ...horarioInicio,
                    hora: h,
                  });
                });
              }}
            />
            :
            <input
              placeholder="Minuto"
              type="text"
              id="minuto_inicio"
              className="cadastro02-textinput3 enter-text input"
              value={horarioInicio.minuto}
              onChange={(e) => {
                updateMinuto(e.target.value, (m) => {
                  setHorarioInicio({
                    ...horarioInicio,
                    minuto: m,
                  });
                });
              }}
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="time01" className="form-label">
            Fim da aula
          </label>
          <div className="horario-fim">
            <input
              placeholder="Horario"
              type="text"
              id="hora_fim"
              className="cadastro02-textinput4 enter-text input"
              value={horarioFim.hora}
              onChange={(e) => {
                updateHora(e.target.value, (h) => {
                  setHorarioFim({
                    ...horarioFim,
                    hora: h,
                  });
                });
              }}
            />
            :
            <input
              placeholder="Minuto"
              type="text"
              id="minuto_fim"
              className="cadastro02-textinput4 enter-text input"
              value={horarioFim.minuto}
              onChange={(e) => {
                updateMinuto(e.target.value, (m) => {
                  setHorarioFim({
                    ...horarioFim,
                    minuto: m,
                  });
                });
              }}
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="time01" className="form-label">
            Valor da hora aula
          </label>
          <input
            placeholder="Valor da hora aula"
            type="text"
            id="valor"
            className="cadastro02-textinput5 enter-text input"
            value={formatter.format(valorHoraAula)}
            onChange={handleValorChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="time01" className="form-label">
            Dia do vencimento
          </label>
          <select
            id="selectVencimento"
            className="cadastro02-select1"
            value={diaVencimento}
            onChange={(e) => {
              setDiaVencimento(Number(e.target.value));
            }}
          >
            {diasOptions()}
          </select>
        </div>
        <button name="signup" type="submit" className="button">
          <span className="button button-main" onClick={handleSubmit}>
            <span>Cadastrar</span>
            <br></br>
          </span>
        </button>
      </form>
    </div>
  );
};

export default TurmaCadastroComponent;
