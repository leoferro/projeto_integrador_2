import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import NavigationLinks from '../../components/navigation/navigation-links'
import './turmas-cadastro.css'

import { cacheLogOut, checkLoggedIn } from '../../utils/login'
import TurmaCadastroComponent from '../../components/turma/turma-cadastro-component'

const TurmasCadastro = (props) => {

  const history = useHistory()
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(checkLoggedIn())

    if(checkLoggedIn() == undefined){
      // console.log(user)
      history.push("/")
    }

  }, [])

  return (
    <div className="turmas-cadastro-container">
      <Helmet>
        <title>Turmas-Cadastro - Classtool</title>
        <meta property="og:title" content="Turmas-Cadastro - Classtool" />
      </Helmet>
      <div data-modal="practices" className="turmas-cadastro-cadastro">
        <div className="turmas-cadastro-nova-turma">
          <div className="turmas-cadastro-container01">
            <TurmaCadastroComponent />
          </div>
        </div>
      </div>
      <section className="turmas-cadastro-hero">
        <div className="turmas-cadastro-container02">
          <div className="turmas-cadastro-container03">
            <div className="turmas-cadastro-container04">
              <h1>
                <span>Filtros</span>
                <br></br>
              </h1>
            </div>
            <div className="turmas-cadastro-container05">
              <div className="turmas-cadastro-container06">
                <input
                  type="text"
                  placeholder="placeholder"
                  className="turmas-cadastro-textinput input"
                />
              </div>
              <div className="turmas-cadastro-container07">
                <div className="turmas-cadastro-container08">
                  <div className="turmas-cadastro-container09">
                    <h1 className="turmas-cadastro-text03">Disciplina</h1>
                  </div>
                  <div className="turmas-cadastro-container10">
                    <div
                      data-thq="thq-dropdown"
                      className="turmas-cadastro-thq-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="turmas-cadastro-dropdown-toggle"
                      >
                        <span className="turmas-cadastro-text04">
                          Menu Item
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="turmas-cadastro-dropdown-arrow"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="turmas-cadastro-icon"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="turmas-cadastro-dropdown-list"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="turmas-cadastro-dropdown list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="turmas-cadastro-dropdown-toggle1"
                          >
                            <span className="turmas-cadastro-text05">
                              Todos
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="turmas-cadastro-dropdown1 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="turmas-cadastro-dropdown-toggle2"
                          ></div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="turmas-cadastro-dropdown2 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="turmas-cadastro-dropdown-toggle3"
                          >
                            <span className="turmas-cadastro-text06">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="turmas-cadastro-dropdown3 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="turmas-cadastro-dropdown-toggle4"
                          >
                            <span className="turmas-cadastro-text07">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="turmas-cadastro-dropdown4 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="turmas-cadastro-dropdown-toggle5"
                          >
                            <span className="turmas-cadastro-text08">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="turmas-cadastro-container11">
                  <div className="turmas-cadastro-container12">
                    <h1 className="turmas-cadastro-text09">Dia da Semana</h1>
                  </div>
                  <div className="turmas-cadastro-container13">
                    <div className="daysweek">
                      <input type="checkbox" name="seg" />
                      <label for="seg" className="turmas-cadastro-text10">
                        Segunda-feira
                      </label>
                    </div>
                    <div className="turmas-cadastro-container15 daysweek">
                      <input type="checkbox" />
                      <span className="turmas-cadastro-text11">
                        Terça-feira
                      </span>
                    </div>
                    <div className="turmas-cadastro-container16 daysweek">
                      <input type="checkbox" checked={true} />
                      <span className="turmas-cadastro-text12 daysweek">
                        Quarta-feira
                      </span>
                    </div>
                    <div className="turmas-cadastro-container17 daysweek">
                      <input type="checkbox" />
                      <span className="turmas-cadastro-text13">
                        Quinta-feira
                      </span>
                    </div>
                    <div className="turmas-cadastro-container18 daysweek">
                      <input type="checkbox" />
                      <span className="turmas-cadastro-text14">
                        Sexta-feira
                      </span>
                    </div>
                    <div className="turmas-cadastro-container19 daysweek">
                      <input type="checkbox" checked={true} />
                      <span className="turmas-cadastro-text15">Sábado</span>
                    </div>
                    <div className="turmas-cadastro-container20 daysweek">
                      <input type="checkbox" />
                      <span className="turmas-cadastro-text16">Domingo</span>
                    </div>
                  </div>
                  <div className="turmas-cadastro-container21 daysweek">
                    <input type="checkbox" />
                    <span className="turmas-cadastro-text17">Todos</span>
                  </div>
                </div>
                <div className="turmas-cadastro-container22">
                  <div className="turmas-cadastro-container23">
                    <h1 className="turmas-cadastro-text18">
                      Quantidade de alunos
                    </h1>
                  </div>
                  <div className="turmas-cadastro-container24">
                    <select className="turmas-cadastro-select">
                      <option value="01" selected>
                        01
                      </option>
                    </select>
                  </div>
                </div>
                <div className="turmas-cadastro-container25">
                  <div className="turmas-cadastro-container26">
                    <div className="turmas-cadastro-container27">
                      <h1 className="turmas-cadastro-text19">Vencimento</h1>
                    </div>
                    <div className="turmas-cadastro-container28">
                      <div className="turmas-cadastro-container29">
                        <select className="turmas-cadastro-select1">
                          <option value="01" selected>
                            01
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="turmas-cadastro-container30">
                    <button
                      disabled
                      className="turmas-cadastro-button button button-main"
                    >
                      Cadastrar nova turma
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="turmas-cadastro-container31">
            <div className="turmas-cadastro-container32">
              <h1 className="turmas-cadastro-text20">
                <span>Minhas turmas</span>
                <br></br>
              </h1>
            </div>
            <div className="turmas-cadastro-container33">
              <div className="turmas-cadastro-container34">
                <form className="turmas-cadastro-form">
                  <div className="turmas-cadastro-container35">
                    <h1>Cadastro Nova Turma</h1>
                  </div>
                  <div className="turmas-cadastro-container36">
                    <input
                      type="text"
                      required
                      autoFocus
                      placeholder="Disciplina"
                      className="turmas-cadastro-textinput1 enter-text input"
                    />
                  </div>
                  <div className="turmas-cadastro-container37">
                    <label htmlFor="time01" className="turmas-cadastro-text24">
                      Horários de Aula
                    </label>
                    <div className="turmas-cadastro-container38">
                      <select
                        id="time01"
                        required
                        className="turmas-cadastro-select2"
                      >
                        <option value="01" selected>
                          Segunda-feira
                        </option>
                        <option value="02">Terça-feira</option>
                        <option value="03">Option 3</option>
                      </select>
                      <div className="turmas-cadastro-container39">
                        <input
                          type="number"
                          max="23"
                          min="00"
                          step="1"
                          required
                          autoFocus
                          placeholder="00"
                          className="turmas-cadastro-textinput2 enter-text input"
                        />
                        <span>:</span>
                        <input
                          type="number"
                          max="59"
                          min="00"
                          step="1"
                          required
                          autoFocus
                          placeholder="00"
                          className="turmas-cadastro-textinput3 enter-text input"
                        />
                      </div>
                      <button
                        type="button"
                        className="turmas-cadastro-button1 button button-main"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="turmas-cadastro-container40">
                    <input
                      type="number"
                      min="0.0"
                      step="0.5"
                      required
                      placeholder="Valor por aula"
                      className="turmas-cadastro-textinput4 input"
                    />
                  </div>
                  <div className="turmas-cadastro-container41">
                    <input
                      type="number"
                      max="31"
                      min="1"
                      step="1"
                      required
                      placeholder="Dia de Vencimento"
                      className="turmas-cadastro-textinput5 input"
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
            </div>
          </div>
        </div>
        <header data-thq="thq-navbar" className="turmas-cadastro-navbar">
          <div className="turmas-cadastro-left">
            <nav className="turmas-cadastro-links"></nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="turmas-cadastro-right"
          ></div>
          <div
            data-thq="thq-burger-menu"
            className="turmas-cadastro-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="turmas-cadastro-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="turmas-cadastro-mobile-menu"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="turmas-cadastro-nav"
            >
              <div className="turmas-cadastro-container42">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="turmas-cadastro-image"
                />
                <div
                  data-thq="thq-close-menu"
                  className="turmas-cadastro-menu-close"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="turmas-cadastro-icon04"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="turmas-cadastro-nav1"
              >
                <span className="turmas-cadastro-text29">Features</span>
                <span className="turmas-cadastro-text30">How it works</span>
                <span className="turmas-cadastro-text31">Prices</span>
                <span className="turmas-cadastro-text32">Contact</span>
                <button className="turmas-cadastro-book button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="turmas-cadastro-image1"
                  />
                  <span className="turmas-cadastro-text33">
                    Book an appointment
                  </span>
                </button>
              </nav>
            </div>
          </div>
          <header data-role="Header" className="main-nav-bar">
            <Link to='/'>
              <img
                alt="logo"
                src="/Icons/logo_transparent-300h.png"
                className="turmas-cadastro-image2"
              />
            </Link>
            <div className="turmas-cadastro-nav2">
              <NavigationLinks
                text="Perfil"
                text1="Planners"
                text2="Pagamentos"
                text3="Turmas"
                text4="Alunos"
                rootClassName="rootClassName22"
              ></NavigationLinks>
            </div>
            <div className="turmas-cadastro-btn-group">
              <button className="turmas-cadastro-login button">
                <span>
                  <Link to="/"><span onClick={cacheLogOut}>Sair</span></Link>
                  <br></br>
                </span>
              </button>
            </div>
            <div
              data-role="BurgerMenu"
              className="turmas-cadastro-burger-menu1"
            >
              <svg viewBox="0 0 1024 1024" className="turmas-cadastro-icon06">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-role="MobileMenu"
              className="turmas-cadastro-mobile-menu1"
            >
              <div className="turmas-cadastro-nav3">
                <div className="turmas-cadastro-container43">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="turmas-cadastro-image3"
                  />
                  <div
                    data-role="CloseMobileMenu"
                    className="turmas-cadastro-menu-close1"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="turmas-cadastro-icon08"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <NavigationLinks rootClassName="rootClassName23"></NavigationLinks>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="turmas-cadastro-icon10"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="turmas-cadastro-icon12"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="turmas-cadastro-icon14"
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
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default TurmasCadastro
