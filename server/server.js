const express = require('express')
const path = require('path')

const floraRoutes = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/flora', floraRoutes)

module.exports = server
