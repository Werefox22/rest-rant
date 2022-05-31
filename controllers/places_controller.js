const router = require('express').Router()
const db = require('../models')

// routes

// index
router.get('/', (req, res) => {
	db.Place.find()
	.then(places => {
		res.render('places/index', { places })
	})
	.catch(err => {
		console.log(err)
		res.render('error404')
	})
})

// post comment
router.post('/:id/comment', (req, res) => {
	// switch checkbox state from 'on' to true/false
	if (req.body.rant === 'on') {
		req.body.rant = true
	} else {
		req.body.rant = false
	}

	if (req.body.author === '') {
		req.body.author = undefined
	}

	db.Place.findById(req.params.id)
		// create comment
		.then(foundPlace => {
			db.Comment.create(req.body)
				.then(createdComment => {
					// push comment
					foundPlace.comments.push(createdComment)
					foundPlace.save()
					.then(() => {
						res.redirect(`/places/${req.params.id}`)
					})
				})
				.catch(err => {
					console.log('err', err)
					res.render('error404')
				})		
		})
		.catch(err => {
			console.log('err', err)
			res.render('error404')
		})
	})

// post place
router.post('/', (req, res) => {
	// validate image
	if (!req.body.pic || !req.body.pic.startsWith('https') || !req.body.pic.startsWith('http')) {
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
	db.Place.findById(req.params.id)
	.then(place => {
		res.render('places/edit', { place })
	})
	.catch(err => {
		console.log('err', err)
		res.render('error404')
	})
})

// show
router.get('/:id', (req, res) => {
	db.Place.findById(req.params.id)
		.populate('comments')
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
	// validate image
	if (!req.body.pic || !req.body.pic.startsWith('https') || req.body.pic.startsWith('http')) {
		// default image is handled by the schema
		req.body.pic = undefined
	}

	db.Place.findByIdAndUpdate(req.params.id, req.body)
	.then(() => {
		res.redirect(`/places/${req.params.id}`)
	})
	.catch(err => {
		console.log('err', err)
		res.render('error404')
	})
})

// delete comment
router.delete('/:pID/comment/:cID', async (req, res) => {
	let foundPlace = await db.Place.findById(req.params.pID)
	let foundComment = await db.Comment.findByIdAndDelete(req.params.cID)
	await foundPlace.save()
	res.redirect(`/places/${req.params.pID}`)
})

// delete place
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