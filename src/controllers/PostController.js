const Todo = require('../models/Todo');

module.exports = {
  async index(request, response) {
<<<<<<< HEAD
    const todos = await Todo.find().sort('-updatedAt');
=======
    const todos = await Todo.find().sort('-createAt');
>>>>>>> 9df313471338bf86cfd23a9f6b81724af42eec60

    return response.json(todos);
  },

  async store(request, response) {
<<<<<<< HEAD
    const { todo } = request.body;

    const todoItem = await Todo.create({
      todo,
    });
=======
    const { todo } = request.params;

    const todoItem = await Todo.create({ todo });
>>>>>>> 9df313471338bf86cfd23a9f6b81724af42eec60

    return response.json(todoItem);
  },

  async delete(request, response) {
    const { id } = request.params;
<<<<<<< HEAD

    const todoDelete = await Todo.findByIdAndDelete(id);

    request.io.emit('delete', todoDelete);

    return response.json(todoDelete);
  }

=======
    
    const deleteItem = await Todo.findByIdAndRemove(id);

    return response.json(deleteItem);
  }
>>>>>>> 9df313471338bf86cfd23a9f6b81724af42eec60
};