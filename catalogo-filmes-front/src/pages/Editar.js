// src/pages/Editar.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "../assets/Editar.css";

export default function Editar() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function carregarFilmes() {
      try {
        const response = await api.get("/filmes");
        setFilmes(response.data);
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      }
    }

    carregarFilmes();
  }, []);

  const extrairIdYoutube = (url) => {
    try {
      if (!url || typeof url !== "string") return null;
      const matchV = url.match(/[?&]v=([^&#]*)/);
      if (matchV && matchV[1]) return matchV[1];
      const matchShort = url.match(/youtu\.be\/([^?&#]*)/);
      if (matchShort && matchShort[1]) return matchShort[1];
      return null;
    } catch (error) {
      console.error("Erro ao extrair ID do trailer:", error);
      return null;
    }
  };

  return (
    <div className="editar-page">
      {/* <h2>Editar Filmes</h2> */}
      <div className="editar-grid">
        {filmes.map((filme) => {
          const videoId = extrairIdYoutube(filme.url_poster);
          const imagemYoutube = videoId
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : "https://via.placeholder.com/300x180?text=Trailer+Indisponível";

          return (
            <div key={filme.id} className="editar-card">
              <img
                src={imagemYoutube}
                alt={`Capa do filme ${filme.titulo}`}
              />
              <h3>{filme.titulo}</h3>
              <p className="info"><strong>🎭 Gênero:</strong> {filme.genero}</p>
              <p className="info"><strong>📅 Ano:</strong> {filme.ano_lancamento}</p>
              <p className="info">{filme.descricao}</p>

              <div className="actions">
                <Link to={`/editar/${filme.id}`}>✏️ Editar Filme</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
