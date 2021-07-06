require('dotenv').config()
const express = require('express')
const app = express()

const mainRoute = require('./router/index')
app.use(mainRoute)

// listening on port 8000
app.listen(process.env.PORT)