/*
  PLAIN REDUX WITHOUT TOOL
import { createStore } from "redux";

let initState = {
  counter: 0,
};
let reducerHandler = function (state = initState, action) {
  if (action.type == "increase") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type == "decrease") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};
let store = createStore(reducerHandler);

export default store;
*/

/*
  REDUX WITH TOOLS
*/

import { createSlice, configureStore } from "@reduxjs/toolkit";

let initialState = {
  counter: 0,
  showCounter: true,
};

let authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedin: false,
  },
  reducers: {
    loggin(state, action) {
      state.loggedin = true;
    },
    logout(state, action) {
      state.loggedin = false;
    },
  },
});

let counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increaseCounter(state, action) {
      state.counter++;
    },
    decreaseCounter(state, action) {
      state.counter--;
    },
    hideCounter(state, action) {
      state.showCounter = !state.showCounter;
    },
  },
});

let store = configureStore({
  reducer: { counterReducer: counterSlice.reducer, authReducer: authSlice.reducer },
});

export let authActions = authSlice.actions;

export let counterActions = counterSlice.actions;
export default store;
