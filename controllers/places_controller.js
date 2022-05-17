const router = require('express').Router()
const db = require('../models')

// routes

// index
router.get('/', (req, res) => {
	db.Place.find()
	.then(places => {
		res.render('places/index', { places })
	})
	.catch(er => {
		console.log(err)
		res.render('error404')
	})
})

// post 
router.post('/', (req, res) => {
	// validate image
	if (!req.body.pic || !req.body.pic.startsWith('https') || req.body.pic.startsWith('http')) {
		// default image is handled by the schema
		req.body.pic = undefined
	}

	db.Place.create(req.body)
	.then(() => {
		res.redirect('/places')
	})
	.catch(err => {
		console.log('err', err)
		res.render('error404')
	})
})

// new
router.get('/new', (req, res) => {
	res.render('places/new')
})

// edit
router.get('/:id/edit', (req, res) => {
	res.send('GET /places/:id/edit stub')
})

// show
router.get('/:id', (req, res) => {
	db.Place.findById(req.params.id)
	.then(place => {
		res.render('places/show', { place })
	})
	.catch(err => {
		console.log('err', err)
		res.render('error404')
	})
})

// update
router.put('/:id', (req, res) => {
	res.send("PUT /places/:id stub")
})

// delete
router.delete('/:id', (req, res) => {

	db.Place.findByIdAndDelete(req.params.id)
	.then(() => {
		res.redirect('/places')
	})
	.catch(err => {
		console.log('err', err)
		res.render('error404')
	})
})

module.exports = router