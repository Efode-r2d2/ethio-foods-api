const express = require('express')
const res = require('express/lib/response')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use('/api/resturants', require('./routes/resturantRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))