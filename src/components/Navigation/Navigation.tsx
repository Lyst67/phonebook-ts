import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { selectIsLogedIn } from "../../app/auth/auth-selectors";
import { useAppSelector } from "../../app/hooks";

type NavigationProps = {
  onClose: () => void;
};

export const Navigation = ({ onClose }: NavigationProps) => {
  const isLogedIn = useAppSelector(selectIsLogedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/" end onClick={onClose}>
        Home
      </NavLink>
      {isLogedIn && (
        <NavLink className={css.link} to="/contacts" onClick={onClose}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
