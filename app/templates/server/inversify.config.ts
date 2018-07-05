import {Container} from 'inversify';
import "reflect-metadata";
import TYPES from './types';
import {IRegistrableController} from './controller/controller';
import {HomeController} from "./controller/homeController";

const container = new Container();
container.bind<IRegistrableController>(TYPES.Controller).to(HomeController);

export default container;
