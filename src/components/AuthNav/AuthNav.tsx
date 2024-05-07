import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

type AuthNavProps = {
  onClose: () => void;
};

export const AuthNav = ({ onClose }: AuthNavProps) => {
  return (
    <div className={css.authnav}>
      <NavLink className={css.nav_link} to="/register" onClick={onClose}>
        Register
      </NavLink>
      <NavLink className={css.nav_link} to="/login" onClick={onClose}>
        Log In
      </NavLink>
    </div>
  );
};
