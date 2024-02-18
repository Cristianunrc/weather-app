import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  
  // atributes of AppComponent
  weather: any;
  iconId: any;
  imageWeather: any;

  constructor(private weatherService: WeatherService, private toast: ToastService) { }

  ngOnInit(): void { }

  // This method call method's services
  getDateWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode)
      .subscribe(
        res => {
          this.weather = res; // object to the api
          this.iconId = this.weather.weather[0].icon; // icon string
          this.imageWeather = this.weatherService.getIconWeather(this.iconId);
          this.toast.showSuccess('Información meteorológica', `${this.weather.name}`);
        },
        (err: HttpErrorResponse) => {
          if (err.status === 404) {
            this.toast.showWarning('Ciudad no encontrada');
          } else {
            this.toast.showError('Algo salió mal, intente nuevamente más tarde');
          }
        }
      )
  }

  // This method is invoked when get wather button is clicked
  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {    
    // validations
    if (!cityName.value || !countryCode.value) {
      console.log('Nombre de ciudad o país son requeridos');
      return false;
    }

    this.getDateWeather(cityName.value, countryCode.value);
    cityName.value = '';
    countryCode.value = '';
    cityName.focus();
    return false;
  }

}
