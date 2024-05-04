import React from "react";
import css from "./CloseButton..module.css";
import { VscChromeClose } from "react-icons/vsc";

export interface ButtonProps
  extends React.BaseHTMLAttributes<HTMLButtonElement> {}

export default function CloseButton({ ...rest }: ButtonProps) {
  return (
    <>
      <button type="button" {...rest} className={css.close_button}>
        <VscChromeClose className={css.cross} />
      </button>
    </>
  );
}
