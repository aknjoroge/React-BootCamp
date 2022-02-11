import { cartActions } from "./cart";
import { stateActions } from "./state";

export let addTocartCreator = function (item) {
  return function (dispatch) {
    dispatch(cartActions.addtoCart(item));
  };
};

export let removeToCartCreator = function (item) {
  return function (dispatch) {
    dispatch(cartActions.removeFromCart(item));
  };
};

export let fetchData = function () {
  return async function (dispatch) {
    let response = await fetch(
      "https://fakeFirebaseURL-default-rtdb.firebaseio.com/cart.json"
    );

    let data = await response.json();
    if (!data) {
      return;
    }

    dispatch(cartActions.restoreCart(data));
  };
};
export let saveCartData = function (cart) {
  return async function (dispatch) {
    //code start

    let systemMessage = {
      title: "Loading...",
      status: "",
      message: "Adding to cart",
    };
    dispatch(stateActions.showNotification(systemMessage));

    try {
      let response = await fetch(
        "https://fakeFirebaseURL-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      let systemMessage = {
        title: "Success",
        status: "success",
        message: "Added to cart",
      };
      dispatch(stateActions.showNotification(systemMessage));
    } catch (error) {
      let systemMessage = {
        title: "An error occured",
        status: "error",
        message: error.message,
      };
      dispatch(stateActions.showNotification(systemMessage));
    }

    //code end
  };
};

export let clearNotification = function () {
  return function (dispatch) {
    dispatch(stateActions.hideNotification());
  };
};
