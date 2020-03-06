const config = require('dotenv').config();

const configData = {
  env: process.env.NODE_ENV,
  host: process.env.HOST,
  port: process.env.PORT
}

module.exports = configData;