const app = require('./app')
const logger = require('./utils/logger')
const PORT = 3001

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})