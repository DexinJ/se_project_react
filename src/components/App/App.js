//Limits to my Json Server: Changes are faked and aren't persisted
import "./App.css";
import "../../vendor/fonts.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { defaultClothingItems } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { addItem, deleteItem, getItems } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState({});
  const [weather, setWeather] = useState(0);
  const [day, setDay] = useState(true);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

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

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "C" ? "F" : "C");
  };

  const handleAddFormSubmit = (item) => {
    addItem(item)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteConfirm = () => {
    handleActiveModal("confirm");
  };

  const handleCardDelete = () => {
    deleteItem(selectedCard.id)
      .then(() => {
        // getItems()
        //   .then((data) => {
        //     setClothingItems(data);
        //   })
        //   .catch((err) => {
        //     console.error(err);
        //   });
        setClothingItems((clothingItems) =>
          clothingItems.filter((item) => item.id !== selectedCard.id)
        );
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
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

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onClick={() => {
            handleActiveModal("create");
          }}
          location={location}
        />
        <Switch>
          <Route exact path="/">
            <Main
              day={day}
              type={weather}
              defaultClothing={clothingItems}
              C={temp.C}
              F={temp.F}
              onSelectCard={handleSelectedCard}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onClick={() => {
                handleActiveModal("create");
              }}
              defaultClothing={clothingItems}
              onSelectCard={handleSelectedCard}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            onClose={handleCloseModal}
            onAdd={handleAddFormSubmit}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            content={selectedCard}
            onClose={handleCloseModal}
            onDelete={handleDeleteConfirm}
          />
        )}
        {activeModal === "confirm" && (
          <ConfirmationModal
            onClose={handleCloseModal}
            onConfirm={handleCardDelete}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
