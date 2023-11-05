import { Route } from "react-router-dom";
import { checkLoggedIn } from "../utils/login";
import { useEffect } from "react";
import { Alunos, AlunosCadastro } from "../views/aluno";
import { TurmaDetalhes, Turmas, TurmasCadastro } from "../views/turma";
import { Planners } from "../views/planner";
import Perfil from "../views/perfil/perfil";
import Pagamentos from "../views/pagamento/pagamentos";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const ClienteRoute = () => {

  const history = useHistory();

  useEffect(() => {
    const user = checkLoggedIn();

    if (!user) {
      history.push("/");
    }
  });

  return (
    <>
      <Route component={Turmas} exact path="/turmas" />
      <Route component={Pagamentos} exact path="/pagamentos" />
      <Route component={AlunosCadastro} exact path="/alunos-cadastro" />
      <Route component={Perfil} exact path="/perfil" />
      {/* <Route component={TurmasCadastro} exact path="/turmas-cadastro" /> */}
      <Route component={Alunos} exact path="/alunos" />
      <Route component={Planners} exact path="/planners" />
      <Route component={TurmaDetalhes} exact path="/turma/:id" />
    </>
  );
};

export default ClienteRoute;