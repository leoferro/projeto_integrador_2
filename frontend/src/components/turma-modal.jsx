import React, {useState, useEffect} from 'react'

import Cadastro02 from '../components/cadastro02'
import './turma-modal.css'

const TurmaModal = (props) => {
    return (
        <>
          <div className="turmas-cadastro-nova-turma">
            <div className="turmas-cadastro-container01">
              <Cadastro02></Cadastro02>
            </div>
          </div>
        </>
    )
}

export default TurmaModal