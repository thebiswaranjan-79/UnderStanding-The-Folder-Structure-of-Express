const express = require('express');
const { getTodos, createTodo } = require('../../controller/todo.controller');

const todoRouter = express.Router();

todoRouter.get('/', getTodos);

todoRouter.post('/',createTodo );

module.exports = todoRouter;