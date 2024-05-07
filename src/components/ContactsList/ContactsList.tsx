import css from "./ContactsList.module.css";
import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from "../../app/contacts/contactsSelectors";
import { useEffect } from "react";
import { deleteContact, fetchContacts } from "../../app/contacts/operations";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Loader } from "../Loader/Loader";
import { PiAddressBookLight } from "react-icons/pi";
import ListButtons from "../ListButtons/ListButtons";

export const ContactsList = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const filter = useAppSelector(selectFilteredContacts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteElement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = event.currentTarget;
    dispatch(deleteContact(target.name));
  };

  return (
    <div className={css.contact_list_box}>
      {isLoading && <Loader />}
      {error && <h1>An error occured: {error.message}</h1>}
      <ul className={css.cont_list}>
        {filter
          .sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
          .map(({ id, name, number }) => {
            return (
              <li className={css.cont_item} key={id}>
                <div className={css.contact_row}>
                  <PiAddressBookLight className={css.book_icon} />
                  <div className={css.contact_data}>
                    <span>{name}:</span>
                    <span>{number}</span>
                  </div>
                </div>
                <ListButtons
                  deleteElement={deleteElement}
                  contactInfo={{ id, name, number }}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
