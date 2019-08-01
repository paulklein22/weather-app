class Weather {
  constructor(city, countryCode) {
    this.apiKey = '771c00e37fc35b6e02700e51fe9f139a';
    this.city = city;
    this.countryCode = countryCode;
  }

  // prettier-ignore
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=${this.apiKey}`);
    const responseData = await response.json();
    return responseData;
  }

  // Change location
  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
