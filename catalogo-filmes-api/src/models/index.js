// src/models/index.js
const sequelize = require('../config/sequelize');
const Filme = require('./filmes.models');

module.exports = {
  sequelize,
  Filme
};
