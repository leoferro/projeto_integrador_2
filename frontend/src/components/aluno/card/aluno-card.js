import "./aluno-card.css";
import EditIcon from "../../../assets/icons/edit.png";

const AlunoCard = ({ aluno, editEvent }) => {
  return (
    <div className="aluno-card">
      <div className="main-info">
        <div>
          <h3>{aluno.nome}</h3>
          <span className={aluno.ativo ? "txt-ativo" : "txt-inativo"}>
            {aluno.ativo ? "Ativo" : "Inativo"}
          </span>
        </div>
        <p>{aluno.email}</p>
      </div>
      <div className="aluno-card-buttons">
        <button className="btn-editar" onClick={editEvent}>
          <img src={EditIcon} alt="Editar aluno" />
        </button>
      </div>
    </div>
  );
};

export default AlunoCard;
