import styles from "./headerButton.module.css";
import CartIcon from "./headerButtonicon";
import { useContext } from "react";
import AppContext from "../context-storage/appcontext";
function HeaderButton(props) {
  let contextData = useContext(AppContext);

  function opencart() {
    props.opencart();
  }
  let cartNumber = contextData.items.reduce(function (acc, item) {
    return acc + item.amount;
  }, 0);

  return (
    <button onClick={opencart} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>{props.children}</span>
      <span className={styles.badge}>{cartNumber}</span>
    </button>
  );
}
export default HeaderButton;
