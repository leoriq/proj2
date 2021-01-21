const Todo = require('../models/Todo');

module.exports = {
    async store(req, res) {
        const todo = await Todo.findById(req.params.id);

        todo.done = true;

        await todo.save();

        req.io.emit('done', todo);

        return res.json(todo);
    }
}