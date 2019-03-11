const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete']) //Cria a api automaticamente com o node-restful

Todo.updateOptions({new: true, runValidators: true}) //Retornar o registro novo após realizado um update e forçar a validação 

module.exports = Todo