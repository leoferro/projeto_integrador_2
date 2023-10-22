import { Link, useLocation } from "react-router-dom/cjs/react-router-dom";
import "./navbar.css"
import { useEffect, useState } from "react";

const Navbar = () => {
  const [route, setRoute] = useState(window.location.pathname);
  const location = useLocation();

  useEffect(() => {
    setRoute(location.pathname);
  }, [location]);


  const notShowRoutes = [
    "/planners",
    "/turmas",
    "/alunos",
    "/perfil",
    "/pagamentos"
  ]

  return !notShowRoutes.includes(route) && (
    <header data-thq="thq-navbar" className="navbar">
      <Link to="/">
          <img
            alt="image"
            src="/Icons/logo_transparent-300h.png"
            className="home-logo"
          />
        </Link>

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
    </header>
  );
};

export default Navbar;
