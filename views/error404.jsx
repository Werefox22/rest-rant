const React = require('react')
const Def = require('./default')

function error404() {
	return (
		<Def>
			<main>
				<h1>404: Page not found</h1>
			</main>
		</Def>
	)
}

module.exports = error404