import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook
import './style.css';
import logo from '../../assets/images/chelsea-football-club.png';
import banner from '../../assets/images/banner.jpg';

function BemVindo() {
    const navigate = useNavigate(); // cria a função de navegação

    return (
        <div className="pagina-bem-vindo">
            <header className="topo">
                <img src={logo} alt="Logo" className="logo" />
                <nav className="menu">
                    <a href="#beneficios">Benefícios</a>
                    <a href="#comparativo">Acessorados</a>
                    <a href="#funcionalidades">Funcionalidades</a>
                    <a href="#quem-somos">Quem somos</a>
                </nav>
            </header>

            <main className="conteudo">
            <img src={banner} alt="Banner" className="imagem-banner" />
                <h1 className="titulo">CONSTRUA SUA JORNADA DE SUCESSO!</h1>
                <p className="descricao">
                        Chegou a hora de registrar cada conquista e cada desafio superado.<br />
                            Sua trajetória, seu legado e sua paixão merecem ser contados e eternizados. 
                </p>
                <div className="botoes-download">
                    <a href="#" className="botao google">▶️ Google Play</a>
                    <a href="#" className="botao apple"> App Store</a>

                </div>

                <button 
                    style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                    onClick={() => navigate('/cadastro')}
                >
                    Ir para Cadastro
                </button>
            </main>
        </div>
    );
}

export default BemVindo;
