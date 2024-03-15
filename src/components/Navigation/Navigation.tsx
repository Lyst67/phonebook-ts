import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { selectIsLogedIn } from "../../app/auth/auth-selectors";
import { useAppSelector } from "../../app/hooks";
import logo from "../../assets/logo.png";

export const Navigation = () => {
  const isLogedIn = useAppSelector(selectIsLogedIn);
  return (
    <nav className={css.nav}>
      <div className={css.logo_box}>
        <img className={css.logo} src={logo} alt="phonebook" />
      </div>
      <NavLink className={css.link} to="/" end>
        Home
      </NavLink>
      {isLogedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
