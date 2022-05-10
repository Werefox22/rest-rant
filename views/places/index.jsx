const React = require('react')

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
		<html>
			<main>
				<h1>Places index</h1>
				{placesFormatted}
			</main>
		</html>
	)
}

module.exports = index