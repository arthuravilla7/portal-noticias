module.exports.noticias = function(application, req, res){
  const connection = application.config.dbConnection()
  const noticiasDAO = new application.app.models.NoticiasDAO(connection)

  noticiasDAO.getNoticias(function(error, result){
    res.render("noticias/noticias", {noticias : result})
  })
}

module.exports.noticia = function(application, req, res){
  const connection = application.config.dbConnection()
  const noticiasDAO = new application.app.models.NoticiasDAO(connection)
  let id_noticia = req.query;
  console.log(id_noticia)

  noticiasDAO.getNoticia(id_noticia, function(error, result){
    console.log(result)
    res.render("noticias/noticia", {noticia : result})
  })
}
