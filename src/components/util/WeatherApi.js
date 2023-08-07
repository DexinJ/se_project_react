//791e0eb33eb84e901df9e55dfa0aa052
//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

import { useMemo } from "react";

const latitude = 34.05;
const longitude = -118.24;
const APIkey = "791e0eb33eb84e901df9e55dfa0aa052";
const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && Math.ceil(main.temp);
  const location = data.name;
  const weather = data.weather[0].id;
  const currentTime = Date.now() / 1000;
  const day = data.sys.sunrise <= currentTime && currentTime <= data.sys.sunset;
  return { day: day, temp: temperature, location: location, weather: weather };
};

export { getForecastWeather, parseWeatherData };
