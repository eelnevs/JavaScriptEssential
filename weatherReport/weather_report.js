const apiKey = '42c78e6c4f8686b706513372eadf07cb';

function getWeatherByCity(event) {
  event.preventDefault();   
  const city = document.getElementById('city').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  showweatherDetails(apiUrl);
}

function getWeatherByCoord(event) {
  event.preventDefault();   
  const lat = document.getElementById('lat').value;
  const lon = document.getElementById('lon').value;
  const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  showweatherDetails(apiUrl);
}

function showweatherDetails(apiUrl) {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8457;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
    
}

document.getElementById('weatherFormByCity').addEventListener('submit', getWeatherByCity);
document.getElementById('weatherFormByCoord').addEventListener('submit', getWeatherByCoord);