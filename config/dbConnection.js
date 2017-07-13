const mysql = require('mysql')

const connMySQL = function(){
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'maribibi', // maribibi
    database : 'nodeblog'
  })
}

module.exports = function(){
  return connMySQL
}
