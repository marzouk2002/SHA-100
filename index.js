require('dotenv').config()
const express = require('express')
const app = express()
const sha100 = require('./sha100.js')

app.set('view engine', 'ejs')

app.use(express.json())

app.get('/',  (req, res) => {
    res.render('index')
})

app.post('/hash', (req, res) => {
    console.log(req.body)
    res.render('index')
})

app.post

const Port = process.env.PORT || 4000

app.listen(Port, () => console.log('Server running...'))