const helloWorldWouter = require('express').Router()

// Hello World Test Route
helloWorldWouter.get('/', async (request, response) => {
    response.json({ message: 'Hello World!' })
})

module.exports = helloWorldWouter