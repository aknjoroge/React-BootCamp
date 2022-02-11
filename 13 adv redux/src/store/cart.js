import { createSlice } from "@reduxjs/toolkit";

let calculateStats = function () {};

let cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartAltered: false,
  },
  reducers: {
    addtoCart(store, action) {
      store.cartAltered = true;
      if (store.items) {
        if (store.items.length != 0) {
          let indexof = store.items.findIndex(function (element) {
            return element.id == action.payload.id;
          });
          if (indexof != -1) {
            store.items[indexof].quantity++;
            store.items[indexof].total =
              store.items[indexof].quantity * store.items[indexof].price;
            return;
          }
        }
      }
      let data = {
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      };
      store.items.push(data);
    },
    removeFromCart(store, action) {
      if (store.items.length != 0) {
        store.cartAltered = true;
        let indexof = store.items.findIndex(function (element) {
          return element.id == action.payload.id;
        });
        if (indexof != -1) {
          store.items[indexof].quantity--;
          if (store.items[indexof].quantity < 1) {
            let newState = store.items.filter(function (item) {
              return item.id != store.items[indexof].id;
            });

            store.items = newState;
            return;
          }
          store.items[indexof].total =
            store.items[indexof].quantity * store.items[indexof].price;

          return;
        }
      }
    },
    restoreCart(state, action) {
      state.items = action.payload.items;
    },
  },
});

export let cartActions = cartSlice.actions;

export default cartSlice.reducer;
