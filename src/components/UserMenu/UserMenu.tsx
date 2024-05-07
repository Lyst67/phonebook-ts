import css from "./UserMenu.module.css";
import { logOutThunk } from "../../app/auth/auth-operations";
import { useAppDispatch } from "../../app/hooks";
import Button from "../Button/Button";

type UserMenuProps = {};

export const UserMenu = ({}: UserMenuProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={css.menu}>
      <Button type="button" onClick={() => dispatch(logOutThunk())}>
        Logout
      </Button>
    </div>
  );
};
