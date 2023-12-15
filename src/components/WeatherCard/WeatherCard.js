import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import React, { useContext } from "react";
function WeatherCard({ day = true, type = "sunny", C, F }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const imageSrc = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = imageSrc.url || "";
  return (
    <div className="weather" id="weatherCard">
      <div className="weather__info">
        {currentTemperatureUnit === "C" ? C : F}
      </div>
      <div>
        <img
          src={imageSrcUrl}
          className="weather__image"
          alt={`${type} ${day ? "day" : "night"}`}
        />
      </div>
    </div>
  );
}

export default WeatherCard;
