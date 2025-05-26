import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PaginaCadastro from './pages/Cadastro';
import PaginaListaUsuarios from './pages/Lista';
import PaginaBemvindo from './pages/Bem-Vindo';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaBemvindo />} />  
        <Route path="/cadastro" element={<PaginaCadastro />} /> 
        <Route path="/usuarios" element={<PaginaListaUsuarios />} />
      </Routes>
    </Router>
  );
}

export default App;
