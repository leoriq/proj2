const Todo = require('../models/Todo');

module.exports = {
    async store(req, res) {
        const todo = await Todo.findById(req.name.id);

        todo.done == true;

        await todo.save();

        return res.json(post);
    }
}