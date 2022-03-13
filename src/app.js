const express = require('express')
const mongoose = require('mongoose')

const app = new express()

mongoose.connect()
app.use('/', (req, res) => {
    res.send("workgfgf isn")
})

module.exports = app;