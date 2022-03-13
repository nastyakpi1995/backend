const express = require('express')
const mongoose = require('./config/mongoose')
const logger = require('./config/logger')

const app = express()


app.use('/', (req, res) => {
    res.send("workgfgf isn")
})

mongoose.connect().then(() => {
    logger.info('Connected to MongoDB')
    app.emit('ready');
})


module.exports = app;