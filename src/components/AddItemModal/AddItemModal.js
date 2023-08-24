import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function AddItemModal({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [weather, setWeather] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ name: name, url: url, weather: weather });
    onClose();
  }
  return (
    <div>
      <ModalWithForm
        title="New Garment"
        onClose={onClose}
        buttonText="Add garment"
        onSubmit={handleSubmit}
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
            onChange={(e) => {
              setName(e.target.value);
            }}
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
            onChange={(e) => {
              setUrl(e.target.value);
            }}
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
              onClick={() => {
                setWeather("hot");
              }}
            />
            <label className="modal__select">Hot</label>
          </div>
          <div className="modal__choice modal__text">
            <input
              type="radio"
              id="warm"
              value="warm"
              name="weather"
              className="modal__point"
              onClick={() => {
                setWeather("warm");
              }}
            />
            <label className="modal__select">Warm</label>
          </div>
          <div className="modal__choice modal__text">
            <input
              type="radio"
              id="cold"
              value="cold"
              name="weather"
              className="modal__point"
              onClick={() => {
                setWeather("cold");
              }}
            />
            <label className="modal__select">Cold</label>
          </div>
        </div>
      </ModalWithForm>
    </div>
  );
}

export default AddItemModal;
