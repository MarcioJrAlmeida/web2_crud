const Filme = require('../models/filmes.models');
const { sequelize } = require('../models/index'); // Certifique-se de exportar o sequelize da conexão

module.exports = {
  async listarTodos(req, res) {
    try {
      const filmes = await Filme.findAll();
      res.json(filmes);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao listar filmes' });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const filme = await Filme.findByPk(id);
      if (!filme) return res.status(404).json({ erro: 'Filme não encontrado' });
      res.json(filme);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar filme' });
    }
  },

  async criar(req, res) {
    const transaction = await sequelize.transaction();
    try {
      const novoFilme = await Filme.create(req.body, { transaction });
      await transaction.commit();
      res.status(201).json(novoFilme);
    } catch (err) {
      await transaction.rollback();
      res.status(400).json({ erro: 'Erro ao criar filme' });
    }
  },

  async atualizar(req, res) {
    const transaction = await sequelize.transaction();
    try {
      const { id } = req.params;
      const [linhasAtualizadas] = await Filme.update(req.body, {
        where: { id },
        transaction
      });

      if (linhasAtualizadas === 0) {
        await transaction.rollback();
        return res.status(404).json({ erro: 'Filme não encontrado' });
      }

      await transaction.commit();
      res.json({ mensagem: 'Filme atualizado com sucesso' });
    } catch (err) {
      await transaction.rollback();
      res.status(400).json({ erro: 'Erro ao atualizar filme' });
    }
  },

  async deletar(req, res) {
    const transaction = await sequelize.transaction();
    try {
      const { id } = req.params;
      const deletado = await Filme.destroy({
        where: { id },
        transaction
      });

      if (!deletado) {
        await transaction.rollback();
        return res.status(404).json({ erro: 'Filme não encontrado' });
      }

      await transaction.commit();
      res.json({ mensagem: 'Filme deletado com sucesso' });
    } catch (err) {
      await transaction.rollback();
      res.status(400).json({ erro: 'Erro ao deletar filme' });
    }
  }
};
