import css from "./ListButtons.module.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

type ListButtonsProps = {
  contactInfo: {
    id: string | undefined;
    name: string;
    number: string;
  };
  deleteElement: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

export default function ListButtons({
  contactInfo,
  deleteElement,
}: ListButtonsProps) {
  const navigate = useNavigate();
  const { id, name, number } = contactInfo;
  return (
    <>
      <div className={css.icon_buttons}>
        <FiEdit
          className={css.svg_icon}
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
        />
        <button className={css.delete_button} name={id} onClick={deleteElement}>
          <RiDeleteBin6Line className={css.svg_icon} />
        </button>
      </div>
    </>
  );
}
