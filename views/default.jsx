const React = require('react')

function def(html) {
	return (
		<html>
			<head>
				<title>Default</title>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
				<link rel="stylesheet" href="css/style.css" />
			</head>
			<body>
				<header>
					<a href="/"><h1>REST-Rant</h1></a>
					<nav>
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/places">Places</a></li>
							<li><a href="/places/new">Add Place</a></li>
						</ul>
					</nav>
				</header>
				{html.children}
			</body>
		</html>
	)
}

module.exports = def