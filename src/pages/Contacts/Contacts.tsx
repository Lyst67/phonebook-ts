import css from "./Contacts.module.css";
import { Link, Outlet } from "react-router-dom";
import { ContactsList } from "../../components/ContactsList/ContactsList";
import { Filter } from "../../components/Filter/Filter";
import { TfiArrowCircleUp } from "react-icons/tfi";
import Button from "@/components/Button/Button";

const Contacts = () => {
  return (
    <div className={css.contacts_container}>
      <Link className={css.add_link} to="add">
        <Button type="button">Add Contact</Button>
      </Link>
      <Outlet />
      <h2 className={css.contacts_title}>Your contacts</h2>
      <Filter />
      <ContactsList />
      <TfiArrowCircleUp
        className={css.arrow_up}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
};
export default Contacts;
