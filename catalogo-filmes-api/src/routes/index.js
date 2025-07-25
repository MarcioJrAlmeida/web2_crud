const express = require('express');
const router = express.Router();

// Rota teste
router.get('/', (req, res) => {
  res.json({ message: 'API de Filmes ativa!' });
});

module.exports = router;
