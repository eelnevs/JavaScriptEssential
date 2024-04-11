function showweatherDetails(event) {
    event.preventDefault();
    
    const city = document.getElementById('city').value;
    const apiKey = '42c78e6c4f8686b706513372eadf07cb'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8457;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
    
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );