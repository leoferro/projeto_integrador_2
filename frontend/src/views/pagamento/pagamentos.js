import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import DangerousHTML from "dangerous-html/react";
import { Helmet } from "react-helmet";

import NavigationLinks from "../../components/navigation/navigation-links";
import "./pagamentos.css";

import { cacheLogOut, checkLoggedIn } from "../../utils/login";
import Footer from "../../components/footer/footer";
import PagamentoFiltro from "../../components/pagamento/pagamento-filtro";
import FiltroComponente from "../../components/filtro/filtro-component";

const Pagamentos = (props) => {
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(checkLoggedIn());

    if (checkLoggedIn() == undefined) {
      // console.log(user)
      history.push("/");
    }
  }, []);

  const filtros = {
    mes: true
  }

  return (
    <div className="pagamentos-container">
      <Helmet>
        <title>Pagamentos - Classtool</title>
        <meta property="og:title" content="Pagamentos - Classtool" />
      </Helmet>
      <section className="pagamentos-hero">
        <header data-thq="thq-navbar" className="pagamentos-navbar">
          <div className="pagamentos-left">
            <nav className="pagamentos-links"></nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="pagamentos-right"
          ></div>
          <div data-thq="thq-mobile-menu" className="pagamentos-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="pagamentos-nav"
            >
              <div className="pagamentos-container28">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="pagamentos-image"
                />
                <div
                  data-thq="thq-close-menu"
                  className="pagamentos-menu-close"
                >
                  <svg viewBox="0 0 1024 1024" className="pagamentos-icon15">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="pagamentos-nav1"
              >
                <span className="pagamentos-text33">Features</span>
                <span className="pagamentos-text34">How it works</span>
                <span className="pagamentos-text35">Prices</span>
                <span className="pagamentos-text36">Contact</span>
                <button className="pagamentos-book button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="pagamentos-image1"
                  />
                  <span className="pagamentos-text37">Book an appointment</span>
                </button>
              </nav>
            </div>
          </div>
          <header data-role="Header" className="main-nav-bar">
            <Link to="/">
              <img
                alt="logo"
                src="/Icons/logo_transparent-300h.png"
                className="pagamentos-image2"
              />
            </Link>
            <div className="pagamentos-nav2">
              <NavigationLinks
                text="Perfil"
                text1="Planners"
                text2="Pagamentos"
                text3="Turmas"
                text4="Alunos"
                rootClassName="rootClassName20"
              ></NavigationLinks>
            </div>
            <div className="pagamentos-btn-group">
              <button className="pagamentos-login button">
                <span>
                  <Link to="/">
                    <span onClick={cacheLogOut}>Sair</span>
                  </Link>
                  <br></br>
                </span>
              </button>
            </div>
            <div data-role="BurgerMenu" className="pagamentos-burger-menu1">
              <svg viewBox="0 0 1024 1024" className="pagamentos-icon17">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="pagamentos-mobile-menu1">
              <div className="pagamentos-nav3">
                <div className="pagamentos-container29">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="pagamentos-image3"
                  />
                  <div
                    data-role="CloseMobileMenu"
                    className="pagamentos-menu-close1"
                  >
                    <svg viewBox="0 0 1024 1024" className="pagamentos-icon19">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <NavigationLinks rootClassName="rootClassName21"></NavigationLinks>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="pagamentos-icon21"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="pagamentos-icon23"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="pagamentos-icon25"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </header>
        <div className="pagamentos-container">
          <FiltroComponente filtros={filtros} />
          <div className="pagamentos-container24">
            <div className="pagamentos-container25">
              <h1>
                <span>Meus pagamentos</span>
                <br></br>
              </h1>
            </div>
            <div className="pagamentos-container26">
              <div className="pagamentos-container27">
                <div className="pagamentos-div">
                  <DangerousHTML
                    html={`<!DOCTYPE html>
<html>
<head>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
      font-family: Poppins, sans-serif;
      white-space: nowrap;
      text-overflow: ellipsis;     
      }
    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>
  <table>
    <thead>
      <tr>
        <th>Aluno</th>
        <th>Disciplina</th>
        <th>Turma</th>
        <th>Valor</th>
        <th>Vencimento</th>
        <th>Data pgmt</th>
        <th>Método</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
        <td>Data 4</td>
        <td>Data 5</td>
        <td>Data 6</td>
        <td>Data 7</td>
        <td>Data 8</td>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
        <td>Data 4</td>
        <td>Data 5</td>
        <td>Data 6</td>
        <td>Data 7</td>
        <td>Data 8</td>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
        <td>Data 4</td>
        <td>Data 5</td>
        <td>Data 6</td>
        <td>Data 7</td>
        <td>Data 8</td>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
        <td>Data 4</td>
        <td>Data 5</td>
        <td>Data 6</td>
        <td>Data 7</td>
        <td>Data 8</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`}
                  ></DangerousHTML>
                </div>
              </div>
              <div className="pagamentos-stats">
                <div className="pagamentos-stat">
                  <svg viewBox="0 0 1152 1024" className="pagamentos-icon04">
                    <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                    <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
                  </svg>
                  <span className="pagamentos-text21">Alunos</span>
                  <span className="pagamentos-text22">Matriculados</span>
                  <h1 className="pagamentos-text23">20</h1>
                </div>
                <div className="pagamentos-stat1">
                  <svg viewBox="0 0 1024 1024" className="pagamentos-icon07">
                    <path d="M598 512h234l-234-234v234zM640 214l256 256v426q0 34-26 60t-60 26h-470q-34 0-59-26t-25-60v-598q0-34 26-59t60-25h298zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
                  </svg>
                  <span className="pagamentos-text24">Turmas</span>
                  <span className="pagamentos-text25">Ativas</span>
                  <h1 className="pagamentos-text26">30</h1>
                </div>
                <div className="pagamentos-stat2">
                  <svg viewBox="0 0 1024 1024" className="pagamentos-icon09">
                    <path d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"></path>
                  </svg>
                  <span className="pagamentos-text27">Total</span>
                  <span className="pagamentos-text28">Arrecadado</span>
                  <h1 className="pagamentos-text29">R$250</h1>
                </div>
                <div className="pagamentos-stat3">
                  <svg viewBox="0 0 1024 1024" className="pagamentos-icon11">
                    <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                  </svg>
                  <span className="pagamentos-text30">Total</span>
                  <span className="pagamentos-text31">A receber</span>
                  <h1 className="pagamentos-text32">R$80</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pagamentos;
