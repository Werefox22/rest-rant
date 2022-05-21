const db = require('../models')

async function seed() {
	// get a place
	let place = await db.Place.findOne()
	
	// generate some comments
	let comment1 = await db.Comment.create({
		author: 'Famished Fran',
		rant: false,
		stars: 5.0,
		content: 'Wow, simply amazing! Highly recommended!'
	})

	let comment2 = await db.Comment.create({
		author: 'Angry Andy',
		rant: true,
		stars: 1.5,
		content: 'Wow, simply terrible! I do not recommend!'
	})

	// push the comment and save it
	place.comments.push(comment1.id)
	place.comments.push(comment2.id)
	await place.save()

	process.exit()
}

seed()