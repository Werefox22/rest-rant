const React = require('react')
const Default = require('../default')

function show(data) {
	return (
		<Default>
			<main>
				<h2>{data.place.name}</h2>
				<img src={data.place.pic} alt={data.place.name} />
				<h2>Rating</h2>
				<p>Not yet rated</p>
				<h4>Cuisines</h4> 
				<p>{data.place.cuisines}</p>
				<h4>Location</h4>
				<p>{`${data.place.city}, ${data.place.state}`}</p>
				<hr />
				<h3>Comments</h3>
				<p>No comments yet!</p>
			</main>
		</Default>
	)
}

module.exports = show