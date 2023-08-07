import "./WeatherCard.css";
const weatherOptions = [
  { url: "/images/day/sunny.svg", day: true, type: "sunny" },
  { url: "/images/day/cloudy.svg", day: true, type: "cloudy" },
  { url: "/images/day/rainy.svg", day: true, type: "rainy" },
  { url: "/images/day/snowy.svg", day: true, type: "snowy" },
  { url: "/images/day/stormy.svg", day: true, type: "stormy" },
  { url: "/images/day/foggy.svg", day: true, type: "foggy" },
  { url: "/images/night/sunny.svg", day: false, type: "sunny" },
  { url: "/images/night/cloudy.svg", day: false, type: "cloudy" },
  { url: "/images/night/rainy.svg", day: false, type: "rainy" },
  { url: "/images/night/snowy.svg", day: false, type: "snowy" },
  { url: "/images/night/stormy.svg", day: false, type: "stormy" },
  { url: "/images/night/foggy.svg", day: false, type: "foggy" },
];

function WeatherCard({ day = true, type = "sunny", temperature = "" }) {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
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
