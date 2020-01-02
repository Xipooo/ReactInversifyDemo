import { IWeatherService } from './IWeatherService';
import { injectable } from 'inversify';
import { WeatherForecast } from '../store/WeatherForecasts';

@injectable()
export class CachedWeatherService implements IWeatherService {
    isLoading: boolean = false;
    startDateIndex: number = 0;
    forecasts: WeatherForecast[] = new Array<WeatherForecast>();
    getWeather(startDateIndex: number): Promise<Response> {
        this.isLoading = true;
        this.startDateIndex = startDateIndex;
        let expiration = 10;
        let cachedData: any = localStorage.getItem('weatherService');
        let cachedTime: string | null = localStorage.getItem('weatherServiceCachedAt') ;
        if (cachedData !== null && cachedTime !== null) {
            let age = (Date.now() - parseInt(cachedTime)) / 1000;
            if (age < expiration) {
                return Promise.resolve(new Response(new Blob([cachedData])));
            } else {
                localStorage.removeItem('weatherService');
                localStorage.removeItem('weatherServiceCachedAt');
            }
        }
        return fetch(`weatherforecast`).then(resp => {
            resp.clone().text().then(
                content => {
                    localStorage.setItem('weatherService', content);
                    localStorage.setItem('weatherServiceCachedAt', Date.now().toString());
                    
                }
            );
            resp.clone().json().then(
                content => {
                    this.forecasts = content as WeatherForecast[];
                }
            ).then(() => this.isLoading = false);
            return resp;
        });
    }

}