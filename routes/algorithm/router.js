const algoController = require('../../components/algorithms/algorithmsController');
const routes = require('express').Router();

routes.get('/algorithms', algoController.getAlgorithms);

module.exports = routes;