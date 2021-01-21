const express = require('express');
<<<<<<< HEAD
const multer = require('multer');
=======
>>>>>>> 9df313471338bf86cfd23a9f6b81724af42eec60

const PostController = require('./controllers/PostController');
const DoneController = require('./controllers/DoneController');

const routes = new express.Router();
<<<<<<< HEAD
const upload = multer();

routes.get('/todos', PostController.index);
<<<<<<<< HEAD:src/routes.js
routes.post('/todos', upload.single(), PostController.store);
routes.delete('/todos/:id', PostController.delete);

routes.post('/todos/:id', DoneController.store);
========
=======

routes.get('/todos', PostController.index);
>>>>>>> 9df313471338bf86cfd23a9f6b81724af42eec60
routes.post('/todos', PostController.store);
routes.delete('/todos/:id', PostController.delete);

routes.post('/todos', DoneController.store);
<<<<<<< HEAD
>>>>>>>> 9df313471338bf86cfd23a9f6b81724af42eec60:backend/src/routes.js
=======
>>>>>>> 9df313471338bf86cfd23a9f6b81724af42eec60

module.exports = routes;