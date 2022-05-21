const db = require('../models')

async function seed() {
	// get a place
	let place = await db.Place.findOne()
	
	// generate a comment
	let comment = await db.Comment.create({
		author: 'Famished Fran',
		rant: false,
		stars: 5.0,
		content: 'Wow, simply amazing! Highly recommended!'
	})

	// push the comment and save it
	place.comments.push(comment.id)
	await place.save()

	process.exit()
}

seed()