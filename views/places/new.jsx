const React = require('react')
const Default = require('../default')

function new_form() {
	return (
		<Default>
			<main>
				<h1>Add a New Place</h1>
				<form method='POST' action='/places'>
					<div className='form-group'>
						<label htmlFor='name'>Place Name</label>
						<input className='form-control' id='name' type="text" required />
					</div>
					<div className='form-group'>
						<label htmlFor='pic'>Place Picture</label>
						<input className='form-control' id='pic' type="url" />
					</div>
					<div className='form-group'>
						<label htmlFor="city">City</label>
						<input className='form-control' id='city' type="text" />
					</div>
					<div className='form-group'>
						<label htmlFor="state">State</label>
						<input className='form-control' id="state" type="text" />
					</div>
					<div className='form-group'>
						<label htmlFor="cuisines">Cuisines</label>
						<input className='form-control' id='cuisines' type="text" required/>
					</div>
					<input className='btn btn-primary' type="submit" value='Add Place'/>
				</form>
			</main>
		</Default>
	)
}

module.exports = new_form