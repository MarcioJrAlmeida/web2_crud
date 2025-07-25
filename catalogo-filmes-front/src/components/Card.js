// src/components/Card.js
import React from "react";
import "../assets/Card.css";

export default function Card({ filme }) {
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

  const videoId = extrairIdYoutube(filme?.url_poster);
  const imagemYoutube = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "https://via.placeholder.com/300x180?text=Trailer+Indisponível";

  return (
    <div className="card">
      <h2 className="titulo">{filme.titulo}</h2>

      {videoId ? (
        <iframe
          width="100%"
          height="200"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`Trailer do filme ${filme.titulo}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="trailer"
        ></iframe>
      ) : (
        <img
          src={imagemYoutube}
          alt={`Capa do filme ${filme.titulo}`}
          className="imagem"
        />
      )}

      <p><strong>🎞 Gênero:</strong> {filme.genero}</p>
      <p><strong>📅 Ano:</strong> {filme.ano_lancamento}</p>
      <p className="descricao">{filme.descricao}</p>
    </div>
  );
}
