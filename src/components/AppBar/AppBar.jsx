import { Navigation } from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { selectIsLogedIn } from "../../app/auth/auth-selectors";
import { useSelector } from "react-redux";

export const AppBar = () => {
  const isLogedIn = useSelector(selectIsLogedIn);
  return (
    <header className={css.header}>
      <Navigation />
      <h1 className={css.title}>Phonebook</h1>
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
