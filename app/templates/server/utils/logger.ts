import {Logger, LoggerInstance, LoggerOptions, transports} from 'winston';

export const logger: LoggerInstance = new Logger({
    exitOnError: false,
    transports: [
        new transports.Console()
    ]
} as LoggerOptions);
