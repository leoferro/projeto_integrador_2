import { useEffect } from "react";
import { exibeDataNacional } from "../../../utils/funcoes_gerais";
import "./pagamento-table.css";

const PagamentoTable = ({ labels, data, turmas }) => {

  const buscaNomeAluno = (id) => {
    const turma = turmas.find((t) => t.alunos.find((a) => a.id === id));
    const aluno = turma.alunos.find((a) => a.id === id);
    return aluno.nome;
  };

  const buscaTurmaAluno = (id) => {
    const turma = turmas.find((t) => t.alunos.find((a) => a.id === id));
    return turma.disciplina;
  };

  return (
    <table>
      <thead>
        <tr>
          {labels.map((label, index) => (
            <th key={index}>{label.label}</th>
          ))}
          {/* <th>Aluno</th>
          <th>Disciplina</th>
          <th>Turma</th>
          <th>Valor</th>
          <th>Vencimento</th>
          <th>Data pgmt</th>
          <th>Método</th>
          <th>Status</th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            {labels.map((lab) => (
              lab.column === "data_pagamento" ? 
              item[lab.column] ? (
                <td>{exibeDataNacional(new Date(item[lab.column]))}</td>
              ) : (
                <td className={
                  item["status"] === "atrasado" ? "error-label" : "warning-label"
                }>{item["status"].toUpperCase()}</td>
              )
               : lab.column === "valor" ? (
                <td>R${item[lab.column]}</td>
              ) : lab.column === "aluno_id" ? (
                <td>{buscaNomeAluno(item[lab.column])}</td>
              ) : lab.column === "disciplina" ? (
                <td>{buscaTurmaAluno(item["aluno_id"])}</td>
              ) : (
                <td>{item[lab.column]}</td>
              )
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PagamentoTable;
