import { configureStore, createSlice } from "@reduxjs/toolkit";

let initialState = {
  token: "",
  loggedIn: false,
  apiKey: "AIzaSyDJu-28VnXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
};
let appslice = createSlice({
  name: "app",
  initialState,
  reducers: {
    login(store, action) {
      store.token = action.payload;

      if (action.payload) {
        store.loggedIn = true;
        localStorage.setItem("Token", action.payload);
      }
    },
    logout(store) {
      store.loggedIn = false;
      store.token = "";
      localStorage.removeItem("Token");
    },
    restoreToken(store, action) {
      if (action.payload) {
        store.loggedIn = true;
      }
    },
  },
});

export let appActions = appslice.actions;

let store = configureStore({
  reducer: appslice.reducer,
});

export default store;
