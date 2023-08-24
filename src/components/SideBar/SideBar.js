import React from "react";
function SideBar({ name, src }) {
  return (
    <div className="profile__user">
      <img className="profile__icon" src={src} alt="avatar" />

      <p className="page__text profile__name">{name}</p>
    </div>
  );
}

export default SideBar;
