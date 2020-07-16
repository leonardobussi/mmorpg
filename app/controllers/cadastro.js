module.exports.cadastro = function (application, req, res){
    res.render('cadastro', {validacao: {}, dadosForm: {}})
}
module.exports.cadastrar = function (application, req, res){  

    const dadosForm = req.body;

    req.assert('nome', 'nome não pode ser vazio').notEmpty();
    req.assert('usuario', 'usuario não pode ser vazio').notEmpty();
    req.assert('senha', 'senha não pode ser vazio').notEmpty();
    req.assert('casa', 'casa não pode ser vazio').notEmpty();

    const erros = req.validationErrors();

    if(erros){
        res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
        return;
    }

    const cone = application.config.dbConnection;
    const UsuariosDAO = new application.app.models.UsuariosDAO(cone)

    UsuariosDAO.inserirUsuario(dadosForm)
    res.send("pronto")
    return;
    
}