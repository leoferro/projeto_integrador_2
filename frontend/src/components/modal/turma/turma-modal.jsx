import TurmaCadastroComponent from '../../turma/turma-cadastro-component'
import './turma-modal.css'

const TurmaModal = (props) => {
    return (
        <>
          <div className="turmas-cadastro-nova-turma">
            <div className="turmas-cadastro-container01">
              <TurmaCadastroComponent />
            </div>
          </div>
        </>
    )
}

export default TurmaModal