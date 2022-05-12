const React = require('react')
const Default = require('../default')

function edit(data) {
	return (
		<Default>
			<main>
				<h2>Edit a Place</h2>
				<form action={`/places/${data.id}?_method=PUT`} method='POST'>
					<div className='form-group'>
						<label htmlFor='name'>Place Name</label>
						<input 
							className='form-control' 
							id='name' 
							name='name' 
							type="text" 
							required
							defaultValue={data.place.name}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='pic'>Place Picture</label>
						<input 
							className='form-control' 
							id='pic' 
							name='pic' 
							type="url"
							defaultValue={data.place.pic}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor="city">City</label>
						<input 
							className='form-control' 
							id='city' 
							name='city' 
							type="text"
							defaultValue={data.place.city}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor="state">State</label>
						<input 
							className='form-control' 
							id="state" 
							name='state' 
							type="text"
							defaultValue={data.place.state}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor="cuisines">Cuisines</label>
						<input 
							className='form-control' 
							id='cuisines' 
							name='cuisines' 
							type="text"
							required
							defaultValue={data.place.cuisines}
						/>
					</div>
					<input 
						className='btn btn-primary' 
						type="submit" 
						value='Update Place'
					/>
				</form>
				<hr />
				<a href="/places"><button className='btn-primary'>Back</button></a>
			</main>
		</Default>
	)
}

module.exports = edit