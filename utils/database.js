const Sequelize = require('sequelize')


// const DB_NAME = 'node-todo'
// const USER_NAME = 'root'
// const PASSWORD = ''
const DB_NAME = 'lekua_nodetodo'
const USER_NAME = 'lekua_nodetodo'
const PASSWORD = '7^uE_g6E7u'



const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  // host: 'localhost',
  host: 'lekua.mysql.tools',
  dialect: 'mysql'
})

module.exports = sequelize