// src/pages/EditarFilme.js
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import "../assets/EditarFilme.css";

export default function EditarFilme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    titulo: "",
    descricao: "",
    ano_lancamento: "",
    genero: "",
    url_poster: "",
  });

  useEffect(() => {
    async function carregarFilme() {
      try {
        const response = await api.get(`/filmes/${id}`);
        setFormulario(response.data);
      } catch (error) {
        console.error("Erro ao buscar o filme:", error);
        alert("Filme não encontrado!");
        navigate("/editar");
      }
    }

    carregarFilme();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/filmes/${id}`, formulario);
      alert("Filme atualizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao atualizar filme:", error);
      alert("Erro ao atualizar filme.");
    }
  };

  return (
    <div className="editar-filme-container">
      <div className="editar-filme-card">
        <h2>Editar Filme</h2>
        <form className="editar-filme-form" onSubmit={handleSubmit}>
          <label>Título:</label>
          <input
            type="text"
            name="titulo"
            value={formulario.titulo}
            onChange={handleChange}
            required
          />

          <label>Descrição:</label>
          <textarea
            name="descricao"
            value={formulario.descricao}
            onChange={handleChange}
            required
          />

          <label>Ano de Lançamento:</label>
          <input
            type="number"
            name="ano_lancamento"
            value={formulario.ano_lancamento}
            onChange={handleChange}
            required
          />

          <label>Gênero:</label>
          <input
            type="text"
            name="genero"
            value={formulario.genero}
            onChange={handleChange}
            required
          />

          <label>Link do Trailer (YouTube):</label>
          <input
            type="url"
            name="url_poster"
            value={formulario.url_poster}
            onChange={handleChange}
            required
          />

          <button className="editar-filme-btn" type="submit">Salvar Alterações</button>
        </form>
      </div>
    </div>
  );
}
