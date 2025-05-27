import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './style.css';

function PaginaListaUsuarios() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/usuarios") // ajuste conforme sua API
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error("Erro ao carregar usuários:", err));
  }, []);

  return (
    <div className="pagina-lista-usuarios">
      <div className="container">
        <h2>Lista de Usuários</h2>

        <div className="lista-usuarios">
          {usuarios.map(usuario => (
            <div key={usuario.id} className="usuario-card">
              <title>Dados do jogador</title>   
              <p><strong>Nome:</strong> {usuario.nome}</p>
              <p><strong>Posição:</strong> {usuario.posicao}</p>
              <p><strong>Numero da Camisa:</strong> {usuario.numeroCamisa}</p>
            </div>
          ))}
        </div>
        <button className="link-voltar" onClick={() => navigate('/cadastro')}>
          Cadastrar usuários
        </button>
        <button className="link-voltar" onClick={() => navigate('/')}>
          Pagina Inicial
        </button>
      </div>
    </div>
  );
}

export default PaginaListaUsuarios;
