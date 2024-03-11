import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { selectIsLogedIn } from "../../app/auth/auth-selectors";
import { useAppSelector } from "../../app/hooks";

export const Navigation = () => {
  const isLogedIn = useAppSelector(selectIsLogedIn);
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
