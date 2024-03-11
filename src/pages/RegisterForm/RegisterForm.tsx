import css from "./RegisterForm.module.css";
import { registerThunk } from "../../app/auth/auth-operations";
import { useAppDispatch } from "../../app/hooks";

const RegisterForm = () => {
  const dispatch = useAppDispatch();

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
          <input className={css.form_input} type="text" name="name" required />
        </label>
        <label className={css.form_label}>
          Email
          <input
            className={css.form_input}
            type="email"
            name="email"
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
        <button type="submit" className={css.form_btn}>
          Register
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;
