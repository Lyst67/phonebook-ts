import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={css.not_found_page}>
      <h1 className={css.text}>Sorry! Page is not found!</h1>
    </div>
  );
};
export default NotFound;
