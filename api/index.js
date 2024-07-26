const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const meals = require('./routes/meals')
const orders = require('./routes/orders')
const app = express()
const dotenv = require('dotenv')

app.use(bodyParser.json())
app.use(cors())

dotenv.config()

mongoose.connect(process.env.MONGODB_URI) //este es el unico recurso para conectar vercel, vercel cli y mongodb no hay necesidad de colocar un env en vercel.json

app.use('/api/meals',meals)
app.use('/api/orders',orders)

// app.get('*',(req,res) => {
//     res.send('hola mundo')
// })

module.exports = app