const React = require('react')
const Default = require('./default')

function home() {
	return (
		<Default>
			<main>
				<h1>Home Page</h1>
				<div>
					<img src="/images/coffee.jpg" alt="Coffee on a table" />
					<div className='credit'>
						Photo by <a href='https://unsplash.com/@nixcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Tyler Nix</a> on <a href='https://unsplash.com/s/photos/coffee-cup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
					</div>
				</div>
				<a href="/places">
					<button className='btn-primary'>Places Page</button>
				</a>
			</main>
		</Default>
	)
}

module.exports = home
// Photo by Tyler Nix on Unsplash
// tyler: https://unsplash.com/@nixcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
// unsplash: https://unsplash.com/s/photos/coffee-cup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText