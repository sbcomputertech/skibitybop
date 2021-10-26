var winston = require('winston');
var settings = require('./conf/settings.json')
var cci = require('./tests/consoleCommandInput.js')

cci.init(settings);

const logConfiguration = {
    'transports': [
        new winston.transports.File({
          filename: 'logs/main.skiblog'
        })
    ]
};
const logger = winston.createLogger(logConfiguration);

const appName = settings.name;
const prefix = settings.cmdPrefix;
const commands = JSON.stringify(settings.commands);

name = cci.takeInput("What is your name?", settings);
logger.info(name);
