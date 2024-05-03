import css from "./ContactsList.module.css";
import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from "../../app/contacts/contactsSelectors";
import { useEffect } from "react";
import { deleteContact, fetchContacts } from "../../app/contacts/operations";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Loader } from "../Loader/Loader";
import { PiAddressBookLight } from "react-icons/pi";

export const ContactsList = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const filter = useAppSelector(selectFilteredContacts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    <div>
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
                <p className={css.contact_row}>
                  <PiAddressBookLight /> {name}: {number}
                </p>
                <div className={css.cont_btns}>
                  <button
                    type="button"
                    className={css.cont_btn}
                    id={id}
                    onClick={() =>
                      navigate("update", {
                        state: {
                          id: { id },
                          name: { name },
                          number: { number },
                        },
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className={css.cont_btn}
                    type="button"
                    name={id}
                    onClick={deleteElement}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
