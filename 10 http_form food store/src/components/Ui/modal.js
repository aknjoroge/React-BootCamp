import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";
function Modal(props) {
  let Modalcomponent = (
    <Fragment>
      <div onClick={props.onClick} className={styles.backdrop}></div>

      <div className={styles.modal}>{props.children}</div>
    </Fragment>
  );
  return ReactDOM.createPortal(
    Modalcomponent,
    document.getElementById("modal")
  );
}

export default Modal;
