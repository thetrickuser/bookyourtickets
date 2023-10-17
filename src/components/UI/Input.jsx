import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      className={`${styles.input} ${props.className}`}
      placeholder={props.placeholder}
    ></input>
  );
};

export default Input;
