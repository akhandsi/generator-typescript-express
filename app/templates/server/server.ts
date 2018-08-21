import { GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings } from '@tsed/common';
import '@tsed/swagger';
import * as bodyParser from 'body-parser';
import compress = require('compression');
import cookieParser = require('cookie-parser');
import cors = require('cors');
import * as express from 'express';
import methodOverride = require('method-override');
import Path = require('path');
import { logger } from './utils/logger';

@ServerSettings({
    acceptMimes: ['application/json'],
    httpPort: process.env.PORT || 3001,
    rootDir: Path.resolve(__dirname),
    swagger: [
        {
            path: '/api-docs',
        },
    ],
})
export class Server extends ServerLoader {
    public $onMountingMiddlewares(): void | Promise<any> {
        this.use(GlobalAcceptMimesMiddleware)
            .use(cors())
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(
                bodyParser.urlencoded({
                    extended: true,
                }),
            );
        return;
    }

    public $onReady(): void {
        logger.info('Server started...');
    }

    public $onServerInitError(err: any): void {
        logger.error(err);
    }
}

const server = new Server();
server.start().catch(err => logger.error(err));
