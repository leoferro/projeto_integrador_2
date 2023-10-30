import React from "react";
import "./filtro-componente.css";

const InputField = ({ placeholder, className, handler }) => (
  <div>
    <input
      type="text"
      placeholder={placeholder}
      className="input-field"
      onChange={(event) => {
        try {
          console.log(typeof handler);
          handler(event.target.value);
        } catch (error) {
          console.log(error);
        }
      }}
    />
  </div>
);

const DropdownMenu = ({ label, options, handler }) => (
  <div className="dropdown-container">
    <h1 className="dropdown-label">{label}</h1>
    <select
      className="dropdown-select"
      onChange={(event) => handler != null && handler(event.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const CheckboxField = ({ label }) => (
  <div className="checkbox-container">
    <input type="checkbox" />
    <span className="checkbox-label">{label}</span>
  </div>
);

const FiltroComponente = ({ filtros, openModal }) => {
  const quantidadeAlunosOptions = {
    options: [
      { label: "Selecione", value: "0" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "3+", value: "3+" },
      { label: "8+", value: "8+" },
      { label: "12+", value: "12+" },
    ],
    label: "Quantidade de alunos",
  };

  var diasVencimento = [];
  for (let i = 1; i <= 31; i++) {
    diasVencimento.push({ label: i, value: i });
  }

  const vencimentoOptions = {
    options: [{ label: "Selecione", value: "0" }, ...diasVencimento],
    label: "Vencimento",
  };

  const diaSemanaOptions = {
    options: [
      { label: "Selecione", value: "0" },
      { label: "Segunda-feira", value: "1" },
      { label: "Terça-feira", value: "2" },
      { label: "Quarta-feira", value: "3" },
      { label: "Quinta-feira", value: "4" },
      { label: "Sexta-feira", value: "5" },
      { label: "Sábado", value: "6" },
      { label: "Domingo", value: "7" },
    ],
    label: "Dia da semana",
  };

  const statusOptions = {
    options: [
      { label: "Selecione", value: "0" },
      { label: "Ativo", value: "1" },
      { label: "Inativo", value: "2" },
    ],
    label: "Status",
  };

  return filtros ? (
    <div className="filtro-container">
      <h1>Filtros</h1>
      <div className="filtros">
        <div className="input-fields">
          {filtros.pesquisa && (
            <InputField
              placeholder="Pesquise"
              className="input-container"
              handler={filtros.pesquisa?.handler}
            />
          )}
          {filtros?.vencimento && (
            <DropdownMenu
              label={vencimentoOptions.label}
              options={vencimentoOptions.options}
              handler={filtros.vencimento.handler}
            />
          )}
          {/* <CheckboxField label="Todos" /> */}
          {filtros.qtdAluno && (
            <DropdownMenu
              label={quantidadeAlunosOptions.label}
              options={quantidadeAlunosOptions.options}
              handler={filtros.qtdAluno.handler}
            />
          )}
          {filtros.diaSemana && (
            <DropdownMenu
              label={diaSemanaOptions.label}
              options={diaSemanaOptions.options}
              handler={filtros.diaSemana.handler}
            />
          )}
          {filtros.status && (
            <DropdownMenu
              label={statusOptions.label}
              options={statusOptions.options}
              handler={filtros.status.handler}
            />
          )}
        </div>
        <div className="button-container">
          <button className="button button-main" onClick={openModal}>
            Cadastrar novo registro
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default FiltroComponente;
