import React, {useState, useEffect} from 'react'

import Cadastro2 from '../components/cadastro2'
import './turma-modal.css'

const AlunoModal = ({closeModal, turmaId}) => {
    return (
        <Cadastro2 closeModal={closeModal} turmaId={turmaId}></Cadastro2>
    )
}

export default AlunoModal