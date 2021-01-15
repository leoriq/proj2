const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://unectproj2:unectproj2@cluster0.xi8yy.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.listen(3333);