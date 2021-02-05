const db = require('./db')

const usuario = db.sequelize.define('usuario',{
    nome
    :{
        type:db.Sequelize.STRING
    },
    email:{
        type:db.Sequelize.STRING
    },
    telefone:{
        type:db.Sequelize.STRING
    },
    assunto:{
        type:db.Sequelize.STRING
    },
    descricao:{
        type:db.Sequelize.STRING
    },
    foto:{
        type:db.Sequelize.STRING
    }
})

//Cria tabela= somente uma vez
//usuario.sync({force:true})

module.exports = usuario