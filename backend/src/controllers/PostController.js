const Todo = require('../models/Todo');

module.exports = {
  async index(request, response) {
    const todos = await Todo.find().sort('-createAt');

    return response.json(todos);
  },

  async store(request, response) {
    const { todo } = request.params;

    const todoItem = await Todo.create({ todo });

    return response.json(todoItem);
  },

  async delete(request, response) {
    const { id } = request.params;
    
    const deleteItem = await Todo.findByIdAndRemove(id);

    return response.json(deleteItem);
  }
};