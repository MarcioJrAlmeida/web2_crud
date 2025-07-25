import React from "react";

export default function Card({ filme }) {
  return (
    <div style={styles.card}>
      <img src={filme.url_poster} alt={filme.titulo} style={styles.poster} />

      <div style={styles.info}>
        <h2>{filme.titulo}</h2>
        <p><strong>Ano:</strong> {filme.ano_lancamento}</p>
        <p><strong>Gênero:</strong> {filme.genero}</p>
        <p>{filme.descricao}</p>

        <div style={styles.trailerContainer}>
          <a href={filme.url_poster} target="_blank" rel="noreferrer" style={styles.trailerBtn}>
            ▶️ Assistir Trailer
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#1c1c1c",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  poster: {
    width: "100%",
    height: "auto",
    objectFit: "cover"
  },
  info: {
    padding: "15px",
    color: "#fff",
    flex: 1
  },
  trailerContainer: {
    marginTop: "10px",
    textAlign: "center"
  },
  trailerBtn: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#e50914",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold"
  }
};
