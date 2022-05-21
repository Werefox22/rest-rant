const mongoose = require('mongoose')

// schema
const commentSchema = new mongoose.Schema({
	content: {
		type: String,
		default: ''
	},
	rant: {
		type: Boolean,
		default: false		
	},
	stars: {
		type: Number,
		required: true
	},
	author: {
		type: String, 
		default: 'Anonymous'
	}
})

// model
module.exports = mongoose.model('Comment', commentSchema)