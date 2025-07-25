import { Link } from 'react-router-dom';
import '../assets/Header.css';

export default function Header() {
  return (
    <header className="header-container">
      <h1 className="logo">🎬 Catálogo de Filmes</h1>
      <nav className="nav-links">
        <Link to="/">Início</Link>
        <Link to="/cadastrar">Cadastrar</Link>
        <Link to="/editar">Editar</Link>
        <Link to="/deletar">Deletar</Link>
      </nav>
    </header>
  );
}