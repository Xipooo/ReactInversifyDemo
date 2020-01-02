import "reflect-metadata";
import getDecorators from 'inversify-inject-decorators';
import { Container } from 'inversify';
import { IWeatherService } from './IWeatherService';
import { CachedWeatherService } from './CachedWeatherService';

const TYPES = {
    IWeatherService: Symbol.for("IWeatherService")
};

let container = new Container();
container.bind(TYPES.IWeatherService).to(CachedWeatherService);
let { lazyInject } = getDecorators(container);

export { lazyInject, container, TYPES };