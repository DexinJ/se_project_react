import "./ModalWithForm.css";
function ModalWithForm({
  title,
  children,
  buttonText,
  onClose,
  name,
  onSubmit,
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <button type="button" onClick={onClose} className="modal__close">
          <img src="/images/Close.svg" alt="close modal" />
        </button>
        <h3 className="modal__text modal__heading">{title}</h3>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button className="modal__button modal__text" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
