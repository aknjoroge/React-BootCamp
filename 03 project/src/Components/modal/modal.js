import styles from "./modal.module.css";
import Backdrop from "./backdrop";
import ModalButton from "../button/modalButton";
import Card from "../card/card";

function Modal(props) {
  return (
    <Backdrop clickEvent={props.validHandler}>
      <Card marginTop="100" className={styles.modal}>
        <div className={styles.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <ModalButton clickEvent={props.validHandler}>Okay</ModalButton>
      </Card>
    </Backdrop>
  );
}

export default Modal;
