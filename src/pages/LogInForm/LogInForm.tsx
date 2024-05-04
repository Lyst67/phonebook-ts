import Button from "@/components/Button/Button";
import { logInThunk } from "../../app/auth/auth-operations";
import { useAppDispatch } from "../../app/hooks";
import css from "../RegisterForm/RegisterForm.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CloseButton from "@/components/CloseButton/CloseButton";

const LogInForm = () => {
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
      logInThunk({
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
      <h1 className={css.title}>Please enter your login!</h1>
      <form className={css.form_thumb} onSubmit={handleSubmit}>
        <CloseButton onClick={handleBack} />
        <label className={css.form_label}>
          Email
          <input
            className={css.form_input}
            type="email"
            name="email"
            autoComplete="on"
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
            required
          />
        </label>
        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
};
export default LogInForm;
