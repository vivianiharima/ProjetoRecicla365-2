const { Router } = require('express');
const LocalController = require('../controllers/LocalController')

const locaisRoutes = new Router();


locaisRoutes.post('/', LocalController.cadastrarLocal);
locaisRoutes.get('/:id', LocalController.listarLocal);
locaisRoutes.get('/', LocalController.listarTudo);
locaisRoutes.put('/:id', LocalController.atualizarLocal);
locaisRoutes.delet('/:id', LocalController.deletarLocal);



module.exports = locaisRoutes
