import "reflect-metadata";
import { Container } from 'inversify';
import { CachedWeatherService } from './CachedWeatherService';
import getDecorators from "inversify-inject-decorators";

const TYPES = {
    IWeatherService: Symbol.for("IWeatherService")
};

let container = new Container();
container.bind(TYPES.IWeatherService).to(CachedWeatherService);
let { lazyInject } = getDecorators(container);

export { container, TYPES, lazyInject };