import styles from "./button.module.css";

function Button(props) {
  return (
    <button className={styles.button} type="submit">
      {props.children}
    </button>
  );
}

export default Button;
