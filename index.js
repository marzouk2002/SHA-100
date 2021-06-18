require('dotenv').config()
const app = require('express')()

app.get('/', (req, res) => {
    res.json({msg:'hello'})
})

const Port = process.env.PORT || 4000

app.listen(Port, () => console.log('Server running...'))