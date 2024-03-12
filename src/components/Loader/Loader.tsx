import { ThreeCircles } from "react-loader-spinner";
import css from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={css.loader_box}>
      <div className={css.loader}>
        <ThreeCircles
          visible={true}
          height="150"
          width="150"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};
