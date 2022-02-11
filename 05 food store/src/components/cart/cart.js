import styles from "./cart.module.css";
import Modal from "../Ui/modal";

import { useContext, Fragment } from "react";
import AppContext from "../context-storage/appcontext";

function Cart(props) {
  let contextData = useContext(AppContext);
  function closecart() {
    props.closecart();
  }
  function modifyAdditem(data) {
    contextData.additems({
      type: "ADD",
      data: {
        id: data.id,
        name: data.name,
        amount: 1,
        price: data.price,
      },
    });
  }
  function modifyRemoveitem(id) {
    contextData.removeitems(id);
  }
  let cartTotal = contextData.totalAmount.toFixed(2);
  let hasitems = contextData.items.length > 0;
  return (
    <Modal onClick={closecart}>
      <div>
        <h2>CART ITEMS</h2>
        <hr />
        <ul className={styles["cart-items"]}>
          {hasitems &&
            contextData.items.map(function (element, index) {
              return (
                <Fragment key={element.id}>
                  <li className={styles["cart-item"]} key={element.id}>
                    {index + 1}). <h3>{element.name}</h3> <p> X</p>
                    <h3>{element.amount}</h3>
                    <p className={styles.equal}>=</p>
                    <h3>${element.price * element.amount}</h3>
                    <div className={styles.actions}>
                      <button onClick={modifyRemoveitem.bind(null, element.id)}>
                        −
                      </button>
                      <button onClick={modifyAdditem.bind(null, element)}>
                        +
                      </button>
                    </div>
                  </li>
                </Fragment>
              );
            })}
        </ul>
      </div>
      <div className={styles.total}>
        <span>total amount</span>
        <span>${cartTotal}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={closecart} className={styles["button--alt"]}>
          Close
        </button>
        <br />
        {hasitems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
