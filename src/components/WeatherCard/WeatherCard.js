import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ day = true, type = "sunny", temperature = "" }) {
  const imageSrc = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = imageSrc.url || "";
  return (
    <div className="weather" id="weatherCard">
      <div className="weather__info">{temperature}</div>
      <div>
        <img src={imageSrcUrl} className="weather__image" />
      </div>
    </div>
  );
}

export default WeatherCard;
