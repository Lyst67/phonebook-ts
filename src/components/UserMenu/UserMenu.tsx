import css from "./UserMenu.module.css";
import { selectUserName } from "../../app/auth/auth-selectors";
import { logOutThunk } from "../../app/auth/auth-operations";
import { VscAccount } from "react-icons/vsc";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Button from "../Button/Button";

type UserMenuProps = {};

export const UserMenu = ({}: UserMenuProps) => {
  const userName = useAppSelector(selectUserName);
  const dispatch = useAppDispatch();

  return (
    <div className={css.menu}>
      <p className={css.welcome}>
        <VscAccount className={css.icon_user} /> Welcome{" "}
        <span className={css.user_name}>{userName}</span>!
      </p>
      <Button type="button" onClick={() => dispatch(logOutThunk())}>
        Logout
      </Button>
    </div>
  );
};
