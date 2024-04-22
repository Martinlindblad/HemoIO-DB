var config = {}
require('dotenv').config();

config.endpoint = process.env.COSMOS_ENDPOINT
config.key = process.env.COSMOS_KEY

config.database = {
  id: process.env.DATABASE_ID
}

config.container = {
  id: process.env.CONTAINER_ID
}

// (Create config.Users)

module.exports = config
