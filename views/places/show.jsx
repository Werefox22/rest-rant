const React = require('react')
const Default = require('../default')

function show(data) {
	// Comments
	let comments = (
		<h3 className='inactive'>
			No comments yet!
		</h3>
	)

	if (data.place.comments.length) {
		comments = data.place.comments.map(c => {
			return (
				<div className='comment'>
					<h3 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 😍'}</h3>
					<h4>{c.content}</h4>
					<h5>
						<strong>- {c.author}</strong>
					</h5>
					<h4>Rating: {c.stars}/5</h4>
				</div>
			)
		})
	}

	return (
		<Default>
			<main>
				<div className='row'>

					<div className='col-sm-6'>
						<h2>{data.place.name}</h2>
						<img src={data.place.pic} alt={data.place.name} />
						
						<h4>Location</h4>
						<p>{`${data.place.city}, ${data.place.state}`}</p>
						
						<div className='buttons'>
							<a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>Edit</a>
							<form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
								<button type='submit' className='btn btn-danger'>
									Delete
								</button>
							</form>
						</div>
					</div>
					
					<div className='col-sm-6'>
						<h2>Description</h2>
						<p>{data.place.showEstablished()}</p>

						<h4>Rating</h4>
						<p>Not yet rated</p>

						<h4>Cuisines</h4> 
						<p>{data.place.cuisines}</p>
					</div>
				</div>

				{/* COMMENTS */}
				<hr />
				<h3>Comments</h3>
				{comments}
			</main>
		</Default>
	)
}

module.exports = show