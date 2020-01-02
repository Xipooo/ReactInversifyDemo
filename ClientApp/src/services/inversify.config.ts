import "reflect-metadata";
import getDecorators from 'inversify-inject-decorators';
import { Container } from 'inversify';
import { IWeatherService } from './IWeatherService';
import { CachedWeatherService } from './CachedWeatherService';

let container = new Container();
container.bind<IWeatherService>("IWeatherService").to(CachedWeatherService);
let { lazyInject } = getDecorators(container);

export { lazyInject, container };