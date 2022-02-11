import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart";
import itemReducer from "./items";
import stateReducer from "./state";
let store = configureStore({
  reducer: { cart: cartReducer, items: itemReducer, state: stateReducer },
});

export default store;
