import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function AddItemModal({ onClose, onAdd, isLoading }) {
  const { values, handleChange } = useForm({});
  function handleSubmit() {
    onAdd({ name: values.name, url: values.link, weather: values.weather });
  }

  return (
    <ModalWithForm
      title="New Garment"
      onClose={onClose}
      buttonText="Add garment"
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <label className="modal__field modal__text">
        Name
        <input
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          className="modal__input modal__text"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label className="modal__field modal__text">
        Image
        <input
          type="url"
          name="link"
          minLength="1"
          maxLength="100"
          className="modal__input modal__text"
          placeholder="Image URL"
          required
          value={values.link}
          onChange={handleChange}
        />
      </label>
      <div className="modal__text">Select the weather type:</div>
      <div>
        <div className="modal__choice modal__text">
          <input
            type="radio"
            id="hot"
            value="hot"
            name="weather"
            className="modal__point"
            required
            onClick={handleChange}
          />
          <label className="modal__select" htmlFor="hot">
            Hot
          </label>
        </div>
        <div className="modal__choice modal__text">
          <input
            type="radio"
            id="warm"
            value="warm"
            name="weather"
            className="modal__point"
            onClick={handleChange}
          />
          <label className="modal__select" htmlFor="warm">
            Warm
          </label>
        </div>
        <div className="modal__choice modal__text">
          <input
            type="radio"
            id="cold"
            value="cold"
            name="weather"
            className="modal__point"
            onClick={handleChange}
          />
          <label className="modal__select" htmlFor="cold">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default AddItemModal;
