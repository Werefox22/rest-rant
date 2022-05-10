const React = require('react')
const Default = require('../default')

function index(data) {
	// format data
	let placesFormatted = data.places.map((place) => {
		return (
			<div>
				<h2>{place.name}</h2>
				<img src={place.pic} alt={place.name}></img>
			</div>
		)
	})

	// display page
	return (
		<Default>
			<main>
				<h1>Places index</h1>
				{placesFormatted}
			</main>
		</Default>
	)
}

module.exports = index