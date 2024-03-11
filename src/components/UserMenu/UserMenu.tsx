import css from "./UserMenu.module.css";
import { selectUserName } from "../../app/auth/auth-selectors";
import { logOutThunk } from "../../app/auth/auth-operations";
import { ImTux } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const UserMenu = () => {
  const userName = useAppSelector(selectUserName);
  const dispatch = useAppDispatch();

  return (
    <div className={css.menu}>
      <p>
        <ImTux /> Welcome{`" "${userName}`}!
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
