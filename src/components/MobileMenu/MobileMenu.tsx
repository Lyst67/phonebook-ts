import { selectIsLogedIn } from "@/app/auth/auth-selectors";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";
import css from "./MobileMenu.module.css";
import { useAppSelector } from "@/app/hooks";
import { Navigation } from "../Navigation/Navigation";
import CloseButton from "../CloseButton/CloseButton";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isVisible, onClose }: Props) {
  const isLogedIn = useAppSelector(selectIsLogedIn);

  const handleModalClose = () => {
    onClose();
  };

  return (
    <>
      {isVisible && (
        <div onClick={handleModalClose} className={css.backdrop}></div>
      )}
      <div
        className={
          isVisible
            ? `${css.mobile_menu} ${css.is_open} `
            : `${css.mobile_menu}`
        }
      >
        <CloseButton onClick={handleModalClose} />
        <div className={css.nav_menu}>
          <Navigation onClose={handleModalClose} />
          {isLogedIn ? <UserMenu /> : <AuthNav onClose={handleModalClose} />}
        </div>
      </div>
    </>
  );
}
