import { useRef } from "react";
import classes from "./Auth.module.css";
import { authActions } from "../store/store";
import { useDispatch } from "react-redux";

const Auth = () => {
  let dispatch = useDispatch();
  let emailRef = useRef();
  let passRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    if (emailRef.current.value == "a@bc" && passRef.current.value == "abc") {
      dispatch(authActions.loggin());
      return;
    }
    alert("invalid credentials");
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input required ref={emailRef} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input required ref={passRef} type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
