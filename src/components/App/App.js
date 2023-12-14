//Limits to my Json Server: Changes are faked and aren't persisted
import "./App.css";
import "../../vendor/fonts.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { defaultClothingItems } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import {
  addItem,
  addLike,
  deleteItem,
  editProfile,
  getItems,
  removeLike,
} from "../../utils/api";
import RegisterModal from "../RegisterModal/RegisterModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { signin, signup, authorizeToken } from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState({});
  const [weather, setWeather] = useState(0);
  const [day, setDay] = useState(true);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState("");

  const handleActiveModal = (ident) => {
    setActiveModal(ident);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    console.log(selectedCard);
    handleActiveModal("preview");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "C" ? "F" : "C");
  };

  const handleAddFormSubmit = (item) => {
    addItem(item)
      .then((data) => {
        setClothingItems([...clothingItems, data]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteConfirm = () => {
    console.log(selectedCard);
    handleActiveModal("confirm");
  };

  const handleCardDelete = () => {
    console.log(clothingItems);
    deleteItem(selectedCard._id)
      .then(() => {
        setClothingItems((clothingItems) =>
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSignIn = ({ email, password }) => {
    signin({ email, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("jwt", res.token);
        setToken(localStorage.getItem("jwt"));
        setCurrentUser(res);
        setIsLoggedIn(true);
      })
      .then(() => handleCloseModal())
      .catch((err) => console.error(err));
  };

  const handleRegister = ({ email, password, name, avatar }) => {
    signup({ email, password, name, avatar })
      .then((res) => {
        setCurrentUser(res);
        handleSignIn({ email, password });
        setIsLoggedIn(true);
      })
      .then(() => handleCloseModal())
      .catch((err) => console.error(err));
  };

  const handleLogOut = () => {
    setToken(localStorage.removeItem("jwt"));
    setCurrentUser({});
    setIsLoggedIn(false);
  };

  const handleEditProfile = ({ name, avatar }) => {
    editProfile({ name, avatar })
      .then((res) => {
        console.log(res);
        setCurrentUser(res);
      })
      .then(() => handleCloseModal())
      .catch((err) => console.error(err));
  };

  const handleCardLike = ({ id, isLiked }) => {
    isLiked
      ? removeLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : addLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
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
        console.log(data);
        setClothingItems(Object.values(data)[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setToken(jwt);
      authorizeToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => console.error("Invalid token: ", err));
    }
  }, [token]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onClick={() => {
              handleActiveModal("create");
            }}
            location={location}
            isLoggedIn={isLoggedIn}
            openLogin={() => {
              handleActiveModal("login");
            }}
            openRegister={() => {
              handleActiveModal("register");
            }}
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
                onLikeCard={handleCardLike}
              />
            </Route>
            <ProtectedRoute isLoggedIn={isLoggedIn} path="/profile">
              <Profile
                onClick={() => {
                  handleActiveModal("create");
                }}
                defaultClothing={clothingItems}
                onSelectCard={handleSelectedCard}
                onLogOut={handleLogOut}
                onChangeProfile={() => {
                  handleActiveModal("profile");
                }}
                onLikeCard={handleCardLike}
              />
            </ProtectedRoute>
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

          {activeModal === "login" && (
            <LoginModal
              onClose={handleCloseModal}
              onSubmit={handleSignIn}
              onRedirect={() => {
                handleActiveModal("register");
              }}
            />
          )}

          {activeModal === "register" && (
            <RegisterModal
              onClose={handleCloseModal}
              onSubmit={handleRegister}
              onRedirect={() => {
                handleActiveModal("login");
              }}
            />
          )}
          {activeModal === "profile" && (
            <EditProfileModal
              onClose={handleCloseModal}
              onSubmit={handleEditProfile}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
