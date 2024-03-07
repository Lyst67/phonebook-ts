import React, { useRef } from "react";
import css from "./AddForm.module.css";
import { addContact } from "../../app/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../app/contacts/contactsSelectors";
import { useNavigate } from "react-router-dom";

export const AddForm = () => {
  const navigate = useNavigate();
  const goBackRef = useRef("/contacts");
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = { name, number };
    const existName = contacts?.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase().trim()
    );
    if (existName) {
      alert(`${name} is already in contacts!`);
      return;
    }
    dispatch(addContact(newContact));
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
          />
        </label>
        <button type="submit" className={css.form_btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};
