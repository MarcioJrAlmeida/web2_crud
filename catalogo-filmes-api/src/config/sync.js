// src/config/sync.js
const { sequelize } = require('../models');

async function sincronizar() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');
    await sequelize.sync({ alter: true }); // ajusta estrutura se necessário
    console.log('📦 Modelos sincronizados com sucesso.');
  } catch (error) {
    console.error('❌ Erro ao sincronizar:', error);
  }
}

sincronizar();
