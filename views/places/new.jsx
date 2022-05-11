const React = require('react')
const Default = require('../default')

function new_form() {
	return (
		<Default>
			<main>
				<h1>Add a New Place</h1>
				<form method='POST' action='/places'>
					<div>
						<label htmlFor='name'>Place Name</label>
						<input id='name' type="text" required />
					</div>
					<div>
						<label htmlFor='pic'>Place Picture</label>
						<input id='pic' type="url" />
					</div>
					<div>
						<label htmlFor="city">City</label>
						<input id='city' type="text" />
					</div>
					<div>
						<label htmlFor="state">State</label>
						<input id="state" type="text" />
					</div>
					<div>
						<label htmlFor="cuisines">Cuisines</label>
						<input id='cuisines' type="text" required/>
					</div>
					<input type="submit" value='Add Place'/>
				</form>
			</main>
		</Default>
	)
}

module.exports = new_form