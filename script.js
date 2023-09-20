function getWeather() {
  const apiKey = "3ccd18f598a61ad8bcb55d4ab505582a"; // Replace with your OpenWeatherMap API key
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const cityName = data.name;
      const temp = data.main.temp;
      const description = data.weather[0].description;

      const resultElement = document.getElementById("result");
      resultElement.innerHTML = `Weather in ${cityName}: ${temp}°C, ${description}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      alert("Error fetching weather data. Please try again.");
    });
}
