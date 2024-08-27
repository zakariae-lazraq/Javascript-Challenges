const apiKey = "56d93e07f58a92b5eb5bd32507440983";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error ").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json(); //extract JSON from the http response

    // update  HTML elements with fresh data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds") {
      document.querySelector(".weather-icon").src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      document.querySelector(".weather-icon").src = "./images/clear.png";
    } else if (data.weather[0].main == "Snow") {
      document.querySelector(".weather-icon").src = "./images/snow.png";
    } else if (data.weather[0].main == "Snow") {
      document.querySelector(".weather-icon").src = "./images/snow.png";
    } else if (data.weather[0].main == "rain") {
      document.querySelector(".weather-icon").src = "./images/rain.png";
    } else if (data.weather[0].main == "mist") {
      document.querySelector(".weather-icon").src = "./images/mist.png";
    } else if (data.weather[0].main == "drizzle") {
      document.querySelector(".weather-icon").src = "./images/drizzle.png";
    } else if (data.weather[0].main == "humidity") {
      document.querySelector(".weather-icon").src = "./images/humidity.png";
    } else if (data.weather[0].main == "wind") {
      document.querySelector(".weather-icon").src = "./images/wind.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
