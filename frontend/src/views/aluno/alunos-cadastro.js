import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { cacheLogOut, checkLoggedIn } from "../../utils/login";
import { Helmet } from "react-helmet";
import DangerousHTML from "dangerous-html/react";
import NavigationLinks from "../../components/navigation/navigation-links";
import "./alunos-cadastro.css";

const AlunosCadastro = (props) => {
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(checkLoggedIn());

    if (checkLoggedIn() == undefined) {
      // console.log(user)
      history.push("/");
    }
  }, []);

  return (
    <div className="alunos-cadastro-container">
      <Helmet>
        <title>Alunos-Cadastro - Classtool</title>
        <meta property="og:title" content="Alunos-Cadastro - Classtool" />
      </Helmet>
      <div data-modal="practices" className="alunos-cadastro-cadastro">
        <div className="alunos-cadastro-nova-turma">
          <div className="alunos-cadastro-container01">
            <div className="alunos-cadastro-container02">
              <form className="alunos-cadastro-form">
                <div className="alunos-cadastro-container03">
                  <h1>Cadastro Novo Aluno</h1>
                </div>
                <div className="alunos-cadastro-container04">
                  <input
                    type="text"
                    required
                    autoFocus
                    title="Nome Completo"
                    onFocus={(e) => {
                      e.target.placeholder = "";
                      e.target.className += " selected";
                    }}
                    onBlur={(e) => {
                      e.target.placeholder = "Nome Completo";
                      e.target.className = "enter-text input";
                    }}
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Nome obrigatório")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                    placeholder="Nome Completo"
                    className="enter-text input"
                  />
                </div>
                <div className="alunos-cadastro-container05">
                  <label htmlFor="data_nasc" className="alunos-cadastro-text01">
                    Data de Nascimento
                  </label>
                  <input
                    type="date"
                    id="data_nasc"
                    required
                    autoFocus
                    title="Data de Nascimento"
                    onFocus={(e) => {
                      e.target.className += " selected";
                    }}
                    onBlur={(e) => {
                      e.target.className = "enter-text input";
                    }}
                    onInvalid={(e) =>
                      e.target.setCustomValidity(
                        "Data de Nascimento obrigatória"
                      )
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                    className="enter-text input"
                  />
                </div>
                <div className="alunos-cadastro-container06">
                  <input
                    type="email"
                    required
                    autoFocus
                    title="Email"
                    onFocus={(e) => {
                      e.target.placeholder = "";
                      e.target.className += " selected";
                    }}
                    onBlur={(e) => {
                      e.target.placeholder = "Email";
                      e.target.className = "enter-text input";
                    }}
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Email obrigatório")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                    placeholder="Email"
                    className="enter-text input"
                  />
                </div>
                <div className="alunos-cadastro-container07">
                  <input
                    type="tel"
                    autoFocus
                    title="Telefone"
                    onFocus={(e) => {
                      e.target.placeholder = "";
                      e.target.className += " selected";
                    }}
                    onBlur={(e) => {
                      e.target.placeholder = "Telefone";
                      e.target.className = "enter-text input";
                    }}
                    placeholder="Telefone"
                    className="enter-text input"
                  />
                </div>
                <input type="hidden" id="ativo" value="true" />
                <button name="signup" type="submit" className="button">
                  <span className="button button-main" data-close>
                    <span>Cadastrar</span>
                    <br></br>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="alunos-cadastro-hero">
        <div className="alunos-cadastro-container11">
          <div className="alunos-cadastro-container12">
            <div className="alunos-cadastro-container13">
              <h1>
                <span>Filtros</span>
                <br></br>
              </h1>
            </div>
            <div className="alunos-cadastro-container14">
              <div className="alunos-cadastro-container15">
                <input
                  type="text"
                  placeholder="Digite algo"
                  className="alunos-cadastro-textinput04 input"
                />
              </div>
              <div className="alunos-cadastro-container16">
                <div className="alunos-cadastro-container17">
                  <div className="alunos-cadastro-container18">
                    <h1 className="alunos-cadastro-text10">Aluno</h1>
                  </div>
                  <div className="alunos-cadastro-container19">
                    <div
                      data-thq="thq-dropdown"
                      className="alunos-cadastro-thq-dropdown list-item"
                    >
                      <ul
                        data-thq="thq-dropdown-list"
                        className="alunos-cadastro-dropdown-list"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="alunos-cadastro-dropdown list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="alunos-cadastro-dropdown-toggle"
                          >
                            <span className="alunos-cadastro-text11">
                              Todos
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="alunos-cadastro-dropdown1 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="alunos-cadastro-dropdown-toggle1"
                          ></div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="alunos-cadastro-dropdown2 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="alunos-cadastro-dropdown-toggle2"
                          >
                            <span className="alunos-cadastro-text12">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="alunos-cadastro-dropdown3 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="alunos-cadastro-dropdown-toggle3"
                          >
                            <span className="alunos-cadastro-text13">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="alunos-cadastro-dropdown4 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="alunos-cadastro-dropdown-toggle4"
                          >
                            <span className="alunos-cadastro-text14">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <input
                      type="text"
                      placeholder="Nome aluno"
                      className="alunos-cadastro-textinput05 input"
                    />
                  </div>
                </div>
                <div className="alunos-cadastro-container20">
                  <div className="alunos-cadastro-container21">
                    <h1 className="alunos-cadastro-text15">Dia da Semana</h1>
                  </div>
                  <div className="alunos-cadastro-container22">
                    <div className="daysweek">
                      <input type="checkbox" />
                      <span className="alunos-cadastro-text16">
                        Segunda-feira
                      </span>
                    </div>
                    <div className="alunos-cadastro-container24 daysweek">
                      <input type="checkbox" />
                      <span className="alunos-cadastro-text17">
                        Terça-feira
                      </span>
                    </div>
                    <div className="alunos-cadastro-container25 daysweek">
                      <input type="checkbox" checked={true} />
                      <span className="alunos-cadastro-text18 daysweek">
                        Quarta-feira
                      </span>
                    </div>
                    <div className="alunos-cadastro-container26 daysweek">
                      <input type="checkbox" />
                      <span className="alunos-cadastro-text19">
                        Quinta-feira
                      </span>
                    </div>
                    <div className="alunos-cadastro-container27 daysweek">
                      <input type="checkbox" />
                      <span className="alunos-cadastro-text20">
                        Sexta-feira
                      </span>
                    </div>
                    <div className="alunos-cadastro-container28 daysweek">
                      <input type="checkbox" checked={true} />
                      <span className="alunos-cadastro-text21">Sábado</span>
                    </div>
                    <div className="alunos-cadastro-container29 daysweek">
                      <input type="checkbox" />
                      <span className="alunos-cadastro-text22">Domingo</span>
                    </div>
                  </div>
                  <div className="alunos-cadastro-container30 daysweek">
                    <input type="checkbox" />
                    <span className="alunos-cadastro-text23">Todos</span>
                  </div>
                </div>
                <div className="alunos-cadastro-container31">
                  <div className="alunos-cadastro-container32">
                    <h1 className="alunos-cadastro-text24">Status pagamento</h1>
                  </div>
                  <div className="alunos-cadastro-container33">
                    <select className="alunos-cadastro-select">
                      <option value="Option 1" selected>
                        Todos
                      </option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 1">Em dia</option>
                      <option value="New Option">Pendente</option>
                      <option value="Option 2">Option 2</option>
                      <option value="Option 3">Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="alunos-cadastro-container34">
                  <div className="alunos-cadastro-container35">
                    <button
                      disabled
                      className="alunos-cadastro-button1 button button-main"
                      data-open
                    >
                      Cadastrar novo aluno
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="alunos-cadastro-container36">
            <div className="alunos-cadastro-container37">
              <h1>
                <span>Meus alunos</span>
                <br></br>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div>
        <DangerousHTML
          html={`<script>
const modalOpen = document.querySelector('[data-open]');
const modalClose = document.querySelector('[data-close]');

function openModal(){
  const modal = document.querySelector(\`[data-modal="practices"]\`);
  modal.style.display = "flex";
}

function closeModal(){
  const modal = document.querySelector(\`[data-modal="practices"]\`);
  modal.style.display = "none";
}

modalOpen.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

</script>
`}
        ></DangerousHTML>
      </div>
    </div>
  );
};

export default AlunosCadastro;
