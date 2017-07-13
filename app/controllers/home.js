module.exports.index = function(application, req, res){
  let connection = application.config.dbConnection()
  let noticiasDAO = new application.app.models.NoticiasDAO(connection)

  noticiasDAO.get5UltimasNoticias(function(error, result){
    console.log(result)
    res.render("home/index", {noticias : result})
  })

}
