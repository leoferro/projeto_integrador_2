import { Link } from "react-router-dom/cjs/react-router-dom";
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="brand">
          <Link to="/cadastro">
            <img
              alt="image"
              src="/Icons/logo_transparent-300h.png"
              className="image6"
            />
          </Link>
        </div>
      </div>
      <p className="text41">
        Aplicação desenvolvida pelos alunos do eixo computação da Universidade
        Virtual de São Paulo.
      </p>
    </div>
  );
};

export default Footer;