import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './alunos.css'

import { cacheLogOut, checkLoggedIn } from '../utils/login'

const Alunos = (props) => {

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
    <div className="alunos-container">
      <Helmet>
        <title>Alunos - Classtool</title>
        <meta property="og:title" content="Alunos - Classtool" />
      </Helmet>
      <section className="alunos-hero">
        <div className="alunos-container01">
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
                      <input type="checkbox"/>
                      <span className="alunos-text11 daysweek">
                        Quarta-feira
                      </span>
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
                      <input type="checkbox"/>
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
                    <select onChange={e => {}} className="alunos-select">
                      <option value="Option 1">
                        Todos
                      </option>
                      <option value="Option 1">Em dia</option>
                      <option value="New Option">Pendente</option>
                    </select>
                  </div>
                </div>
                <div className="alunos-container24">
                  <div className="alunos-container25">
                    <button className="button button-main">
                      <Link to="/alunos-cadastro">Cadastrar novo aluno</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="alunos-container26">
            <div className="alunos-container27">
              <h1>
                <span>Meus alunos</span>
                <br></br>
              </h1>
            </div>
            <div className="alunos-container28">
              <div
                data-thq="thq-dropdown"
                className="alunos-thq-dropdown1 list-item"
              >
                <ul
                  data-thq="thq-dropdown-list"
                  className="alunos-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="alunos-dropdown5 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="alunos-dropdown-toggle5"
                    >
                      <span className="alunos-text21">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="alunos-dropdown6 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="alunos-dropdown-toggle6"
                    >
                      <span className="alunos-text22">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="alunos-dropdown7 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="alunos-dropdown-toggle7"
                    >
                      <span className="alunos-text23">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <header data-thq="thq-navbar" className="alunos-navbar">
          <div className="alunos-left">
            <nav className="alunos-links"></nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="alunos-right"></div>
          <div data-thq="thq-burger-menu" className="alunos-burger-menu">
            <svg viewBox="0 0 1024 1024" className="alunos-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="alunos-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="alunos-nav"
            >
              <div className="alunos-container29">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="alunos-image"
                />
                <div data-thq="thq-close-menu" className="alunos-menu-close">
                  <svg viewBox="0 0 1024 1024" className="alunos-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="alunos-nav1"
              >
                <span className="alunos-text24">Features</span>
                <span className="alunos-text25">How it works</span>
                <span className="alunos-text26">Prices</span>
                <span className="alunos-text27">Contact</span>
                <button className="alunos-book button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="alunos-image1"
                  />
                  <span className="alunos-text28">Book an appointment</span>
                </button>
              </nav>
            </div>
          </div>
          <header data-role="Header" className="main-nav-bar">
            <Link to='/'>
              <img
                alt="logo"
                src="/Icons/logo_transparent-300h.png"
                className="alunos-image2"
              />
            </Link>
            <div className="alunos-nav2">
              <NavigationLinks
                text="Perfil"
                text1="Planners"
                text2="Pagamentos"
                text3="Turmas"
                text4="Alunos"
                rootClassName="rootClassName18"
              ></NavigationLinks>
            </div>
            <div className="alunos-btn-group">
              <button className="alunos-login button">
                <span>
                  <Link to="/"><span onClick={cacheLogOut}>Sair</span></Link>
                  <br></br>
                </span>
              </button>
            </div>
            <div data-role="BurgerMenu" className="alunos-burger-menu1">
              <svg viewBox="0 0 1024 1024" className="alunos-icon04">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="alunos-mobile-menu1">
              <div className="alunos-nav3">
                <div className="alunos-container30">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="alunos-image3"
                  />
                  <div
                    data-role="CloseMobileMenu"
                    className="alunos-menu-close1"
                  >
                    <svg viewBox="0 0 1024 1024" className="alunos-icon06">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <NavigationLinks rootClassName="rootClassName19"></NavigationLinks>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="alunos-icon08"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="alunos-icon10"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="alunos-icon12"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </header>
      </section>
      <div className="alunos-footer">
        <div className="alunos-left1">
          <div className="alunos-brand">
            <Link to='/'>
              <img
                alt="image"
                src="/Icons/logo_transparent-300h.png"
                className="alunos-image4"
              />
            </Link>
          </div>
          <div className="alunos-legal"></div>
        </div>
        <p className="alunos-text32">
          Aplicação desenvolvida pelos alunos do eixo computação da Universidade
          Virtual de São Paulo.
        </p>
      </div>
    </div>
  )
}

export default Alunos
