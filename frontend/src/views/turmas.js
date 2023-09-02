import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import TurmaModal from '../components/turma-modal'
// import Modal from '../components/modal'
import Modal from 'react-modal'
import './turmas.css'

import { cacheLogOut, checkLoggedIn } from '../utils/login'

const Turmas = (props) => {

  const history = useHistory()
  const [user, setUser] = useState()
  const [modalOpen, setIsOpen] = useState(false)
  const [navBarStyle, setNavBarStyle] = useState("turmas-navbar")

  useEffect(() => {
    setUser(checkLoggedIn())

    if(checkLoggedIn() == undefined){
      // console.log(user)
      history.push("/")
    }

  }, [])

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="turmas-container">
      <Helmet>
        <title>Turmas - Classtool</title>
        <meta property="og:title" content="Turmas - Classtool" />
      </Helmet>
      <div className='turmas-modal'>
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          onAfterOpen={() => {setNavBarStyle("turmas-navbar-open")}}
          onAfterClose={() => {setNavBarStyle("turmas-navbar")}}
          style={
            {
              content: {
                  top: "0px",
                  left: "0px",
                  right: "0px",
                  bottom: "0px",
                  padding: "24px",
                  position: "absolute",
                  width: "70%", 
                  height: "90%",
                  margin: "auto",
                  display: "flex",
                  borderRadius: "12px",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 0px 25px -2px rgba(66, 68, 90, 0.4)",
                  backgroundColor: "#ffffff"
              },
              overlay: {
                backdropFilter: "blur(4px)"
              }
            }
          }
        >
          <TurmaModal></TurmaModal>
        </Modal>
      </div>
      {/* <div data-modal="practices" className="turmas-modal">
        <div className="turmas-cadastro-nova-turma">
        </div>
      </div> */}
      <section className="turmas-hero">
        <div className="turmas-container01">
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
                  placeholder="placeholder"
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
                        <span className="turmas-text10">Menu Item</span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="turmas-dropdown-arrow"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="turmas-icon01"
                          >
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
                        <li
                          data-thq="thq-dropdown"
                          className="turmas-dropdown2 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="turmas-dropdown-toggle3"
                          >
                            <span className="turmas-text12">Sub-menu Item</span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="turmas-dropdown3 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="turmas-dropdown-toggle4"
                          >
                            <span className="turmas-text13">Sub-menu Item</span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="turmas-dropdown4 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="turmas-dropdown-toggle5"
                          >
                            <span className="turmas-text14">Sub-menu Item</span>
                          </div>
                        </li>
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
                      <input type="checkbox" />
                      <span className="turmas-text16">Segunda-feira</span>
                    </div>
                    <div className="turmas-container14 daysweek">
                      <input type="checkbox" />
                      <span className="turmas-text17">Terça-feira</span>
                    </div>
                    <div className="turmas-container15 daysweek">
                      <input type="checkbox"/>
                      <span className="turmas-text18 daysweek">
                        Quarta-feira
                      </span>
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
                      <input type="checkbox"/>
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
                      <option value="Option 4">4+</option>
                      <option value="Option 3">3</option>
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
                          <option value="01">
                            01
                          </option>
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
          <div className="turmas-container30">
            <div className="turmas-container31">
              <h1>
                <span>Minhas turmas</span>
                <br></br>
              </h1>
            </div>
            <div className="turmas-container32">
              <div
                data-thq="thq-dropdown"
                className="turmas-thq-dropdown1 list-item"
              >
                <ul
                  data-thq="thq-dropdown-list"
                  className="turmas-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="turmas-dropdown5 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="turmas-dropdown-toggle6"
                    >
                      <span className="turmas-text29">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="turmas-dropdown6 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="turmas-dropdown-toggle7"
                    >
                      <span className="turmas-text30">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="turmas-dropdown7 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="turmas-dropdown-toggle8"
                    >
                      <span className="turmas-text31">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <header data-thq="thq-navbar" className={navBarStyle}>
          <div className="turmas-left">
            <nav className="turmas-links"></nav>
          </div>
          <header data-role="Header" className="main-nav-bar">
            <Link to='/'>
              <img
                alt="logo"
                src="/Icons/logo_transparent-300h.png"
                className="turmas-image08"
              />
            </Link>
            <div className="turmas-nav2">
              <NavigationLinks
                text="Perfil"
                text1="Planners"
                text2="Pagamentos"
                text3="Turmas"
                text4="Alunos"
                rootClassName="rootClassName14"
              ></NavigationLinks>
            </div>
            <div className="turmas-btn-group">
              <button className="turmas-login button">
                <span>
                  <Link to="/"><span onClick={cacheLogOut}>Sair</span></Link>
                  <br></br>
                </span>
              </button>
            </div>
          </header>
        </header>
      </section>
      <div className="turmas-footer">
        <div className="turmas-left1">
          <div className="turmas-brand">
            <Link to='/'>
              <img
                alt="image"
                src="/Icons/logo_transparent-300h.png"
                className="turmas-image10"
              />
            </Link>
          </div>
          <div className="turmas-legal"></div>
        </div>
        <p className="turmas-text40">
          Aplicação desenvolvida pelos alunos do eixo computação da Universidade
          Virtual de São Paulo.
        </p>
        <div className="turmas-legal1">
          <div className="turmas-row">
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
          <span className="turmas-copyright2">
            © 2022 finbest. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Turmas
