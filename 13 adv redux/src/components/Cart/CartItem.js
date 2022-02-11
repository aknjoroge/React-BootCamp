import { Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  addTocartCreator,
  removeToCartCreator,
} from "../../store/actionCreators";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  let dispatch = useDispatch();

  function increaseHandler(item) {
    dispatch(addTocartCreator(item));
  }
  function decreaseHandler(item) {
    dispatch(removeToCartCreator(item));
  }

  if (!props.items) {
    return <p> You have no items in the cart</p>;
  }

  return (
    <Fragment>
      {props.items.map(function (item, index) {
        return (
          <li key={index} className={classes.item}>
            <header>
              <h3>{item.title}</h3>
              <div className={classes.price}>
                ${item.total}{" "}
                <span className={classes.itemprice}>
                  (${item.price.toFixed(2)}/item)
                </span>
              </div>
            </header>
            <div className={classes.details}>
              <div className={classes.quantity}>
                x <span>{item.quantity}</span>
              </div>
              <div className={classes.actions}>
                <button onClick={() => decreaseHandler(item)}>-</button>
                <button onClick={() => increaseHandler(item)}>+</button>
              </div>
            </div>
          </li>
        );
      })}
    </Fragment>
  );
};

export default CartItem;
