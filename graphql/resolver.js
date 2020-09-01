const Todo = require('../models/todo')

module.exports = {

  async getTodos() {
    try {
      return await Todo.findAll()
    } catch (e) {
      throw new Error('Failed to fetch. Data is not available ...')
    }
  },
  async createTodo({ todo }) {
    try {
      return await Todo.create({
        title: todo.title,
        done: false
      })
    } catch (e) {
      throw new Error('Failed to create todo...')

    }
  },
  async completeTodo({ id }) {
    try {
      const todo = await Todo.findByPk(id)
      todo.done = true
      await todo.save()
      return todo
    } catch (e) {
      throw new Error('Failed to complete todo...')
    }
  },
  async deleteTodo({ id }) {
    try {
      const todos = await Todo.findAll({
        where: { id: id }
      })
      await todos[0].destroy()
      return true
    } catch (e) {
      throw new Error('Failed to delete todo...')
      return false
    }
  }
}