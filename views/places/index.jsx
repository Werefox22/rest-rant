const React = require('react')
const Default = require('../default')

function index(data) {
	// format data
	let placesFormatted = data.Places.map((place) => {
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
				<h1>Places to Rant or Rave about</h1>
				<div className='row'>
					{placesFormatted}
				</div>
				<hr />
				<a href="/"><button className='btn-primary'>Home</button></a>
			</main>
		</Default>
	)
}

module.exports = index