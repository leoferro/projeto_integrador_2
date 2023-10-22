const AlunosFiltro = ({ openModal }) => {
  return (
    <div className="alunos-container02">
      <div className="alunos-container03">
        <h1>
          <span>Filtros</span>
          <br></br>
        </h1>
      </div>
      <div className="alunos-container04">
        <div className="alunos-container05">
          <input
            type="text"
            placeholder="Digite algo"
            className="alunos-textinput input"
          />
        </div>
        <div className="alunos-container06">
          <div className="alunos-container07">
            <div className="alunos-container08">
              <h1 className="alunos-text03">Aluno</h1>
            </div>
            <div className="alunos-container09">
              <div
                data-thq="thq-dropdown"
                className="alunos-thq-dropdown list-item"
              >
                <ul
                  data-thq="thq-dropdown-list"
                  className="alunos-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="alunos-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="alunos-dropdown-toggle"
                    >
                      <span className="alunos-text04">Todos</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="alunos-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="alunos-dropdown-toggle1"
                    ></div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="alunos-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="alunos-dropdown-toggle2"
                    >
                      <span className="alunos-text05">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="alunos-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="alunos-dropdown-toggle3"
                    >
                      <span className="alunos-text06">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="alunos-dropdown4 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="alunos-dropdown-toggle4"
                    >
                      <span className="alunos-text07">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
              <input
                type="text"
                placeholder="Nome aluno"
                className="alunos-textinput1 input"
              />
            </div>
          </div>
          <div className="alunos-container10">
            <div className="alunos-container11">
              <h1 className="alunos-text08">Dia da Semana</h1>
            </div>
            <div className="alunos-container12">
              <div className="daysweek">
                <input type="checkbox" />
                <span className="alunos-text09">Segunda-feira</span>
              </div>
              <div className="alunos-container14 daysweek">
                <input type="checkbox" />
                <span className="alunos-text10">Terça-feira</span>
              </div>
              <div className="alunos-container15 daysweek">
                <input type="checkbox" />
                <span className="alunos-text11 daysweek">Quarta-feira</span>
              </div>
              <div className="alunos-container16 daysweek">
                <input type="checkbox" />
                <span className="alunos-text12">Quinta-feira</span>
              </div>
              <div className="alunos-container17 daysweek">
                <input type="checkbox" />
                <span className="alunos-text13">Sexta-feira</span>
              </div>
              <div className="alunos-container18 daysweek">
                <input type="checkbox" />
                <span className="alunos-text14">Sábado</span>
              </div>
              <div className="alunos-container19 daysweek">
                <input type="checkbox" />
                <span className="alunos-text15">Domingo</span>
              </div>
            </div>
            <div className="alunos-container20 daysweek">
              <input type="checkbox" />
              <span className="alunos-text16">Todos</span>
            </div>
          </div>
          <div className="alunos-container21">
            <div className="alunos-container22">
              <h1 className="alunos-text17">Status pagamento</h1>
            </div>
            <div className="alunos-container23">
              <select onChange={(e) => {}} className="alunos-select">
                <option value="Option 1">Todos</option>
                <option value="Option 1">Em dia</option>
                <option value="New Option">Pendente</option>
              </select>
            </div>
          </div>
          <div className="alunos-container24">
            <div className="alunos-container25">
              <button className="button button-main" onClick={openModal}>
                Cadastrar novo aluno
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlunosFiltro;
