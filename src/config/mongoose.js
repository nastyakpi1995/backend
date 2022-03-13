const mongoose = require('mongoose');
const config = require('./config')
const logger = require('./logger')
const {error} = require("winston");

mongoose.connection.on('error', error => {
    console.log(`MongoDb connection error ${error}`);
    process.exit(1);
});

const connect = async () => {
    return mongoose
        .connect(config.mongodbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
};

module.exports = {
    connect,
}
