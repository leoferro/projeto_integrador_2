import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { cacheLogOut } from "../../utils/login";
import NavigationLinks from "../navigation/navigation-links";
import "./header.css";

const Header = () => {
  const [route, setRoute] = useState(window.location.pathname);
  const location = useLocation();

  useEffect(() => {
    setRoute(location.pathname);
  }, [location]);

  const notShowRoutes = ["/", "/entrar", "/cadastrar"];

  return (
    <header data-thq="thq-navbar" class="header">
      <header data-role="Header" className="main-nav-bar">
        <Link to="/">
          <img
            alt="logo"
            src="/Icons/logo_transparent-300h.png"
            className="turmas-image08"
          />
        </Link>
        {!notShowRoutes.includes(route) ? (
          <NavigationLinks
            text="Perfil"
            text1="Planners"
            text2="Pagamentos"
            text3="Turmas"
            text4="Alunos"
            rootClassName="rootClassName14"
          />
        ) : (
          <nav className="nav-links">
            <a href="#planner" className="home-link">
              Sobre
            </a>
            <a href="#Finance" className="home-link1">
              Ferramentas
            </a>
            <a href="#faq" className="home-link2">
              Perguntas frequentes
            </a>
          </nav>
        )}
        <div className="btn-group">
          <button className="login button">
            <span>
              <Link to="/">
                <span onClick={cacheLogOut}>Sair</span>
              </Link>
              <br></br>
            </span>
          </button>
        </div>
      </header>
    </header>
  );
};

export default Header;
