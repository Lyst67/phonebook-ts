import css from "./Home.module.css";
import { selectUserName } from "../../app/auth/auth-selectors";
import { useAppSelector } from "../../app/hooks";
import arrowRight from "../../assets/arrow_right.svg";
import { Link } from "react-router-dom";

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
        {userName && (
          <Link to="/contacts" className={css.go_btn}>
            Go to Your Contacts{" "}
            <img className={css.arrow_img} src={arrowRight} alt="arrow top" />
          </Link>
        )}
      </div>
      <div className={css.img_part}></div>
    </div>
  );
};
export default HomePage;
