import { latitude, longitude, APIkey } from "./constants";
import { processServerResopnse } from "./utils";
const getForecastWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResopnse);
};

const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && {
    F: Math.round(main.temp),
    C: Math.round(((main.temp - 32) * 5) / 9),
  };
  const location = data.name;
  const weather = data.weather[0].id;
  const currentTime = Date.now() / 1000;
  const day = data.sys.sunrise <= currentTime && currentTime <= data.sys.sunset;
  return { day: day, temp: temperature, location: location, weather: weather };
};

export { getForecastWeather, parseWeatherData };
