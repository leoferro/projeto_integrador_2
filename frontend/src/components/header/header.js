import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { cacheLogOut } from "../../utils/login";
import NavigationLinks from "../navigation/navigation-links";
import "./header.css"

const Header = () => {
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
        <div className="">
          <NavigationLinks
            text="Perfil"
            text1="Planners"
            text2="Pagamentos"
            text3="Turmas"
            text4="Alunos"
            rootClassName="rootClassName14"
          />
        </div>
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