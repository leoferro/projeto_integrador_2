import AlunoCadastro from "./aluno-cadastro";

const AlunoModal = ({ closeModal, user, editAluno }) => {
  return <AlunoCadastro closeModal={closeModal} user={user} editAluno={editAluno} />;
};

export default AlunoModal;
