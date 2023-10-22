import { exibeDiaSemana, exibePeriodoHora } from "../../../utils/funcoes_gerais";
import "./turma-card.css";
import { useHistory } from "react-router-dom";

const TurmaCard = ({ turma }) => {
  const history = useHistory();

  console.log("turma: ", turma)

  const handleClick = () => {
    history.push(`/turma/${turma.id}`);
  };

  return turma && (
    <div className="turma-card" onClick={handleClick}>
      <div className="turma-card-header">
        <h2>{turma.disciplina}</h2> <span>{exibeDiaSemana(turma.dia_semana)}</span>
      </div>
      <div className="turma-card-body">
        <p>Período: {exibePeriodoHora(turma.horario_inicial, turma.horario_final)}</p>
        <p>Alunos: {turma.alunos.length}</p>
      </div>
    </div>
  );
};

export default TurmaCard;
