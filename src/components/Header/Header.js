import { Link } from "react-router-dom/cjs/react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function Header({ onClick, location, isLoggedIn, openLogin, openRegister }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const currentUser = useContext(CurrentUserContext);
  const avatar = currentUser ? currentUser.avatar : "";
  const name = currentUser ? currentUser.name : null;

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src="/images/Logo.svg" alt="logo" />
          </Link>
        </div>
        <p className="page__text">
          {currentDate}, {location}
        </p>
      </div>
      {isLoggedIn ? (
        <div className="header__avatar-logo">
          <ToggleSwitch />

          <div>
            <button className="header__button" type="text" onClick={onClick}>
              + Add clothes
            </button>
          </div>
          <Link to="/profile" className="header__name">
            <p className="page__text">{name}</p>
            <div className="header__avatar-container">
              {avatar ? (
                <img
                  src={avatar}
                  alt={`avatar of ${name}`}
                  className="header__avatar-image"
                />
              ) : (
                <p className="header__avatar-letter">
                  {name[0]?.toUpperCase()}
                </p>
              )}
            </div>
          </Link>
        </div>
      ) : (
        <div className="header__avatar-logo">
          <ToggleSwitch />
          <div>
            <button
              className="header__button"
              type="text"
              onClick={openRegister}
            >
              Sign Up
            </button>
          </div>
          <div>
            <button className="header__button" type="text" onClick={openLogin}>
              Log In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
