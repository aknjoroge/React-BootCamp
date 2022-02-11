import { createSlice } from "@reduxjs/toolkit";

let stateSlice = createSlice({
  name: "appState",
  initialState: {
    showCart: false,
    showNotification: false,
    notification: {
      status: "",
      title: "",
      message: "",
    },
  },
  reducers: {
    alterCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.showNotification = true;
      state.notification.status = action.payload.status;
      state.notification.message = action.payload.message;
      state.notification.title = action.payload.title;
    },
    hideNotification(state) {
      state.showNotification = false;
      state.notification.status = "";
      state.notification.message = "";
      state.notification.title = "";
    },
  },
});

export let stateActions = stateSlice.actions;

export default stateSlice.reducer;
