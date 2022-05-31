const db = require('../models')

// fake names
let nouns = [ "Tony's", "Bob's", "The Red", "Royal", "Best", "Famous" ]
let rests = [ "Place", "Shack", "Grill", "Breakfast", "House", "Ovens", "Kitchen" ]
let cities = [ "Seattle", "Charlotte", "Raleigh", "Durham", "Atlanta", "Pheonix", "Birmingham", "Detroit" ]
let states = [ "WA", "AZ", "AL", "MI", "NC", "SC", "GA" ]
let food = [ "Coffee", "Pizza", "Mexican", "Italian", "American", "Thai", "Bakery" ]

// generate random places
let newPlaces = []
for (let i = 0; i < 4; i++) {
    let place = {
        name: nouns[Math.floor(Math.random() * nouns.length)] + " " + rests[Math.floor(Math.random() * rests.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        state: states[Math.floor(Math.random() * states.length)],
        cuisines: food[Math.floor(Math.random() * food.length)],
        pic: undefined,
        founded: Math.floor(Math.random() * 100) + 1922
    }
    newPlaces.push(place)
}

// create them
db.Place.create(newPlaces)
.then(() => {
	console.log("Seeding was successful")
	process.exit()
})
.catch(err => {
	console.log("Seeding was unsuccessful: ", err)
	process.exit()
})