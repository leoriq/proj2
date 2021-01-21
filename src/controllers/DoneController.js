const Todo = require('../models/Todo');

module.exports = {
    async store(req, res) {
<<<<<<< HEAD
        const todo = await Todo.findById(req.params.id);

        todo.done = true;

        await todo.save();

        req.io.emit('done', todo);

        return res.json(todo);
=======
        const todo = await Todo.findById(req.name.id);

        todo.done == true;

        await todo.save();

        return res.json(post);
>>>>>>> 9df313471338bf86cfd23a9f6b81724af42eec60
    }
}