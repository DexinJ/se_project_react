import React, { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function ClothesSection({ clothing, onClick, onSelectCard, onLikeCard }) {
  const currentUser = useContext(CurrentUserContext);
  const userCards = clothing.filter((item) => {
    return item.owner === currentUser._id;
  });
  return (
    <div className="profile__card-section" id="cardSection">
      <div className="profile__card-top">
        <div className="card-section__caption">Your items</div>
        <button className="profile__button" type="text" onClick={onClick}>
          + Add clothes
        </button>
      </div>
      <div className="profile__gallery">
        {userCards.map((item) => {
          return (
            <ItemCard
              item={item}
              onClick={onSelectCard}
              key={item._id}
              onLike={onLikeCard}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ClothesSection;
