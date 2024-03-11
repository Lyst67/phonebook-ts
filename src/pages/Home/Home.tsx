import css from "./Home.module.css";
import { selectUserName } from "../../app/auth/auth-selectors";
import { useAppSelector } from "../../app/hooks";

const HomePage = () => {
  const userName = useAppSelector(selectUserName);
  return (
    <div className={css.home_page}>
      <h1 className={css.title}>
        Hello {userName}!<br />
        Welcome to the Phonebook service!
      </h1>
    </div>
  );
};
export default HomePage;
