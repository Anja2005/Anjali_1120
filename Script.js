async function getWeather() {
    const city = document.getElementById('city').value;
    const errorMessage = document.getElementById('error-message');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    // Clear previous data
    errorMessage.textContent = '';
    cityName.textContent = '';
    temperature.textContent = '';
    description.textContent = '';

    if (city === '') {
        errorMessage.textContent = 'Please enter a city name.';
        return;
    }

    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === '404') {
            errorMessage.textContent = 'City not found. Please try again.';
            return;
        }

        // Display weather information
        cityName.textContent = data.name + ', ' + data.sys.country;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Weather: ${data.weather[0].description}`;

    } catch (error) {
        errorMessage.textContent = 'An error occurred while fetching data.';
    }
}
