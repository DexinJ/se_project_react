import "./ItemModal.css";
function ItemModal({ content, onClose }) {
  return (
    <div className={`modal`}>
      <div className="modal__image-container">
        <button
          type="button"
          onClick={onClose}
          className="modal__close modal__white"
        >
          <img src="/images/Close.svg" alt="close modal" />
        </button>
        <img src={content.link} alt={content.name} className="modal__image" />
        <div className=" modal__picture-title modal__picture-text">
          {content.name}
        </div>
        <div className="modal__picture-text modal__picture-small-text ">
          Weather: {content.weather}
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
