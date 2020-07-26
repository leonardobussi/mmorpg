/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){ // falta conectar com o banco remoto
	console.log('Entrou na função de conexão');
	var db = new mongo.Db(
		'goteira',
		new mongo.Server(
			'localhost', //string contendo o endereço do servidor
			27017, //porta de conexão
			{}
		),
		{}
	);

	return db;
}

module.exports = function(){
	return connMongoDB;
}