const mongo = require('mongodb')

const connMongoDB = function(){
    console.log("entrou na funcao de conexao")
    const db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    )

    return db; 

}   



module.exports = function(){
   return connMongoDB
}