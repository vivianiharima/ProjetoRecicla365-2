const { Router } = require('express');

const usuariosRoutes = require('./usuarios.routes');
const locaisRoutes = require('./locais.routes');
const loginRoutes = require('./login.routes');
const verificaToken = require('../middlewares/verificaToken');

const routes = new Router();

routes.use('/usuarios', usuariosRoutes);
routes.use('/locais',verificaToken, locaisRoutes);
routes.use('/login', loginRoutes)


module.exports = routes