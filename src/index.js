const express = require('express');
const mongoose = require('mongoose');
<<<<<<< HEAD
const routes = require('./routes');
=======

const routes = require('./routes');

>>>>>>> 9df313471338bf86cfd23a9f6b81724af42eec60
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
<<<<<<< HEAD
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true
    }
  });

mongoose.connect('mongodb+srv://unectproj2:unectproj2@cluster0.xi8yy.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
=======
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://unectproj2:unectproj2@cluster0.xi8yy.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
>>>>>>> 9df313471338bf86cfd23a9f6b81724af42eec60
})

app.use((request, response, next) => {
    request.io = io;

    next();
});

app.use(cors());

app.use(routes);

server.listen(3333);