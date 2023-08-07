import "./App.css";
import "./vendor/fonts.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ModalWithForm from "./components/ModalWithForm/ModalWithForm";
import ItemModal from "./components/ItemModal/ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "./utils/weatherApi";
import { defaultClothingItems } from "./utils/constants";

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
    getForecastWeather()
      .then((data) => {
        const parse = parseWeatherData(data);
        setTemp(parse.temp);
        setWeather(parse.weather);
        setDay(parse.day);
        setLocation(parse.location);
      })
      .catch((err) => {
        console.error(err);
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
        <ModalWithForm
          title="New Garment"
          onClose={handleCloseModal}
          buttonText="Add garment"
        >
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
          <div className="modal__text">Select the weather type:</div>
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
