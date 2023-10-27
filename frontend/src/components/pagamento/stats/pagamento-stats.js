import { useEffect, useState } from "react";
import "./pagamento-stats.css";

const PagamentoStats = ({ turmas, pagamentos }) => {
  const [data, setData] = useState({});
  // nós vamos receber turmas e dividir para os seguintes dados:
  // alunos, turmas, total arrecadado, total a receber

  useEffect(() => {
    // aqui nós vamos calcular os dados
    // e salvar no state
    if (!pagamentos || !turmas) return;
    const alunos = turmas.reduce((acc, turma) => {
      return acc + turma.alunos.length;
    }, 0);

    const totalAReceber = turmas.reduce((acc, turma) => {
      return acc + turma.alunos.length * turma.mensalidade;
    }, 0);

    const totalArrecadado = pagamentos.reduce((acc, pagamento) => {
      return acc + pagamento.valor;
    }, 0);

    setData({
      alunos,
      totalArrecadado,
      totalAReceber,
    });
    console.log("Turmas =>", turmas)
  }, [turmas, pagamentos]);

  return turmas ? (
    <div className="pagamentos-stats">
      <div className="stat">
        <svg viewBox="0 0 1152 1024" className="stat-icon">
          <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
          <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
        </svg>
        <span className="stat-title">Alunos</span>
        <span className="stat-subtitle">Matriculados</span>
        <h1 className="stat-value">{data.alunos || 0}</h1>
      </div>
      <div className="stat">
        <svg viewBox="0 0 1024 1024" className="stat-icon">
          <path d="M598 512h234l-234-234v234zM640 214l256 256v426q0 34-26 60t-60 26h-470q-34 0-59-26t-25-60v-598q0-34 26-59t60-25h298zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
        </svg>
        <span className="stat-title">Turmas</span>
        <span className="stat-subtitle">Ativas</span>
        <h1 className="stat-value">{turmas?.length}</h1>
      </div>
      <div className="stat">
        <svg viewBox="0 0 1024 1024" className="stat-icon">
          <path d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"></path>
        </svg>
        <span className="stat-title">Total</span>
        <span className="stat-subtitle">Arrecadado</span>
        <h1 className="stat-value">R${data.totalAReceber || 0}</h1>
      </div>
      <div className="stat">
        <svg viewBox="0 0 1024 1024" className="stat-icon">
          <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
        </svg>
        <span className="stat-title">Total</span>
        <span className="stat-subtitle">A receber</span>
        <h1 className="stat-value">R${data.totalAReceber || 0}</h1>
      </div>
    </div>
  ) : null;
};

export default PagamentoStats;
