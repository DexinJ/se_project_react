import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ onClose, onSubmit, onRedirect }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleAvatarChange = (e) => setAvatar(e.target.value);

  const handleSubmit = () => {
    onSubmit({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Register"
      secondButton={true}
      secondButtonText="or Login"
      secondButtonLink={onRedirect}
    >
      <label className="modal__field modal__text">
        Email*
        <input
          className="modal__input modal__text"
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal__field modal__text">
        Password*
        <input
          className="modal__input modal__text"
          name="password"
          type="text"
          minLength="1"
          maxLength="8"
          placeholder="Password"
          required
          onChange={handlePasswordChange}
        />
      </label>
      <label className="modal__field modal__text">
        Name*
        <input
          className="modal__input modal__text"
          name="name"
          type="text"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          required
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__field modal__text">
        Avatar*
        <input
          className="modal__input modal__text"
          name="avatar"
          type="url"
          placeholder="Avatar URL"
          required
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
