import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.value}
    </button>
  );
};

export default Button;
