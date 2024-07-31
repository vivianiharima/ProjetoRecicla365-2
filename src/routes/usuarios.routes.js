const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController')

const usuariosRoutes = new Router();


usuariosRoutes.post('/', UsuarioController.cadastrarUsuario);


module.exports = usuariosRoutes