import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUserName } from "../../app/auth/auth-selectors";
import { logOutThunk } from "../../app/auth/auth-operations";
import { ImTux } from "react-icons/im";

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.menu}>
      <p>
        <ImTux /> Welcome {userName}!
      </p>
      <button
        className={css.menu_btn}
        type="button"
        onClick={() => dispatch(logOutThunk())}
      >
        Logout
      </button>
    </div>
  );
};
