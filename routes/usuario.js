const {Router} = require('express')

const route = Router()


//Listar todos los datos
route.get('/', (req, res) =>{
    res.json({
        msg:'GET'
    })
})

//Consultar un dato
route.get('/consultarUsuario', (req, res) => {
    res.json({
        msg: 'Lista Datos'
    })
})

//Metodo para agregar datos
route.post('/', (req, res) => {
    res.json({
        msg: 'Insercion exitosa'
    })
})


module.exports = route 