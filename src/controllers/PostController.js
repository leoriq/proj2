const Todo = require('../models/Todo');

module.exports = {
  async index(request, response) {
    const todos = await Todo.find().sort('-createAt');

    return response.json(todos);
  },

  async store(request, response) {
    const todo  = request.body;

    const todoItem = await Todo.create({ todo });

    return response.json(todoItem);
  },

  async delete(request, response) {
    const { id } = request.params;

    const todoDelete = await Todo.findByIdAndDelete(id);

    return response.json(todoDelete);
  }

};