require('dotenv').config()
const express = require('express')
const app = express()

// view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// controller
app.use('/places', require('./controllers/places'))

// routes
// home
app.get('/', (req, res) => {
    res.render('home')
})

// 404 page
app.get('*', (req, res) => {
	res.render('error404')
})

// listen
app.listen(process.env.PORT)