import React, { useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";

function EditProfileModal({ onClose, onSubmit }) {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange } = useForm({
    name: currentUser.name,
    avatar: currentUser.avatar,
  });

  const handleSubmit = () => {
    onSubmit({ name: values.name, avatar: values.avatar });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Save Change"
    >
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
          onChange={handleChange}
          value={values.name}
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
          onChange={handleChange}
          value={values.avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
