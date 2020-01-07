import "reflect-metadata";
import { Container } from 'inversify';
import { CachedWeatherService } from './CachedWeatherService';
import { CounterService } from "./CounterService";

const TYPES = {
    IWeatherService: Symbol.for("IWeatherService")
};

let container = new Container();
container.bind(TYPES.IWeatherService).to(CachedWeatherService);
container.bind(CounterService).toSelf().inSingletonScope();
export { container, TYPES };
