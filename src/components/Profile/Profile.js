import "./Profile.css";
import ItemCard from "../ItemCard/ItemCard";
function Profile({ onClick, defaultClothing, onSelectCard }) {
  return (
    <div className="profile">
      <div className="profile__user">
        <img className="profile__icon" src="/images/Avatar.svg" alt="avatar" />

        <p className="page__text profile__name">Terrence Tegegne</p>
      </div>
      <div className="profile__card-section" id="cardSection">
        <div className="profile__card-top">
          <div className="card-section__caption">Your items</div>
          <button className="profile__button" type="text" onClick={onClick}>
            + Add clothes
          </button>
        </div>
        <div className="profile__gallery">
          {defaultClothing.map((item) => {
            return (
              <ItemCard item={item} onClick={onSelectCard} key={item._id} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
