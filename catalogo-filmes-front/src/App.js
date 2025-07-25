// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastrar from './pages/Cadastrar';
import Editar from './pages/Editar';
import EditarFilme from "./pages/EditarFilme";
import Deletar from './pages/Deletar';
import Header from "./components/Header";


// dentro do componente Routes


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/editar/" element={<Editar />} />
        <Route path="/editar/:id" element={<EditarFilme />} />
        <Route path="/deletar" element={<Deletar />} /> 
        <Route path="*" element={<h2>404 - Página não encontrada</h2>} />
        {/* Aqui depois você pode adicionar rotas como /cadastrar, /editar/:id */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
