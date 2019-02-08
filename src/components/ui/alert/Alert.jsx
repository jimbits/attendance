import React from "react";
import Button from "../button/Button";
import { WarningIcon } from "../icons/Icons";
import "./alert.css";

const Alert = props => {
  return (
    <aside className="alert">
      <WarningIcon icon="icon" />
      <p className="alert-message">{props.message}</p>
      <span className="alert-button">
        <Button label="add course" onClick={props.onClick} />
      </span>
    </aside>
  );
};

export default Alert;
