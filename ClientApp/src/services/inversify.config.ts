import "reflect-metadata";
import { Container } from 'inversify';
import { CachedWeatherService } from './CachedWeatherService';

const TYPES = {
    IWeatherService: Symbol.for("IWeatherService")
};

let container = new Container();
container.bind(TYPES.IWeatherService).to(CachedWeatherService);

export { container, TYPES };