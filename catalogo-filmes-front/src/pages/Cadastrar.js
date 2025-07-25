// src/pages/Cadastrar.js
import React, { useState } from 'react';
import api from '../services/api';
import '../assets/Cadastrar.css';

export default function Cadastrar() {
  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    ano_lancamento: '',
    genero: '',
    url_poster: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/filmes', form);
      alert('Filme cadastrado com sucesso!');
      setForm({
        titulo: '',
        descricao: '',
        ano_lancamento: '',
        genero: '',
        url_poster: '',
      });
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar o filme!');
    }
  };

  return (
    <div className="container-cadastro">
      <div className="card-cadastro">
        <h2>Cadastrar Novo Filme</h2>
        <form onSubmit={handleSubmit} className="form-cadastro">
          <input
            type="text"
            name="titulo"
            placeholder="Título"
            value={form.titulo}
            onChange={handleChange}
            required
          />
          <textarea
            name="descricao"
            placeholder="Descrição"
            value={form.descricao}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="ano_lancamento"
            placeholder="Ano de Lançamento"
            value={form.ano_lancamento}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="genero"
            placeholder="Gênero"
            value={form.genero}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="url_poster"
            placeholder="Link do Trailer (YouTube)"
            value={form.url_poster}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-cadastrar">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
