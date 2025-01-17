const express = require('express')
const Meals = require('../models/Meals')
const router = express.Router()

router.get('/', (req,res) => {
    Meals.find()
    .exec()
    .then(x => res.status(200).send(x))
})

router.get('/:id', (req,res) => {
    // res.send(req.params.id)
    Meals.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/', (req,res) => {
    // res.send('hola soy post')
    Meals.create(req.body)
    .then(x => res.status(201).send(x))
})

router.put('/:id', (req,res) => {
    // res.send('hola soy put')
    Meals.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id', (req,res) => {
    // res.send('hola soy delete')
    Meals.findOneAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
})

module.exports = router