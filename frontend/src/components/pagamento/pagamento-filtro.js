import "./pagamento-filtro.css";

const PagamentoFiltro = () => {
  return (
    <div className="filtro-container">
      <h1>Filtros</h1>
      <div className="filtros-first">
        <div className="pagamentos-container05">
          <input
            type="text"
            placeholder="placeholder"
            className="pagamentos-textinput input"
          />
        </div>
        <div className="pagamentos-container06">
          <div className="pagamentos-container07">
            <div className="pagamentos-container08">
              <h1 className="pagamentos-text03">Ano</h1>
            </div>
            <div className="pagamentos-container09">
              <div
                data-thq="thq-dropdown"
                className="pagamentos-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pagamentos-dropdown-toggle"
                >
                  <span className="pagamentos-text04">Menu Item</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="pagamentos-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="pagamentos-icon">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="pagamentos-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="pagamentos-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="pagamentos-dropdown-toggle01"
                    >
                      <span className="pagamentos-text05">Todos</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="pagamentos-dropdown01 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="pagamentos-dropdown-toggle02"
                    ></div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="pagamentos-dropdown02 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="pagamentos-dropdown-toggle03"
                    >
                      <span className="pagamentos-text06">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="pagamentos-dropdown03 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="pagamentos-dropdown-toggle04"
                    >
                      <span className="pagamentos-text07">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="pagamentos-dropdown04 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="pagamentos-dropdown-toggle05"
                    >
                      <span className="pagamentos-text08">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pagamentos-container10">
            <div className="pagamentos-container11">
              <div className="pagamentos-container12">
                <h1 className="pagamentos-text09">Mês</h1>
              </div>
              <div className="pagamentos-container13">
                <div
                  data-thq="thq-dropdown"
                  className="pagamentos-thq-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="pagamentos-dropdown-toggle06"
                  >
                    <span className="pagamentos-text10">Menu Item</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="pagamentos-dropdown-arrow1"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pagamentos-icon02"
                      >
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="pagamentos-dropdown-list1"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="pagamentos-dropdown05 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="pagamentos-dropdown-toggle07"
                      >
                        <span className="pagamentos-text11">Todos</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="pagamentos-dropdown06 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="pagamentos-dropdown-toggle08"
                      ></div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="pagamentos-dropdown07 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="pagamentos-dropdown-toggle09"
                      >
                        <span className="pagamentos-text12">Sub-menu Item</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="pagamentos-dropdown08 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="pagamentos-dropdown-toggle10"
                      >
                        <span className="pagamentos-text13">Sub-menu Item</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="pagamentos-dropdown09 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="pagamentos-dropdown-toggle11"
                      >
                        <span className="pagamentos-text14">Sub-menu Item</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pagamentos-container14 daysweek">
              <input type="checkbox" />
              <span className="pagamentos-text15">Todos</span>
            </div>
          </div>
          <div className="pagamentos-container15">
            <div className="pagamentos-container16">
              <h1 className="pagamentos-text16">Quantidade de alunos</h1>
            </div>
            <div className="pagamentos-container17">
              <select className="pagamentos-select">
                <option value="Option 1">Option 1</option>
                <option value="Option 1">1</option>
                <option value="Option 2">2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">3</option>
                <option value="Option 4">4+</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 5">10+</option>
              </select>
            </div>
          </div>
          <div className="pagamentos-container18">
            <div className="pagamentos-container19">
              <div className="pagamentos-container20">
                <h1 className="pagamentos-text17">Vencimento</h1>
              </div>
              <div className="pagamentos-container21">
                <div className="pagamentos-container22">
                  <select className="pagamentos-select1">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 1">2</option>
                    <option value="Option 1">1</option>
                    <option value="Option 1">3</option>
                    <option value="Option 2">4</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">2022</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">2021</option>
                    <option value="New Option">New Option</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="pagamentos-container23">
              <button className="button button-main">
                Cadastrar novo registro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagamentoFiltro;
