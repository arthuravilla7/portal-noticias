const app = require('./config/server')
const port = 3000

app.listen(port, function(){
  console.log(`Servidor rodando na porta ${port}, com ExpressJS`)
})
