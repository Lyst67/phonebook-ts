import { ThreeCircles } from "react-loader-spinner";
import css from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={css.loader_box}>
      <div className={css.loader}>
        <ThreeCircles
          // strokeColor={`var(--white)`}
          strokeWidth="5"
          animationDuration="0.75"
          // width="20%"
          visible={true}
        />
      </div>
    </div>
  );
};
