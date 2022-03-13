const app = require('./app')
const logger = require('./config/logger')
const config = require('./config/config')

let server;

app.on('ready', () => {
    server = app.listen(config.port, () => {
        logger.info(`Listening to port ${config.port}`)
    })
})

const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info('Server Closed')
            process.exit(1)
        })

    } else {
        process.exit(1)
    }
}

const unexpextedErrorHandler = error => {
    logger.error(`Unexpexted error ${error}`)
    exitHandler()
}

process.on('unhandledRejection', unexpextedErrorHandler)
process.on('uncaughtException', unexpextedErrorHandler)
