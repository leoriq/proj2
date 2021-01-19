const express = require('express');

const PostController = require('./controllers/PostController');
const DoneController = require('./controllers/DoneController');

const routes = new express.Router();

routes.get('/todos', PostController.index);
routes.post('/todos', PostController.store);

routes.get('/todos/:id', DoneController.store);

module.exports = routes;