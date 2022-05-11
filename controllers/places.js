const router = require('express').Router()
const Places = require('../models/places.js')

// routes
// /places
router.get('/', (req, res) => {
	res.render('places/index', {Places})
})

router.post('/', (req, res) => {
	res.send('places POST route')
})

// /places/new
router.get('/new', (req, res) => {
	res.render('places/new')
})

// places/:id
router.get('/:id', (req, res) => {
	res.send(Places[req.params.id])
})

module.exports = router