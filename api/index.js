const express = require('express')
const app = express()

app.get(('*'),(request, response) => {
    response.send({message : 'Hola Mundo'})
    console.log('mi primera aplicacion de Almuerzi')
})

module.exports = app