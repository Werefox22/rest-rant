const React = require('react')
const Default = require('./default')

function error404() {
	return (
		<Default>
			<main>
				<h1>404: Page not found</h1>
				<p>Whoops, sorry! We couldn't find that page!</p>
				<div>
					<img src="images/cat.jpg" alt="A cat hiding under a blanket" />
					<div className='credit'>
						Photo by <a href="https://unsplash.com/@miklevasilyev?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mikhail Vasilyev</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
					</div>
				</div>
			</main>
		</Default>
	)
}

module.exports = error404