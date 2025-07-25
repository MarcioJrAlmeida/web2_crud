const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/filmesControllers');

router.get('/', filmeController.listarTodos);
router.get('/:id', filmeController.buscarPorId);
router.post('/', filmeController.criar);
router.put('/:id', filmeController.atualizar);
router.delete('/:id', filmeController.deletar);

module.exports = router;
