const express = require('express')

const app = new express()

app.use('/', (req, res) => {
    res.send("workisn")
})

module.exports = app;