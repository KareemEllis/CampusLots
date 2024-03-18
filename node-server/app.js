const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')

const helloWorldRouter = require('./controllers/hello-world')

const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/hello-world', helloWorldRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app