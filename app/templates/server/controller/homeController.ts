import * as express from 'express';
import {injectable} from 'inversify';

@injectable()
export class HomeController implements RegistrableController {

    public register(app: express.Application): void {
        // register the routes
        app.route('/')
            .get(async(req: express.Request, res: express.Response, next: express.NextFunction) => {
                res.send('Nothing yet...');
            });
    }
}
