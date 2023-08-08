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
          <image src="/images/Close.svg" alt="close modal" />
        </button>
        <h3 className="modal__text modal__heading">{title}</h3>
        <form className="modal__form">{children}</form>
        <button
          className="modal__button modal__text"
          type="submit"
          onSubmit={onSubmit}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
export default ModalWithForm;
