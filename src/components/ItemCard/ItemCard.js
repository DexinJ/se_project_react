import { useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function ItemCard({ item, onClick, onLike }) {
  const currentUser = useContext(CurrentUserContext);
  const userId = currentUser ? currentUser._id : "";
  const isLiked = item.likes.some((id) => id === userId);
  const likeButtonClass = isLiked
    ? "item__button_liked"
    : "item__button_default";

  const handleImageClick = () => {
    onClick(item);
  };

  const handleLikeClick = () => {
    onLike({ id: item._id, isLiked: isLiked });
  };
  return (
    <div className="item">
      <img
        src={item.imageUrl}
        className="item__image"
        alt={item.name}
        onClick={handleImageClick}
      />
      <div className="item__title">
        <div className="item__info">{item.name}</div>
        {userId && (
          <button
            className={`item__button ${likeButtonClass}`}
            type="button"
            onClick={handleLikeClick}
          />
        )}
      </div>
    </div>
  );
}

export default ItemCard;
