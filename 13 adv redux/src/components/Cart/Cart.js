import { useDispatch, useSelector } from "react-redux";
import { stateActions } from "../../store/state";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  let dispatch = useDispatch();
  let items = useSelector(function (store) {
    return store.cart.items;
  });
  function clickHandler(event) {
    event.preventDefault();
    dispatch(stateActions.alterCart());
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <div className={classes.center}>
        <button onClick={clickHandler} className={classes.button}>
          <span>close</span>
        </button>
      </div>
      <hr />
      <ul>
        <CartItem items={items} />
      </ul>
    </Card>
  );
};

export default Cart;
