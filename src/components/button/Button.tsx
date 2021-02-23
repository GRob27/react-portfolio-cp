import React, { FunctionComponent } from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  className?: string;
  href: string;
  newTab?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({ text, className, href, newTab }) => {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={(newTab ? "": undefined) && "_blank"}>
        {text}
      </a>
    </div>
  );
};

Button.defaultProps = {
  className: "",
  newTab: undefined
};

export default Button;
