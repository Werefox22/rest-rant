const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	pic: { type: String, default: 'https://glasssolutionsnc.com/wp-content/uploads/2020/01/Storefront-glass-window-replacement.jpg' },
	cuisines: { type: String, required: true },
	city: { type: String, default: 'Anytown' },
	state: { type: String, default: 'USA' },
	founded: Number
})

module.exports = mongoose.model('Place', placeSchema)