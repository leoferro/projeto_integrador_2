import "./aluno-card.css";

const AlunoCard = ({ aluno }) => {
  return (
    <div className="aluno-card">
      <h3>{aluno.nome}</h3>
      <p>{aluno.email}</p>
      <span className={aluno.ativo ? "aluno-ativo" : "aluno-inativo"}>
        {aluno.ativo ? "Ativo" : "Inativo"}
      </span>
    </div>
  );
};

export default AlunoCard;