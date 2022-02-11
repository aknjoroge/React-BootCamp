import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/store";

const Counter = () => {
  /*   REACT REDUX
  let dispatch = useDispatch();
  let counter = useSelector(function (store) {
    return store.counter;
  });
  const toggleCounterHandler = () => {};

  function increaseHandler() {
    dispatch({ type: "increase" });
  }
  function decreaseHandler() {
    dispatch({ type: "decrease" });
  }*/

  /*
   REDUX TOOLKIT
  */
  let dispatch = useDispatch();

  let counter = useSelector(function (store) {
    return store.counterReducer.counter;
  });
  let show = useSelector(function (store) {
    return store.counterReducer.showCounter;
  });

  const toggleCounterHandler = () => {
    dispatch(counterActions.hideCounter());
  };

  function increaseHandler() {
    dispatch(counterActions.increaseCounter());
  }
  function decreaseHandler() {
    dispatch(counterActions.decreaseCounter());
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>: {counter} </div>}

      <div>
        <button onClick={increaseHandler}>Increase </button>
        <button onClick={decreaseHandler}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
