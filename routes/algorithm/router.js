const algoController = require('../../components/algorithms/algorithmsController');
const routes = require('express').Router();

routes.get('/algorithms', algoController.getAlgorithms);
routes.get('/algorithm/:id', algoController.getAlgorithmContent);
module.exports = routes;