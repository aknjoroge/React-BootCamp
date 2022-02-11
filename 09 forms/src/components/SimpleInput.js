import { useEffect, useRef, useState } from "react";
import useForm from "../hook/useform";
const SimpleInput = (props) => {
  let inputref = useRef();
  function nameValid(data) {
    return data.trim() !== "";
  }
  function emailValid(data) {
    return (
      data.trim() !== "" &&
      data.trim().includes("@") &&
      data.trim().includes(".")
    );
  }

  let {
    isvalid: nameinputvalid,
    inputHandler: nameInputChangeHandler,
    focusHandler: focusChangeHandler,
    inputTouched: nameInputTouched,
    value: nameInputText,
  } = useForm(nameValid);

  let {
    isvalid: emailinputvalid,
    inputHandler: emailInputChangeHandler,
    focusHandler: focusemailChangeHandler,
    inputTouched: emailInputTouched,
    value: emailText,
  } = useForm(emailValid);

  let formvalid = nameinputvalid && emailinputvalid;
  /*
  without custom hook
  function focusemailChangeHandler(event) {
    setemailInputTouched(true);
  }
  let [emailText, setemailText] = useState("");
  let [emailInputTouched, setemailInputTouched] = useState(false);
  let emailinputvalid =
    emailText.trim() !== "" &&
    emailText.trim().includes("@") &&
    emailInputTouched;
  function emailInputChangeHandler(event) {
    setemailText(event.target.value);
  }
  let [nameInputText, setinputText] = useState("");
  let [nameInputTouched, setinputTouched] = useState(false);
  let nameinputvalid = nameInputText.trim() !== "" && nameInputTouched;
  function nameInputChangeHandler(event) {
    setinputText(event.target.value);
  }
  function focusChangeHandler(event) {
    setinputTouched(true);
  }
*/
  function submitHandler(event) {
    event.preventDefault();
    // setinputTouched(true);
    // if (nameInputText.trim() == "" || !emailText.includes("@")) {
    //   nameinputvalid = true;
    //   return;
    // }
    if (!formvalid) {
      return;
    }
    alert(`name : ${nameInputText}, email :${emailText} `);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputChangeHandler}
          ref={inputref}
          type="text"
          onBlur={focusChangeHandler}
          id="name"
        />
        <p> {!nameinputvalid && nameInputTouched && "Input is invalid"} </p>
      </div>
      <div className="form-control">
        <label htmlFor="email">Your Email</label>
        <input
          onChange={emailInputChangeHandler}
          ref={inputref}
          type="email"
          onBlur={focusemailChangeHandler}
          id="email"
        />
        <p> {!emailinputvalid && emailInputTouched && "Input is invalid"} </p>
      </div>
      <div className="form-actions">
        <button disabled={!formvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
