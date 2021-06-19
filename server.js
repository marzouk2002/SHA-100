require('dotenv').config()
const express = require('express')
const app = express()
const sha100 = require('./dist')

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',  (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.render('index')
})

const Port = process.env.PORT || 4000

app.listen(Port, () => console.log('Server running...'))