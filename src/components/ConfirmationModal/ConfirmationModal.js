import React from "react";
import "./ConfirmationModal.css";

function ConfirmationModal({ onClose, onConfirm, isLoading }) {
  const handleDelete = () => {
    onConfirm();
  };
  return (
    <div className={`modal`}>
      <div className="modal__confirm-container">
        <button type="button" onClick={onClose} className="modal__close">
          <img src="/images/Close.svg" alt="close modal button" />
        </button>
        <span className="modal__picture-text">
          Are you sure you want to delete this item?
        </span>
        <span className="modal__picture-text">
          This action is irreversible.
        </span>

        <button
          type="click"
          onClick={handleDelete}
          className="modal__picture-text modal__confirm-button modal__orange modal__confirm-gap-40"
        >
          {isLoading ? "Deleting ..." : "Yes, delete item"}
        </button>
        <button
          type="click"
          onClick={onClose}
          className="modal__picture-text modal__confirm-gap-24 modal__confirm-button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
