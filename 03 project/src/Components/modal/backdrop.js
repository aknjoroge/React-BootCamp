import styles from "./modal.module.css";

function Backdrop(props) {
  function clickhandler() {
    props.clickEvent();
  }
  return (
    <div onClick={clickhandler} className={styles.backdrop}>
      {props.children}
    </div>
  );
}

export default Backdrop;
