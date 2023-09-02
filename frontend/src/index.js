import React from 'react'
import Modal from 'react-modal'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Perfil from './views/perfil'
import TurmasCadastro from './views/turmas-cadastro'
import Alunos from './views/alunos'
import Entrar from './views/entrar'
import Planners from './views/planners'
import Cadastro from './views/cadastro'
import Turmas from './views/turmas'
import Home from './views/home'
import Pagamentos from './views/pagamentos'
import AlunosCadastro from './views/alunos-cadastro'


const App = () => {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  )
}

Modal.setAppElement("#app")
ReactDOM.render(<App />, document.getElementById('app'))
