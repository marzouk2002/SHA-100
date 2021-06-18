require('dotenv').config()
const app = require('express')()

app.set('view engine', 'ejs')

app.get('/',  (req, res) => {
    res.render('index')
})

const Port = process.env.PORT || 4000

app.listen(Port, () => console.log('Server running...'))