const React = require('react')
const Default = require('../default')

function index(data) {
	// format data
	let placesFormatted = data.places.map((place) => {
		return (
			<div className='col-sm-6' key={index}>
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
				<h2>Places to Rant or Rave About</h2>
				<div className='row'>
					{placesFormatted}
				</div>
				<hr />
				<a href="/places/new"><button className='btn-primary'>New Place</button></a>
			</main>
		</Default>
	)
}

module.exports = index