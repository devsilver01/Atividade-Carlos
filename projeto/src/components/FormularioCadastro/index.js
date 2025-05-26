import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import useMensagem from '../hooks/useMensagem';
import MensagemFeedback from '../MensagemFeedback/';
import axios from 'axios';

function FormularioCadastro() {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [idade, setIdade] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [posicao, setPosicao] = useState('');
    const [numeroCamisa, setNumeroCamisa] = useState('');

    const navigate = useNavigate();
    const { mostrarMensagem, mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem();

    const cadastroUsuarios = async (event) => {
        event.preventDefault(); 
        try {
            const response = await axios.post('http://localhost:8080/usuarios', {
                nome,
                sexo,
                idade,
                altura,
                peso,
                posicao,
                numeroCamisa
            });

            mostrarMensagem(response.data.mensagem || 'Usuário cadastrado com sucesso!', 'sucesso');

            // Limpa os campos
            setNome('');
            setSexo('');
            setIdade('');
            setAltura('');
            setPeso('');
            setPosicao('');
            setNumeroCamisa('');

        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor. ';

            if (error.response && error.response.data) {
                erroMsg += error.response.data.mensagem || 'Erro ao cadastrar usuário.';
                if (error.response.data.erros) {
                    erroMsg += ' ' + error.response.data.erros.join(', ');
                }
            }

            mostrarMensagem(erroMsg, 'erro');
        }
    };

    return (
        <div className="container">
            <div className="formulario-cadastro">
                <h1>Página de Cadastro</h1>
                <form onSubmit={cadastroUsuarios}>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Sexo"
                        value={sexo}
                        onChange={(e) => setSexo(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Idade"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        step="0.01"
                        placeholder="Altura (ex: 1.75)"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        step="0.1"
                        placeholder="Peso (ex: 70.5)"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Posição"
                        value={posicao}
                        onChange={(e) => setPosicao(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Número da Camisa"
                        value={numeroCamisa}
                        onChange={(e) => setNumeroCamisa(e.target.value)}
                        required
                    />
                    <button type="submit">Cadastrar</button>
                </form>

                <button onClick={() => navigate('/usuarios')} className="link-usuarios">
                    Ver usuários cadastrados
                </button>

                <MensagemFeedback
                    mensagem={mensagem}
                    tipoMensagem={tipoMensagem}
                    visivel={visivel}
                    fecharMensagem={fecharMensagem}
                />
            </div>
        </div>
    );
}

export default FormularioCadastro;
