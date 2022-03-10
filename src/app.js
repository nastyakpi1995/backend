const express = require('express')

const app = new express()

app.use('/', (req, res) => {
    res.send("workgfgf isn")
})

module.exports = app;