import React from 'react'
import Modal from 'react-modal'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import { Alunos, AlunosCadastro } from './views/aluno'
import { Turmas, TurmasCadastro } from './views/turma'
import { Planners } from './views/planner'
import Perfil from './views/perfil/perfil'
import Entrar from './views/login/entrar'
import Cadastro from './views/cadastro/cadastro'
import Home from './views/home/home'
import Pagamentos from './views/pagamento/pagamentos'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route component={Perfil} exact path="/perfil" />
        <Route component={TurmasCadastro} exact path="/turmas-cadastro" />
        <Route component={Alunos} exact path="/alunos" />
        <Route component={Entrar} exact path="/entrar" />
        <Route component={Planners} exact path="/planners" />
        <Route component={Cadastro} exact path="/cadastro" />
        <Route component={Turmas} exact path="/turmas" />
        <Route component={Home} exact path="/" />
        <Route component={Pagamentos} exact path="/pagamentos" />
        <Route component={AlunosCadastro} exact path="/alunos-cadastro" />
        <Footer />
      </div>
    </Router>
  )
}

Modal.setAppElement("#app")
ReactDOM.render(<App />, document.getElementById('app'))
