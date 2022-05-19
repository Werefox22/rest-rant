const React = require('react')
const Default = require('../default')

function new_form() {
	return (
		<Default>
			<main>
				<h2>Add a New Place</h2>
				<form method='POST' action='/places'>
					<div className='form-group'>
						<label htmlFor='name'>Place Name</label>
						<input 
							className='form-control' 
							id='name' 
							name='name' 
							type="text" 
							required 
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='pic'>Place Picture</label>
						<input 
							className='form-control' 
							id='pic' 
							name='pic' 
							type="url" 
						/>
					</div>
					<div className='form-group'>
						<label htmlFor="city">City</label>
						<input 
							className='form-control' 
							id='city' 
							name='city' 
							type="text"
						/>
					</div>
					<div className='form-group'>
						<label htmlFor="state">State</label>
						<input 
							className='form-control' 
							id="state" 
							name='state' 
							type="text" 
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
						/>
					</div>
					<div className='form-group'>
						<label htmlFor="founded">Year Founded</label>
						<input 
							className='form-control' 
							id='founded' 
							name='founded' 
							type="number"
							defaultValue={new Date().getFullYear()}
						/>
					</div>
					<input 
						className='btn btn-primary' 
						type="submit" 
						value='Add Place'
					/>
				</form>
				<hr />
				<a href="/places"><button className='btn-primary'>Back</button></a>
			</main>
		</Default>
	)
}

module.exports = new_form