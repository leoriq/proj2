const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

const server = require('http').Server(app);

mongoose.connect('mongodb+srv://unectproj2:unectproj2@cluster0.xi8yy.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.use(cors());

server.listen(3333);