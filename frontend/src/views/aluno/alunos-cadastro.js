import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import DangerousHTML from "dangerous-html/react";
import { Helmet } from "react-helmet";
import NavigationLinks from "../../components/navigation/navigation-links";
import "./alunos-cadastro.css";

import { cacheLogOut, checkLoggedIn } from "../../utils/login";
import Footer from "../../components/footer/footer";

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
        <header data-thq="thq-navbar" className="alunos-cadastro-navbar">
          <div className="alunos-cadastro-left">
            <nav className="alunos-cadastro-links"></nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="alunos-cadastro-right"
          ></div>
          <div
            data-thq="thq-burger-menu"
            className="alunos-cadastro-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="alunos-cadastro-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="alunos-cadastro-mobile-menu"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="alunos-cadastro-nav"
            >
              <div className="alunos-cadastro-container48">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="alunos-cadastro-image"
                />
                <div
                  data-thq="thq-close-menu"
                  className="alunos-cadastro-menu-close"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="alunos-cadastro-icon02"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="alunos-cadastro-nav1"
              >
                <span className="alunos-cadastro-text35">Features</span>
                <span className="alunos-cadastro-text36">How it works</span>
                <span className="alunos-cadastro-text37">Prices</span>
                <span className="alunos-cadastro-text38">Contact</span>
                <button className="alunos-cadastro-book button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="alunos-cadastro-image1"
                  />
                  <span className="alunos-cadastro-text39">
                    Book an appointment
                  </span>
                </button>
              </nav>
            </div>
          </div>
          <header data-role="Header" className="main-nav-bar">
            <Link to="/">
              <img
                alt="logo"
                src="/Icons/logo_transparent-300h.png"
                className="alunos-cadastro-image2"
              />
            </Link>
            <div className="alunos-cadastro-nav2">
              <NavigationLinks
                text="Perfil"
                text1="Planners"
                text2="Pagamentos"
                text3="Turmas"
                text4="Alunos"
                rootClassName="rootClassName24"
              ></NavigationLinks>
            </div>
            <div className="alunos-cadastro-btn-group">
              <button className="alunos-cadastro-login button">
                <span>
                  <Link to="/">
                    <span onClick={cacheLogOut}>Sair</span>
                  </Link>
                  <br></br>
                </span>
              </button>
            </div>
            <div
              data-role="BurgerMenu"
              className="alunos-cadastro-burger-menu1"
            >
              <svg viewBox="0 0 1024 1024" className="alunos-cadastro-icon04">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-role="MobileMenu"
              className="alunos-cadastro-mobile-menu1"
            >
              <div className="alunos-cadastro-nav3">
                <div className="alunos-cadastro-container49">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="alunos-cadastro-image3"
                  />
                  <div
                    data-role="CloseMobileMenu"
                    className="alunos-cadastro-menu-close1"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="alunos-cadastro-icon06"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <NavigationLinks rootClassName="rootClassName25"></NavigationLinks>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="alunos-cadastro-icon08"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="alunos-cadastro-icon10"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="alunos-cadastro-icon12"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </header>
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
