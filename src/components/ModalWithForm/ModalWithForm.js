import "./ModalWithForm.css";
function ModalWithForm({
  title,
  children,
  buttonText,
  onClose,
  name,
  onSubmit,
  secondButton,
  secondButtonText,
  secondButtonLink,
}) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <button type="button" onClick={onClose} className="modal__close">
          <img src="/images/Close.svg" alt="close modal button" />
        </button>
        <h3 className="modal__text modal__heading">{title}</h3>
        <form onSubmit={handleFormSubmit} className="modal__form">
          {children}
          <div className="modal__button-div">
            <button className="modal__button modal__text" type="submit">
              {buttonText}
            </button>
            {secondButton && (
              <button
                className="modal__second-button"
                onClick={secondButtonLink}
                type="button"
              >
                {secondButtonText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
