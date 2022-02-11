import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createAccount, loginAction } from "../../store/actionCreator";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  let apiKey = useSelector(function (store) {
    return store.apiKey;
  });

  let dispatch = useDispatch();
  let history = useHistory();

  let emailRef = useRef();
  let paswordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  async function submithandler(event) {
    event.preventDefault();
    let responce;
    if (!isLogin) {
      responce = await dispatch(
        createAccount({
          email: emailRef.current.value,
          password: paswordRef.current.value,
          key: apiKey,
        })
      );
    } else {
      responce = await dispatch(
        loginAction({
          email: emailRef.current.value,
          password: paswordRef.current.value,
          key: apiKey,
        })
      );
    }

    if (responce.status === "failed") {
      alert(responce.message);
      return;
    }
    alert("Success");
    history.replace("/");
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submithandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={paswordRef} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
