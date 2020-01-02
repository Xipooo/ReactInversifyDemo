import { WeatherForecast } from '../store/WeatherForecasts';
export interface IWeatherService {
    forecasts: WeatherForecast[];
    getWeather(startDateIndex: number): Promise<Response>;
    isLoading: boolean;
    startDateIndex: number;
}