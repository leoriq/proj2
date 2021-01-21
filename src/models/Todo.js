const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo: String,
    done: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Todo', TodoSchema);