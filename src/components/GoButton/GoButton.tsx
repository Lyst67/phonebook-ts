import { Link } from "react-router-dom";
import css from "./GoButton.module.css";
import arrowRight from "../../assets/arrow_right.svg";

type Props = {};

export default function GoButton({}: Props) {
  return (
    <>
      <Link to="/contacts" className={css.go_btn}>
        Go to Your Contacts{" "}
        <img className={css.arrow_img} src={arrowRight} alt="arrow top" />
      </Link>
    </>
  );
}
