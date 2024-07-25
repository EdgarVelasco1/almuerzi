const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.MONGODB_URI)

//creamos un nuevo modelo

const Users = mongoose.model('User', new mongoose.Schema({ nombre: String}))

Users.create({nombre: 'Chanchito Triste'})

app.get(('*'),(request, response) => {

    Users.find()
        .then(x=> response.send(x))
    // response.send({message : 'Hola Mundo'})
    // console.log('mi primera aplicacion de Almuerzi')
})

module.exports = app