import { Navigation } from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { selectIsLogedIn } from "../../app/auth/auth-selectors";
import { useAppSelector } from "../../app/hooks";
import { GiHamburgerMenu } from "react-icons/gi";
import Welcome from "../Welcome/Welcome";
import logo from "../../assets/paper_notes.svg";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

export const AppBar = () => {
  const [shown, setShown] = useState(false);
  const isLogedIn = useAppSelector(selectIsLogedIn);

  const handleOpenMenu = () => {
    setShown(true);
    document.body.style.overflow = "hidden";
  };
  const onClose = () => {
    setShown(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header className={css.header}>
      <div className={css.logo_box}>
        <img className={css.logo} src={logo} alt="phonebook" />
        <div className={css.nav_buttons}>
          <Navigation onClose={onClose} />
        </div>
      </div>

      <h1 className={css.title}>Phonebook</h1>

      <div className={css.menu}>
        {isLogedIn && <Welcome />}
        {isLogedIn ? <UserMenu /> : <AuthNav onClose={onClose} />}
      </div>
      <GiHamburgerMenu className={css.burger_button} onClick={handleOpenMenu} />
      <MobileMenu isVisible={shown} onClose={onClose} />
    </header>
  );
};
