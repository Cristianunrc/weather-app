import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '1ad38955ee8fe6a8228c8c046cf0e9f5';
  URI: string = '';
  URImage: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&lang=es&units=metric&q=`;
    this.URImage = `https://openweathermap.org/img/wn/`;
  }

  // Get data weather from API
  getWeather(cityName: string, countryCode: string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }

  // Get image of wather from API
  getIconWeather(iconId : string) {
    return `${this.URImage}${iconId}@2x.png`;
  }

}
