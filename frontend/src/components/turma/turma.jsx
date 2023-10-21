import React, {useState} from 'react'
import Modal from 'react-modal'
import './turma-component.css'

const Turma = ({i, jsonData, stringAlunos, openAModal, closeAModal, setTurmaId}) => {
  
  const [expanded, setExpanded] = useState("expanded-content")
  const [modal, setModal] = useState(false)

  const toggleExpand = () => {
    setExpanded(expanded === "expanded-content" ? "expanded-content-open" : "expanded-content")
  }

  const openModal = () => {
    setTurmaId(jsonData[i].id)
    openAModal()
  }

  const closeModal = () => {
    closeAModal()
  }

  const dias = {
    1: 'Segunda',
    2:'Terça',
    3:'Quarta', 
    4:'Quinta',
    5: 'Sexta',
    6:'Sábado',
    7:'Domingo'
  }

  return (
    <>
      {/* <Modal></Modal> */}
      <div className="clickable-div" onClick={toggleExpand}> 
        <span className="json-info-inline">  <b> Dias de aula </b>: {dias[jsonData[i].dia_semana]}</span> 
        <span className="json-info-inline">   <b>Horário: </b> Das {jsonData[i].horario_inicial}  às  {jsonData[i].horario_final} </span> 
        <div className={expanded} id={"content-" + i}> 
          <span className="json-info-inline">  <b>Disciplina </b> :   {jsonData[i].disciplina}  </span>
          <br/>
          <span className="json-info-inline"><b>Mensalidade </b> :  {jsonData[i].mensalidade}  </span> 
          <br/>
          <span className="json-info-inline"> <b>Vencimento </b> :  {jsonData[i].vencimento}  </span> 
          <br/>
          <span className="json-info-inline"> <b>Alunos </b> : {stringAlunos}  </span>
          <br/>
          <button className= "button-add-student" id={"button-" + i } onClick={openModal} style={{display: expanded == 'expanded-content-open' ? "block" : "none", position: "absolute", bottom: "10px", right: "10px"}}>Cadastrar aluno</button>
        </div>
      </div>
        {/* <div className={modal} id={"modal-" + i}> 
          <div className="modal-content"> 
            <span className="close-button" onClick={closeModal}>&times;</span> 
              Modal content for item  i 
        </div>
      </div> */}
    </>
  )
}

export default Turma