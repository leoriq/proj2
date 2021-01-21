const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo: String,
    done: {
        type: Boolean,
<<<<<<< HEAD
        default: false,
=======
        default: false
>>>>>>> 9df313471338bf86cfd23a9f6b81724af42eec60
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Todo', TodoSchema);