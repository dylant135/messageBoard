const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const indexRoute = require('./routes/indexRoute')
const newRoute = require('./routes/newRoute')

app.use('/', indexRoute)
app.use('/new', newRoute)

app.listen(3000, () => {
    console.log('listening on port 3000')
})