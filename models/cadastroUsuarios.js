const db = require('./db')

const usuarios = db.sequelize.define('cadastrousuarios' ,{
    nome:{
        type:db.Sequelize.STRING
    },
    email:{
        type:db.Sequelize.STRING
    },
    senha:{
        type:db.Sequelize.STRING
    }
})

//Cria tabela= somente uma vez
//usuarios.sync({force:true})

module.exports = usuarios
