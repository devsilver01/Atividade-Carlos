import './style.css';

function MensagemFeedback({ mensagem, tipoMensagem, visivel, fecharMensagem }) {
  if (!visivel) {
    return null;
  }

  return (
    <div
      id="mensagem"
      className={`mensagem ${tipoMensagem} visivel`}
      onClick={fecharMensagem}
    >
      {mensagem}
    </div>
  );
}

export default MensagemFeedback;
