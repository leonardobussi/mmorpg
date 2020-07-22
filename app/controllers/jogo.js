module.exports.jogo = function(application, req, res){

	if(req.session.autorizado !== true){
		return res.send('Usuário precisa fazer login')
		
	}

	var usuario = req.session.usuario;
	var casa = req.session.casa;

	var connection = application.config.dbConnection;
	var JogoDAO = new application.app.models.JogoDAO(connection);


	JogoDAO.iniciaJogo(res, usuario, casa)
	
}

module.exports.sair = function(application, req, res){

	req.session.destroy(function(){
		//res.render("index", {validacao: {}})
		res.redirect('/')
	})
}

module.exports.suditos = function(application, req, res){
	res.render("aldeoes")
}

module.exports.pergaminhos = function(application, req, res){
	res.render("pergaminhos")
}