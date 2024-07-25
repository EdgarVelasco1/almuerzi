const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.MONGODB_URI)

//creamos un nuevo modelo

const Users = mongoose.model('User', new mongoose.Schema({ nombre: String}))

// Ruta para crear un nuevo usuario
app.get('/api', async (req, res) => {
    try {
      const user = await Users.create({ nombre: 'Chanchito Final' });
      console.log('User created:', user);
      const users = await Users.find();
      res.send(users);
    //   res.send({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });

module.exports = app