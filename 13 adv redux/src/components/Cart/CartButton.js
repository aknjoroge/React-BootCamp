import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { stateActions } from "../../store/state";

const CartButton = (props) => {
  let totalItems = 0;
  let dispatch = useDispatch();
  let items = useSelector(function (state) {
    return state.cart.items;
  });

  if (items) {
    if (items.length > 0) {
      items.forEach((item) => {
        totalItems += item.quantity;
      });
    }
  }
  function clickHandler(event) {
    event.preventDefault();
    dispatch(stateActions.alterCart());
  }
  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
