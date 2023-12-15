import React from "react";
import "./SideBar.css";
function SideBar({ name, src, onChangeProfile, onLogOut }) {
  return (
    <div className="sidebar">
      <div className="profile__user">
        <img className="profile__icon" src={src} alt={`avatar of ${name}`} />

        <p className="page__text profile__name">{name}</p>
      </div>
      <button className="header__button" type="text" onClick={onChangeProfile}>
        Change profile data
      </button>
      <button className="header__button" type="text" onClick={onLogOut}>
        Log out
      </button>
    </div>
  );
}

export default SideBar;
