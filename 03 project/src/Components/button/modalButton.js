import styles from "./button.module.css";

function ModalButton(props) {
  function clickhandler() {
    props.clickEvent();
  }
  return (
    <button onClick={clickhandler} className={styles.button}>
      {props.children}
    </button>
  );
}

export default ModalButton;
