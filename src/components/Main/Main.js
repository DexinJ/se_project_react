import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";
function Main({ day, type, defaultClothing, temperature, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (temperature >= 86) {
      return "hot";
    } else if (temperature >= 66) {
      return "warm";
    } else {
      return "cold";
    }
  });
  const weather = useMemo(() => {
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
  });

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const filteredCards = defaultClothing.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <div className="main">
      <WeatherCard
        day={day}
        type={weather}
        temperature={String(temperature) + "°F"}
      />
      <section className="card-section" id="cardSection">
        <div className="card-section__caption">
          Today is {temperature}°F / You may want to wear:
        </div>
        <div className="card-section__gallery">
          {filteredCards.map((x) => {
            return <ItemCard item={x} onClick={onSelectCard} key={x._id} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Main;
