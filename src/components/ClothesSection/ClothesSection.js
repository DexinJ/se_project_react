import React from "react";
import ItemCard from "../ItemCard/ItemCard";
function ClothSection({ clothing, onClick, onSelectCard }) {
  return (
    <div className="profile__card-section" id="cardSection">
      <div className="profile__card-top">
        <div className="card-section__caption">Your items</div>
        <button className="profile__button" type="text" onClick={onClick}>
          + Add clothes
        </button>
      </div>
      <div className="profile__gallery">
        {clothing.map((item) => {
          return <ItemCard item={item} onClick={onSelectCard} key={item._id} />;
        })}
      </div>
    </div>
  );
}

export default ClothSection;
