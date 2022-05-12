const React = require('react')
const Default = require('../default')

function show(data) {
	return (
		<Default>
			<main>
				<div className='row'>

					<div className='col-sm-6'>
						<h2>{data.place.name}</h2>
						<img src={data.place.pic} alt={data.place.name} />

						<div className='buttons'>
							<a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
							<form method='POST' action={`/places/${data.id}?_method=DELETE`}>
								<button type='submit' className='btn btn-danger'>
									Delete
								</button>
							</form>
						</div>
					</div>

					<div className='col-sm-6'>
						<h2>Rating</h2>
						<p>Not yet rated</p>
						<h4>Cuisines</h4> 
						<p>{data.place.cuisines}</p>
						<h4>Location</h4>
						<p>{`${data.place.city}, ${data.place.state}`}</p>
					</div>
				</div>

				<hr />
				<h3>Comments</h3>
				<p>No comments yet!</p>
			</main>
		</Default>
	)
}

module.exports = show