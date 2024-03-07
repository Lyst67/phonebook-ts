import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLogedIn } from "../../app/auth/auth-selectors";

export const Navigation = () => {
  const isLogedIn = useSelector(selectIsLogedIn);
  return (
    <nav className={css.nav}>
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
