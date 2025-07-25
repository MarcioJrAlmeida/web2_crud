// src/pages/Deletar.js
import { useEffect, useState } from "react";
import api from "../services/api";
import "../assets/Deletar.css";

export default function Deletar() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    carregarFilmes();
  }, []);

  async function carregarFilmes() {
    try {
      const resposta = await api.get("/filmes");
      setFilmes(resposta.data);
    } catch (erro) {
      console.error("Erro ao carregar filmes:", erro);
    }
  }

  async function deletarFilme(id) {
    const confirmar = window.confirm("Tem certeza que deseja deletar este filme?");
    if (!confirmar) return;

    try {
      await api.delete(`/filmes/${id}`);
      setFilmes(filmes.filter((filme) => filme.id !== id));
    } catch (erro) {
      console.error("Erro ao deletar filme:", erro);
    }
  }

  function extrairIdYoutube(url) {
    const matchV = url?.match(/[?&]v=([^&#]*)/);
    const matchShort = url?.match(/youtu\.be\/([^?&#]*)/);
    if (matchV && matchV[1]) return matchV[1];
    if (matchShort && matchShort[1]) return matchShort[1];
    return null;
  }

  return (
    <div className="deletar-page">
      {/* <h2>🗑️ Excluir Filmes</h2> */}
      <div className="deletar-grid">
        {filmes.map((filme) => (
          <div key={filme.id} className="deletar-card">
            <img
              src={`https://img.youtube.com/vi/${extrairIdYoutube(filme.url_poster)}/hqdefault.jpg`}
              alt={filme.titulo}
            />
            <h3>{filme.titulo}</h3>
            <div className="actions">
              <button onClick={() => deletarFilme(filme.id)}>Deletar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
