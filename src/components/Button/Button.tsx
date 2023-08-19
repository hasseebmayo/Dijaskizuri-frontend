import React from "react";
import "./button.component.scss";
type buttonProps = React.HTMLAttributes<HTMLButtonElement> & {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};
const Button = ({ text }: buttonProps) => {
  return <button className="primary-button">{text}</button>;
};

export default Button;
