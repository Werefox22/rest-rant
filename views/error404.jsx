const React = require('react')
const Default = require('./default')

function error404() {
	return (
		<Default>
			<main>
				<h2>404: Page not found</h2>
				<p>Whoops, sorry! We couldn't find that page!</p>
				<div>
					<img src="images/blanketcat.jpg" alt="A cat hiding under a blanket" />
					<div className='credit'>
						Photo by <a href="https://unsplash.com/@miklevasilyev?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mikhail Vasilyev</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
					</div>
				</div>
				<hr />
				<a href="/"><button className='btn-primary'>Home</button></a>
			</main>
		</Default>
	)
}

module.exports = error404