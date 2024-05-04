import css from "./RegisterForm.module.css";
import { registerThunk } from "../../app/auth/auth-operations";
import { useAppDispatch } from "../../app/hooks";
import Button from "@/components/Button/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CloseButton from "@/components/CloseButton/CloseButton";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const goBackRef = useRef("/");
  const navigate = useNavigate();

  const handleSubmit = (event: {
    preventDefault: () => void;
    currentTarget: any;
  }) => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      registerThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleBack = () => {
    navigate(goBackRef.current);
  };

  return (
    <div className={css.contailer}>
      <h1 className={css.title}>Please register!</h1>
      <form className={css.form_thumb} onSubmit={handleSubmit}>
        <CloseButton onClick={handleBack} />
        <label className={css.form_label}>
          Name
          <input
            className={css.form_input}
            type="text"
            name="name"
            placeholder="Jhon Jhonson"
            required
          />
        </label>
        <label className={css.form_label}>
          Email
          <input
            className={css.form_input}
            type="email"
            name="email"
            placeholder="jhonjhonson@mail.com"
            required
          />
        </label>
        <label className={css.form_label}>
          Password
          <input
            className={css.form_input}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Must have at least 8 characters"
            required
          />
        </label>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};
export default RegisterForm;
