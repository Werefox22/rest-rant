const router = require('express').Router()
const places = require('../models/places.js')

// routes
// /places
router.get('/', (req, res) => {
	res.render('places/index', {places})
})

// post 
router.post('/', (req, res) => {
	if (!req.body.pic) {
		// default image
		req.body.pic = 'http://placekitten.com/400/400'
	}
	if (!req.body.city) {
		req.body.city = 'Anytown'
	}
	if (!req.body.state) {
		req.body.state = 'USA'
	}
	places.push(req.body)
	res.redirect('/places')
})

// new
router.get('/new', (req, res) => {
	res.render('places/new')
})

// edit
router.get('/:id/edit', (req, res) => {
	// validate id
	let id = Number(req.params.id)
	if (isNaN(id) || !places[id]) {
		res.render('error404')
	} else {
		res.render('places/edit', { place: places[id], id})
	}
})

// show
router.get('/:id', (req, res) => {
	let id = Number(req.params.id)
	if (isNaN(id) || !places[id]) {
		res.render('error404')
	} else {
		res.render('places/show', { 
			place: places[id], 
			id
		})
	}
})

// update
router.put('/:id', (req, res) => {
	places[req.params.id] = req.body
	res.status(303).redirect('/places')
})

// delete
router.delete('/:id', (req, res) => {
	let id = Number(req.params.id)
	if (isNaN(id) || !places[id]) {
		res.render('error404')
	} else {
		places.splice(id, 1)
		res.redirect('/places')
	}
})

module.exports = router