import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.css";
import { registerThunk } from "../../app/auth/auth-operations";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      registerThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.contailer}>
      <h1 className={css.title}>Please register!</h1>
      <form
        className={css.form_thumb}
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <label className={css.form_label}>
          Name
          <input
            className={css.form_input}
            type="text"
            name="name"
            title="Name"
            required
          />
        </label>
        <label className={css.form_label}>
          Email
          <input className={css.form_input} type="email" name="email" />
        </label>
        <label className={css.form_label}>
          Password
          <input
            className={css.form_input}
            type="password"
            name="password"
            autoComplete="off"
          />
        </label>
        <button type="submit" className={css.form_btn}>
          Register
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;
