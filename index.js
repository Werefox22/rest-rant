require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// controller
app.use('/places', require('./controllers/places_controller'))

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