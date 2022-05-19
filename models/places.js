const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	pic: { 
		type: String, 
		default: 'https://glasssolutionsnc.com/wp-content/uploads/2020/01/Storefront-glass-window-replacement.jpg' 
	},
	cuisines: { type: String, required: true },
	city: { type: String, default: 'Anytown' },
	state: { type: String, default: 'USA' },
	founded: {
		type: Number,
		min: [1673, 'No way is your resturant that old.'],
		max: [new Date().getFullYear(), 'Year entered is in the future!']
	}
})

placeSchema.methods.showEstablished = function() {
	return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)