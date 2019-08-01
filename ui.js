// prettier-ignore
class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    // this.windSpeed = document.getElementById('w-wind-speed');
    // this.windDirection = document.getElementById('w-wind-direction');
    this.wind = document.getElementById('w-wind');
    this.icon = document.getElementById('w-icon');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}`; 
    this.desc.textContent = `${weather.weather[0].description}`;
    this.string.textContent = `${weather.main.temp} \u00B0F`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hpa`;
    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;
  }
}
