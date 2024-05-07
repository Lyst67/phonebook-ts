import css from "./Home.module.css";
import { selectUserName } from "../../app/auth/auth-selectors";
import { useAppSelector } from "../../app/hooks";
import GoButton from "@/components/GoButton/GoButton";

const HomePage = () => {
  const userName = useAppSelector(selectUserName);
  return (
    <div className={css.home_page}>
      <div className={css.welcome_part}>
        <h1 className={css.title}>
          Hello {userName && <span className={css.name}>{userName} </span>}!
          <br />
          Get in touth!
        </h1>
        <p className={css.slogan}>Let’s connect our constellations</p>
        {userName && <GoButton />}
      </div>
      <div className={css.img_part}></div>
    </div>
  );
};
export default HomePage;
