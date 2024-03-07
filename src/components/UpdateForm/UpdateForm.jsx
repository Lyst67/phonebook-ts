import { useDispatch, useSelector } from "react-redux";
import css from "../AddForm/AddForm.module.css";
import { selectContacts } from "../../app/contacts/contactsSelectors";
import { useLocation, useNavigate } from "react-router-dom";
import { updateContact } from "../../app/contacts/operations";
import { useRef } from "react";
export const UpdateForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const navigate = useNavigate();
  const goBackRef = useRef("/contacts");
  const { state } = useLocation();
  const userName = state.name;
  const userNumber = state.number;
  const id = state.id.id;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const existName = contacts?.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase().trim()
    );
    if (existName) {
      alert(`${name} is already in contacts!`);
      return;
    }
    dispatch(updateContact({ id, name, number }));
    form.reset();
  };

  const handleBack = () => {
    navigate(goBackRef.current);
  };

  return (
    <div className={css.addform}>
      <button className={css.close_btn} onClick={handleBack} type="button">
        X
      </button>
      <form className={css.form_thumb} onSubmit={handleSubmit}>
        <label className={css.form_label}>
          Name
          <input
            className={css.form_input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name"
            required
            defaultValue={userName.name}
          />
        </label>
        <label className={css.form_label}>
          Number
          <input
            className={css.form_input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number"
            required
            defaultValue={userNumber.number}
          />
        </label>
        <button type="submit" className={css.form_btn}>
          Update contact
        </button>
      </form>
    </div>
  );
};
