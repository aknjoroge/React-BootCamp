import { useState } from "react";

let useForm = function (inputCallback) {
  let [inputValue, setinputValue] = useState("");
  let [inputTouched, setinputTouched] = useState(false);

  let inputValid = inputCallback(inputValue) && inputTouched;

  function inputChangeHandler(event) {
    setinputValue(event.target.value);
  }

  function focusChangeHandler(event) {
    setinputTouched(true);
  }
  return {
    isvalid: inputValid,
    inputTouched: inputTouched,
    inputHandler: inputChangeHandler,
    focusHandler: focusChangeHandler,
    value: inputValue,
  };
};

export default useForm;
