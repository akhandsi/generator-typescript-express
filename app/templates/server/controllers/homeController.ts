import { Controller, Get } from '@tsed/common';
import * as express from 'express';

@Controller('/home')
export class HomeController {

    @Get('/')
    public async get(
        req: express.Request,
        res: express.Response,
    ): Promise<any> {
        res.send('Nothing yet...');
    }
}
