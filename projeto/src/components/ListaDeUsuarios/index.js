import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function ListaDeUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const carregarUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:8080/usuarios');
                setUsuarios(response.data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            } finally {
                setCarregando(false);
            }
        };

        carregarUsuarios();
    }, []);

    if (carregando) {
        return <p>Carregando usuários...</p>;
    }

    return (
        <ul id="listaUsuarios" className="lista-usuarios">
            {usuarios.length === 0 ? (
                <li>Nenhum usuário cadastrado</li>
            ) : (
                usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        <p><strong>Nome:</strong> {usuario.nome}</p>
                        <p><strong>Sexo:</strong> {usuario.sexo}</p>
                        <p><strong>Idade:</strong> {usuario.idade}</p>
                        <p><strong>Altura:</strong> {usuario.altura}</p>
                        <p><strong>Peso:</strong> {usuario.peso}</p>
                        <p><strong>Posição:</strong> {usuario.posicao}</p>
                        <p><strong>Número da Camisa:</strong> {usuario.numeroCamisa}</p>
                    </li>
                ))
            )}
        </ul>
    );
}

export default ListaDeUsuarios;
