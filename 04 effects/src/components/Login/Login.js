import React, { useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

function EmailStateCallback(prevData, data) {
  if (data.type === "Email_Updated") {
    return { value: data.value, isvalid: data.value.includes("@") };
  }
  if (data.type === "Email_Valid") {
    return { value: prevData.value, isvalid: prevData.value.includes("@") };
  }
}
function passwordStateCallBack(prevData, data) {
  if (data.type === "Change") {
    return {
      value: data.value,
      valid: data.value.length > 6,
    };
  }
  if (data.type === "completed") {
    return {
      value: prevData.value,
      valid: prevData.value.length > 6,
    };
  }
}

const Login = (props) => {
  /* const [enteredEmail, setEnteredEmail] = useState("");
   const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);*/

  let [emailState, emailStateDispatch] = useReducer(EmailStateCallback, {
    value: "",
    isvalid: false,
  });

  let [passwordState, passwordDispatch] = useReducer(passwordStateCallBack, {
    value: "",
    valid: false,
  });

  const emailChangeHandler = (event) => {
    emailStateDispatch({ type: "Email_Updated", value: event.target.value });

    //setEnteredEmail(event.target.value);
    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };
  const validateEmailHandler = () => {
    emailStateDispatch({ type: "Email_Valid" });

    //  setEmailIsValid(enteredEmail.includes("@"));
  };

  const passwordChangeHandler = (event) => {
    passwordDispatch({
      type: "Change",
      value: event.target.value,
    });

    // setEnteredPassword(event.target.value);
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };
  /*
  useEffect(() => {
    let eventTimer = setTimeout(() => {
      setFormIsValid(enteredEmail.includes("@") && enteredPassword.length > 6);
    }, 1000);
    return () => {
      clearTimeout(eventTimer);
    };
  }, [enteredEmail, enteredPassword]);*/

  const validatePasswordHandler = () => {
    passwordDispatch({
      type: "completed",
    });
    //setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isvalid === false && passwordState.value === false
              ? classes.invalid
              : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.valid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!passwordState.valid || !emailState.isvalid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
