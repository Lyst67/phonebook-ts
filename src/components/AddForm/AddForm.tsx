import { useRef } from "react";
import css from "./AddForm.module.css";
import { addContact } from "../../app/contacts/operations";
import { selectContacts } from "../../app/contacts/contactsSelectors";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CloseButton from "../CloseButton/CloseButton";
import Button from "../Button/Button";

export const AddForm = () => {
  const navigate = useNavigate();
  const goBackRef = useRef("/contacts");
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);

  const handleSubmit = (event: {
    preventDefault: () => void;
    currentTarget: any;
  }) => {
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
      <CloseButton onClick={handleBack} />
      <form className={css.form_thumb} onSubmit={handleSubmit}>
        <label className={css.form_label}>
          Name
          <input
            className={css.form_input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name"
            placeholder="Enter name"
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
            placeholder="Enter number"
            required
          />
        </label>
        <Button type="submit" className={css.form_btn}>
          Add contact
        </Button>
      </form>
    </div>
  );
};
