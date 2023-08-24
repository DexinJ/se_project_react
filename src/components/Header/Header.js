import { Link } from "react-router-dom/cjs/react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
function Header({ onClick, location }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <div className="header">
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
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button className="header__button" type="text" onClick={onClick}>
            + Add clothes
          </button>
        </div>
        <Link to="/profile" className="header__name">
          <p className="page__text">Terrence Tegegne</p>
          <div>
            <img src="/images/Avatar.svg" alt="avatar" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
