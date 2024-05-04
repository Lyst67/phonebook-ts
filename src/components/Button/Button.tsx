import React from "react";
import css from "./Button.module.css";

export interface ButtonProps
  extends React.BaseHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type: string;
  name?: string;
}

export default function Button({ children, type, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={css.button}>
      {children}
    </button>
  );
}
