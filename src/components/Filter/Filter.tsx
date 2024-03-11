import css from "./Filter.module.css";
import { filterContacts } from "../../app/contacts/filterSlice";
import { ImSearch } from "react-icons/im";
import { useAppDispatch } from "../../app/hooks";

export const Filter = () => {
  const dispatch = useAppDispatch();
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(filterContacts(value));
  };

  return (
    <div className={css.filter_form}>
      <label className={css.filter_label}>
        <ImSearch />
        <input
          className={css.filter_input}
          type="text"
          name="filter"
          placeholder="Start typing a name..."
          onChange={handleFilter}
        ></input>
      </label>
    </div>
  );
};
