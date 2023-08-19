const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const indexRoute = require('./routes/indexRoute')

app.use('/', indexRoute)

app.listen(3000, () => {
    console.log('listening on port 3000')
})