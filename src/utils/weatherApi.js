import { APIkey } from "./constants";
import { processServerResopnse } from "./utils";

const getUserLocation = () => {
  return fetch(
    "https://api.geoapify.com/v1/ipinfo?apiKey=930719c525a249a38ca8ab246765d5e5"
  )
    .then(processServerResopnse)
    .then((data) => {
      const { latitude, longitude } = data.location;
      return { latitude, longitude };
    });
};

const getForecastWeather = ({ latitude, longitude }) => {
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

export { getUserLocation, getForecastWeather, parseWeatherData };
