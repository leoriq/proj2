const express = require('express');
const multer = require('multer');

const PostController = require('./controllers/PostController');
const DoneController = require('./controllers/DoneController');

const routes = new express.Router();
const upload = multer();

routes.get('/todos', PostController.index);
routes.post('/todos', upload.single(), PostController.store);
routes.delete('/todos/:id', PostController.delete);

routes.post('/todos/:id', DoneController.store);

module.exports = routes;