import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
function ItemModal({ content, onClose, onDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = content.owner === currentUser._id;
  const deleteButtonClass = isOwn
    ? "modal__picture-text modal__confirm-button modal__orange"
    : "modal__button_hidden";
  return (
    <div className={`modal`}>
      <div className="modal__image-container">
        <button
          type="button"
          onClick={onClose}
          className="modal__close modal__white"
        >
          <img src="/images/Close.svg" alt="close modal button" />
        </button>
        <img
          src={content.imageUrl}
          alt={content.name}
          className="modal__image"
        />
        <div className=" modal__picture-title">
          <div className="modal__picture-text">{content.name}</div>
          <button type="click" className={deleteButtonClass} onClick={onDelete}>
            Delete Item
          </button>
        </div>
        <div className="modal__picture-text modal__picture-small-text ">
          Weather: {content.weather}
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
