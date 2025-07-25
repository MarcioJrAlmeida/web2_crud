import { useEffect, useState } from "react";
import api from "../services/api";
import Card from "../components/Card";
import "../assets/Home.css";

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function carregarFilmes() {
      try {
        const resposta = await api.get("/filmes");
        setFilmes(resposta.data);
      } catch (erro) {
        console.error("Erro ao carregar filmes:", erro);
      }
    }

    carregarFilmes();
  }, []);

  return (
    <div className="home-container">
      {/* <h1 className="home-titulo">🎬 Catálogo de Filmes</h1> */}

      {filmes.length === 0 ? (
        <p>Nenhum filme encontrado.</p>
      ) : (
        <div className="home-grid">
          {filmes.map((filme) => (
            <Card key={filme.id} filme={filme} />
          ))}
        </div>
      )}
    </div>
  );
}
