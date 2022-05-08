const React = require('react')

function def(html) {
	return (
		<html>
			<head>
				<title>Default</title>
			</head>
			<body>
				{html.children}
			</body>
		</html>
	)
}

module.exports = def