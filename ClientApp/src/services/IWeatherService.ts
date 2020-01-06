import { WeatherForecastsState } from '../store/WeatherForecasts';

export interface IWeatherService extends WeatherForecastsState {
    getWeather(startDateIndex: number): Promise<Response>;
}