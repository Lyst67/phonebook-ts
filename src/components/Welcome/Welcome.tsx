import css from "./Welcome.module.css";
import { VscAccount } from "react-icons/vsc";
import { useAppSelector } from "@/app/hooks";
import { selectUserName } from "@/app/auth/auth-selectors";

type Props = {};

export default function Welcome({}: Props) {
  const userName = useAppSelector(selectUserName);
  return (
    <>
      <p className={css.welcome}>
        <VscAccount className={css.icon_user} /> Welcome{" "}
        <span className={css.user_name}>{userName}</span>!
      </p>
    </>
  );
}
