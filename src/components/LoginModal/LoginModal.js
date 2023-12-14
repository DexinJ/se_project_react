import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ onClose, onSubmit, onRedirect }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = () => {
    onSubmit({ email: email, password: password });
  };

  return (
    <ModalWithForm
      title="Login"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Login"
      secondButton={true}
      secondButtonText="or Register"
      secondButtonLink={onRedirect}
    >
      <label className="modal__field modal__text">
        Email
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
        Password
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
    </ModalWithForm>
  );
}

export default LoginModal;
