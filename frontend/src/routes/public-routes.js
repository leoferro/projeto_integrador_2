import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Cadastro from "../views/cadastro/cadastro";
import Home from "../views/home/home";
import Entrar from "../views/login/entrar";

const PublicRoutes = () => {
  return (
    <>
      <Route component={Entrar} exact path="/entrar" />
      <Route component={Cadastro} exact path="/cadastro" />
      <Route component={Home} exact path="/" />
    </>
  );
};

export default PublicRoutes;