import * as bodyParser from 'body-parser';
import * as express from 'express';
import {IRegistrableController} from './controller/controller';
import container from './inversify.config';
import TYPES from './types';
import {logger} from './utils/logger';

const app: express.Application = express();
app.use(bodyParser.json());

// register all endpoints from Ioc controllers
const controllers: RegistrableController[] = container.getAll<IRegistrableController>(TYPES.Controller);
controllers.forEach(controller => controller.register(app));

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.error(err.stack);
    next(err);
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).send('Internal Server Error');
});

app.listen(3001,() => {
    logger.info('Example app listening on port 3001!');
});
