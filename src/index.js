const app = require('./app')

// const port = 3000;
const { port } = require('./config/config')

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})