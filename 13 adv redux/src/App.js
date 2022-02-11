import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/notification";
import {
  clearNotification,
  fetchData,
  saveCartData,
} from "./store/actionCreators";
let initialized = false;
function App() {
  let showNotification = useSelector(function (store) {
    return store.state.showNotification;
  });
  let notification = useSelector(function (store) {
    return store.state.notification;
  });
  let storeState = useSelector(function (store) {
    return store.cart.cartAltered;
  });

  let timer = setTimeout(function () {
    dispatch(clearNotification());
    clearTimeout(timer);
  }, 5000);

  let dispatch = useDispatch();
  let cart = useSelector(function (state) {
    return state.cart;
  });

  useEffect(function () {
    dispatch(fetchData());
  }, []);

  useEffect(
    function () {
      console.log("TX-55", storeState);
      if (initialized && storeState) {
        dispatch(saveCartData(cart));
      }
      initialized = true;
    },
    [cart]
  );

  //https://fakeFirebaseURL-default-rtdb.firebaseio.com
  //handle getting an empty cart
  let showCart = useSelector(function (store) {
    return store.state.showCart;
  });

  return (
    <Fragment>
      {showNotification && (
        <Notification
          message={notification.message}
          title={notification.title}
          status={notification.status}
        />
      )}
      <Layout>
        {showCart && <Cart />}

        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
