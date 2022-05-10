const React = require('react')
const Default = require('./default')

function error404() {
	return (
		<Default>
			<main>
				<h1>404: Page not found</h1>
			</main>
		</Default>
	)
}

module.exports = error404