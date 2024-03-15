import css from "./UserMenu.module.css";
import { selectUserName } from "../../app/auth/auth-selectors";
import { logOutThunk } from "../../app/auth/auth-operations";
import { VscAccount } from "react-icons/vsc";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const UserMenu = () => {
  const userName = useAppSelector(selectUserName);
  const dispatch = useAppDispatch();

  return (
    <div className={css.menu}>
      <p className={css.user_name}>
        <VscAccount className={css.icon_user} /> Welcome {userName}!
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
