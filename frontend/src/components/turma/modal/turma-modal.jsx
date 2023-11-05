import { TurmaCadastroComponent } from "../../turma";
import "./turma-modal.css";

const TurmaModal = ({ closeModal }) => {
  return (
    <>
      <div className="turmas-cadastro-nova-turma">
        <div className="turmas-cadastro-container01">
          <TurmaCadastroComponent closeModal={closeModal} />
        </div>
      </div>
    </>
  );
};

export default TurmaModal;
