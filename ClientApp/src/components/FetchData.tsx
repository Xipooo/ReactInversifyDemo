import * as React from 'react';
import Forecast from './Forecast';
import * as WeatherForecastsStore from '../store/WeatherForecasts';
import { IWeatherService } from '../services/IWeatherService';
import { TYPES } from '../services/inversify.config';
import { resolve } from 'inversify-react';
import { WeatherForecastsState } from '../store/WeatherForecasts';

export default class FetchData extends React.PureComponent<{}, WeatherForecastsState> {

  @resolve(TYPES.IWeatherService)
  private _weatherService!: IWeatherService;

  constructor(props: any) {
    super(props);
    this.state = { startDateIndex: 0, forecasts: [], isLoading: false };
  }

  public componentDidMount() {
    this.ensureDataFetched();
  }

  public componentDidUpdate() {
    this.ensureDataFetched();
  }

  private ensureDataFetched() {
    const startDateIndex = this._weatherService.startDateIndex || 0;
    this._weatherService.getWeather(startDateIndex).then(data => data.json()).then(json => this.setState({ forecasts: json }));
  }

  public render() {
    return <Forecast {...this.state} />
  }
}
