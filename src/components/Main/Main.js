import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import React, { useContext } from "react";
function Main({ day, type, defaultClothing, C, F, onSelectCard, onLikeCard }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const getWeatherType = () => {
    if (F >= 86) {
      return "hot";
    } else if (F >= 66) {
      return "warm";
    } else {
      return "cold";
    }
  };
  const getWeather = () => {
    if (type < 300) {
      return "stormy";
    } else if (type < 600) {
      return "cloudy";
    } else if (type < 700) {
      return "snowy";
    } else if (type < 800) {
      return "foggy";
    } else if (type === 800) {
      return "sunny";
    } else {
      return "cloudy";
    }
  };
  const weatherType = getWeatherType();
  const weather = getWeather();
  const filteredCards = defaultClothing.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <div className="main">
      <WeatherCard day={day} type={weather} C={`${C}°C`} F={`${F}°F`} />
      <section className="card-section" id="cardSection">
        <div className="card-section__caption">
          Today is {currentTemperatureUnit === "C" ? `${C}°C` : `${F}°F`} / You
          may want to wear:
        </div>
        <div className="card-section__gallery">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                item={item}
                onClick={onSelectCard}
                key={item._id}
                onLike={onLikeCard}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Main;
