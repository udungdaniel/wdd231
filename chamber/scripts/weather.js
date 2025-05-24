

const apiKey = 'ab941a565a8b46c9303661c43ee5708b';
const lat = 9.05785;  // My location's latitude
const lon = 7.49508;  // My location's longitude
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();
    document.getElementById("temp").textContent = `${Math.round(data.main.temp)} °F`;
    document.getElementById("desc").textContent = data.weather[0].description;
  } catch (error) {
    console.error("Weather fetch failed:", error);
  }
}

async function getForecast() {
  try {
    const response = await fetch(forecastURL);
    const data = await response.json();
    const forecastList = document.getElementById("forecast-list");
    forecastList.innerHTML = "";

    const daily = {};
    data.list.forEach(item => {
      const date = new Date(item.dt_txt).toLocaleDateString();
      if (!daily[date]) {
        daily[date] = item;
      }
    });

    Object.keys(daily).slice(0, 3).forEach(date => {
      const temp = Math.round(daily[date].main.temp);
      const desc = daily[date].weather[0].description;
      const li = document.createElement("li");
      li.textContent = `${date}: ${temp} °F - ${desc}`;
      forecastList.appendChild(li);
    });
  } catch (error) {
    console.error("Forecast fetch failed:", error);
  }
}

getWeather();
getForecast();
