import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAccount, updatePassword } from "../../store/actionCreator";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  let dispatch = useDispatch();
  let paswordRef = useRef();

  let apiKey = useSelector(function (store) {
    return store.apiKey;
  });
  let token = useSelector(function (store) {
    return store.token;
  });

  async function submitHandler(event) {
    event.preventDefault();
    let responce = await dispatch(
      updatePassword({
        password: paswordRef.current.value,
        token,
        key: apiKey,
      })
    );

    if (responce.status === "failed") {
      alert(responce.message);
      return;
    }
    alert("Success");
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={paswordRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
