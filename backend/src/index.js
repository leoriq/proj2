const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://unectproj2:unectproj2@cluster0.xi8yy.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.use((request, response, next) => {
    request.io = io;

    next();
});

app.use(cors());

app.use(routes);

server.listen(3333);