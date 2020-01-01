export interface IWeatherService {
    getWeather(): Promise<Response>;
}