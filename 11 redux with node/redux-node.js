let redux = require("redux");

let initState = { counter: 0 };
function reducerHandler(state = initState, action) {
  if (action.type == "add") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type == "minus") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
}

let store = redux.createStore(reducerHandler);

function subscriberComponent() {
  let storeData = store.getState();
  console.log(storeData.counter);
}

store.subscribe(subscriberComponent);
store.dispatch({ type: "add" });
store.dispatch({ type: "minus" });
