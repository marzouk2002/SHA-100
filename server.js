require('dotenv').config()
const express = require('express')
const app = express()
const sha100 = require('./dist').default

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static('public'))

app.get('/',  (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const { input } = req.body
    const hash = input ? sha100(input) : undefined;
    res.render('index', { hash })
})

const Port = process.env.PORT || 4000

app.listen(Port, () => console.log('Server running...'))