import styles from "./header.module.css";
import { Fragment, useState } from "react";

import mealImage from "./../../assets/meals.jpg";
import HeaderButton from "./headerButton";
import Cart from "../cart/cart";
function Header() {
  function manageCart() {
    setcartOpen(function (prevdata) {
      return !prevdata;
    });
  }

  let [cartOpen, setcartOpen] = useState(false);
  return (
    <Fragment>
      {cartOpen && <Cart closecart={manageCart} />}

      <header className={styles.header}>
        <h1>Meals</h1>
        <HeaderButton opencart={manageCart}>Cart</HeaderButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImage} alt="Meal images" />
      </div>
    </Fragment>
  );
}

export default Header;
