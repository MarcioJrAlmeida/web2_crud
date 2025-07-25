const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Filme = sequelize.define('Filme', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  ano_lancamento: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: true
  },
  url_poster: {
    type: DataTypes.STRING(500),
    allowNull: true
  }
}, {
  tableName: 'Filmes',
  timestamps: false
});

module.exports = Filme;
