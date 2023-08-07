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
          <img src="/images/Logo.svg" alt="logo" />
        </div>
        <p className="header__text">
          {currentDate}, {location}
        </p>
      </div>
      <div className="header__avatar-logo">
        <div className="header__name">
          <div>
            <button className="header__button" type="text" onClick={onClick}>
              + Add clothes
            </button>
          </div>
          <p>Terrence Tegegne</p>
        </div>
        <div>
          <img src="/images/Avatar.svg" alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
