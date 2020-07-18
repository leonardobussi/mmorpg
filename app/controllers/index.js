module.exports.index = function(application, req, res){
	res.render('index', {validacao: {}});
}

module.exports.autenticar = function(application, req, res){
	const dadosForm = req.body

	req.assert("usuario", "Usuario não pode ser vazio!").notEmpty()
	req.assert("senha", "Senha não pode ser vazio!").notEmpty()

	const erros = req.validationErrors()

	if(erros){
		return res.render('index', {validacao: erros})
	}

	return res.send("deu certo")
}