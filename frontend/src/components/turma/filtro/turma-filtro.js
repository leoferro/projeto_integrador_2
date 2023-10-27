import { useState } from "react";

const TurmaFiltro = ({ openModal }) => {
  const [disciplinas, setDisciplinas] = useState([]);
  const [disciplinaSelected, setDisciplinaSelected] = useState(null);
  
  return (
    <div className="turmas-container02">
      <div className="turmas-container03">
        <h1>
          <span>Filtros</span>
          <br></br>
        </h1>
      </div>
      <div className="turmas-container04">
        <div className="turmas-container05">
          <input
            type="text"
            placeholder="Pesquisar"
            className="turmas-textinput input"
          />
        </div>
        <div className="turmas-container06">
          <div className="turmas-container07">
            <div className="turmas-container08">
              <h1 className="turmas-text09">Disciplina</h1>
            </div>
            <div className="turmas-container09">
              <div
                data-thq="thq-dropdown"
                className="turmas-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="turmas-dropdown-toggle"
                >
                  <span className="turmas-text10">
                    {disciplinaSelected?.nome || "Selecione"}
                  </span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="turmas-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="turmas-icon01">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="turmas-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="turmas-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="turmas-dropdown-toggle1"
                    >
                      <span className="turmas-text11">Todos</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="turmas-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="turmas-dropdown-toggle2"
                    ></div>
                  </li>
                  {disciplinas.map((disciplina) => (
                    <li
                    data-thq="thq-dropdown"
                    className="turmas-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="turmas-dropdown-toggle3"
                    >
                      <span className="turmas-text12">{disciplina.nome}</span>
                    </div>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="turmas-container10">
            <div className="turmas-container11">
              <h1 className="turmas-text15">Dia da Semana</h1>
            </div>
            <div className="turmas-container12">
              <div className="daysweek">
                <input type="checkbox" name="seg" />
                <label for="seg" className="turmas-text16">
                  Segunda-feira
                </label>
              </div>
              <div className="turmas-container14 daysweek">
                <input type="checkbox" />
                <span className="turmas-text17">Terça-feira</span>
              </div>
              <div className="turmas-container15 daysweek">
                <input type="checkbox" />
                <span className="turmas-text18 daysweek">Quarta-feira</span>
              </div>
              <div className="turmas-container16 daysweek">
                <input type="checkbox" />
                <span className="turmas-text19">Quinta-feira</span>
              </div>
              <div className="turmas-container17 daysweek">
                <input type="checkbox" />
                <span className="turmas-text20">Sexta-feira</span>
              </div>
              <div className="turmas-container18 daysweek">
                <input type="checkbox" />
                <span className="turmas-text21">Sábado</span>
              </div>
              <div className="turmas-container19 daysweek">
                <input type="checkbox" />
                <span className="turmas-text22">Domingo</span>
              </div>
            </div>
            <div className="turmas-container20 daysweek">
              <input type="checkbox" />
              <span className="turmas-text23">Todos</span>
            </div>
          </div>
          <div className="turmas-container21">
            <div className="turmas-container22">
              <h1 className="turmas-text24">Quantidade de alunos</h1>
            </div>
            <div className="turmas-container23">
              <select className="turmas-select">
                <option value="Option 1">1</option>
                <option value="Option 2">2</option>
                <option value="Option 3">3</option>
                <option value="Option 4">4+</option>
                <option value="Option 5">10+</option>
              </select>
            </div>
          </div>
          <div className="turmas-container24">
            <div className="turmas-container25">
              <div className="turmas-container26">
                <h1 className="turmas-text25">Vencimento</h1>
              </div>
              <div className="turmas-container27">
                <div className="turmas-container28">
                  <select className="turmas-select1">
                    <option value="01">01</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="turmas-container29">
              <button className="button button-main" onClick={openModal}>
                Cadastrar nova turma
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurmaFiltro;
