const React = require('react')
const Default = require('../default')

function index(data) {
	// format data
	let placesFormatted = data.places.map((place) => {
		return (
			<div className='col-sm-6'>
				<h2>{place.name}</h2>
				<img src={place.pic} alt={place.name}></img>
				<p>{place.cuisines}</p>
				<p>Located in {place.city}, {place.state}</p>
			</div>
		)
	})

	// display page
	return (
		<Default>
			<main>
				<h1>Places to Rant or Rave about</h1>
				<div className='row'>
					{placesFormatted}
				</div>
			</main>
		</Default>
	)
}

module.exports = index