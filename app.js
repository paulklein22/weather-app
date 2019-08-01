// Init Weather object
const weather = new Weather('Chicago', 'US');

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', '40');

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);

      console.log(results);
      console.log(results.main.humidity);
      console.log(results.weather[0].icon);
    })
    .catch(err => console.log(err));
}
