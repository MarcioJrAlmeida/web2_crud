// src/config/database.js
module.exports = {
  dialect: 'mssql',
  username: 'walle',
  password: 'walle123',
  database: 'catalogo',
  host: 'localhost',
  dialectOptions: {
    options: {
      instanceName: 'SQLEXPRESS',     // instância nomeada
      encrypt: false,                 // desativa TLS (local)
      trustServerCertificate: true    // aceita certificados locais
    }
  },
  port: 1433,
  logging: false
};
