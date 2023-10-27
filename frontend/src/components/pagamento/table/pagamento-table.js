import "./pagamento-table.css";

const PagamentoTable = ({ labels, data }) => {
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
              <td>{item[lab.column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PagamentoTable;
