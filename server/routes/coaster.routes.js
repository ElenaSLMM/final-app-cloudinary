const express = require('express')
const router = express.Router()

const Coaster = require('./../models/Coaster.model')

// Endpoints
router.get('/getAllCoasters', (req, res, next) => {

    Coaster.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get('/getOneCoaster/:coaster_id', (req, res, next) => {

    Coaster.findById(req.params.coaster_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post('/newCoaster', (req, res, next) => {

    Coaster.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router