module.exports.jogo = function(application, req, res){

	if(req.session.autorizado !== true){
		return res.send('Usuário precisa fazer login')	
	}

	var msg = ''

	if(req.query.msg != ''){
		msg = req.query.msg
	}

	console.log(msg)

	var usuario = req.session.usuario;
	var casa = req.session.casa;

	var connection = application.config.dbConnection;
	var JogoDAO = new application.app.models.JogoDAO(connection);


	JogoDAO.iniciaJogo(res, usuario, casa, msg)
	
}

module.exports.sair = function(application, req, res){

	req.session.destroy(function(){
		//res.render("index", {validacao: {}})
		res.redirect('/')
	})
}

module.exports.suditos = function(application, req, res){
	if(req.session.autorizado !== true){
		return res.send('Usuário precisa fazer login')	
	}
	res.render("aldeoes")
}

module.exports.pergaminhos = function(application, req, res){
	if(req.session.autorizado !== true){
		return res.send('Usuário precisa fazer login')	
	}

	var connection = application.config.dbConnection
	var JogoDAO = new application.app.models.JogoDAO(connection)

	var usuario = req.session.usuario

	JogoDAO.getAcoes(usuario, res)

	
}


module.exports.ordernar_acao_sudito = function(application, req, res){

	var dadosForm = req.body;

	req.assert('acao', 'Acão deve ser informada').notEmpty()
	req.assert('quantidade', 'Quantidade deve ser informada').notEmpty()

	var erros = req.validationErrors()

	if (erros){
		res.redirect('jogo?msg=A')
		return 
	}

	const connection = application.config.dbConnection
	const JogoDAO = new application.app.models.JogoDAO(connection)


	dadosForm.usuario = req.session.usuario
	JogoDAO.acao(dadosForm)

	res.redirect('jogo?msg=B')

}
