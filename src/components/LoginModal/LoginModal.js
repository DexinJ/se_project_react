import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ onClose, onSubmit, onRedirect }) {
  const { values, handleChange } = useForm({ email: "", password: "" });

  const handleSubmit = () => {
    onSubmit({ email: values.email, password: values.password });
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
          value={values.email}
          onChange={handleChange}
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
          value={values.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
