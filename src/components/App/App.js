import "./App.css";
import "../../vendor/fonts.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../utils/WeatherApi";
const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState(0);
  const [day, setDay] = useState(true);
  const [location, setLocation] = useState("");
  const handleActiveModal = (ident) => {
    setActiveModal(ident);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    handleActiveModal("preview");
  };

  useEffect(() => {
    getForecastWeather().then((data) => {
      const parse = parseWeatherData(data);
      setTemp(parse.temp);
      setWeather(parse.weather);
      setDay(parse.day);
      setLocation(parse.location);
    });
  }, []);

  return (
    <div className="page">
      <Header
        onClick={() => {
          handleActiveModal("create");
        }}
        location={location}
      />
      <Main
        day={day}
        type={weather}
        defaultClothing={defaultClothingItems}
        temperature={temp}
        onSelectCard={handleSelectedCard}
      />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <label className="modal__field modal__text">
            Name
            <input
              type="text"
              name="name"
              minLength="1"
              maxLength="30"
              className="modal__input modal__text"
              placeholder="Name"
            />
          </label>
          <label className="modal__field modal__text">
            Image
            <input
              type="url"
              name="link"
              minLength="1"
              maxLength="30"
              className="modal__input modal__text"
              placeholder="Image URL"
            />
          </label>
          <p className="modal__text">Select the weather type:</p>
          <div>
            <div className="modal__choice modal__text">
              <input
                type="radio"
                id="hot"
                value="hot"
                name="weather"
                className="modal__point"
              />
              <label className="modal__select">Hot</label>
            </div>
            <div className="modal__choice modal__text">
              <input
                type="radio"
                id="warm"
                value="warm"
                name="weather"
                className="modal__point"
              />
              <label className="modal__select">Warm</label>
            </div>
            <div className="modal__choice modal__text">
              <input
                type="radio"
                id="cold"
                value="cold"
                name="weather"
                className="modal__point"
              />
              <label className="modal__select">Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal content={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
