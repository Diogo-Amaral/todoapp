const mongoose = require('mongoose')

mongoose.Promise = global.Promise // Retirar msg de advertência versão do mongoose

module.exports = mongoose.connect('mongodb://localhost/todo')


