import "./aluno-card.css";

const AlunoCard = ({ aluno }) => {
  return (
    <div className="aluno-card">
      <div className="main-info">
        <h3>{aluno.nome}</h3>
        <p>{aluno.email}</p>
      </div>
      <span className={aluno.ativo ? "txt-ativo" : "txt-inativo"}>
        {aluno.ativo ? "Ativo" : "Inativo"}
      </span>
    </div>
  );
};

export default AlunoCard;
