import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function RegisterModal({ onClose, onSubmit, onRedirect }) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleSubmit = () => {
    onSubmit({
      email: values.email,
      password: values.password,
      name: values.name,
      avatar: values.avatar,
    });
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
          value={values.email}
          onChange={handleChange}
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
          value={values.password}
          onChange={handleChange}
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
          value={values.name}
          onChange={handleChange}
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
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
