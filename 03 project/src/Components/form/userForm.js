import styles from "./user.module.css";
import Button from "../button/formButton";
import Card from "../card/card";
import { useState, useRef } from "react";

function Form(props) {
  let userNameRef = useRef();
  let userAgeRef = useRef();
  /* 
  State (c0ntrolled component)
  let [name, setName] = useState("");
  let [age, setage] = useState("");
 
  function inputAdded(event) {
    if (event.target.type === "text") {
      setName(event.target.value);
    } else if (event.target.type === "number") {
      setage(event.target.value);
    }
  }
   */
  function submitHandler(event) {
    event.preventDefault();

    let name = userNameRef.current.value;
    let age = userAgeRef.current.value;
    if (name.trim().length === 0 || age.trim().length === 0) {
      props.validHandler("Please Enter a valid name or Age");
      return;
    }
    if (age < 0) {
      props.validHandler("Age cannot be below 0");
      return;
    } else {
      let data = {
        id: Math.random(),
        name,
        age,
      };
      props.submitHandler(data);
      userNameRef.current.value = "";
      userAgeRef.current.value = "";

      /*setName("");
      setage("");*/
    }
  }
  return (
    <Card className={styles.input}>
      <div className={styles.input}>
        <form onSubmit={submitHandler}>
          <h3>Username</h3>
          <input ref={userNameRef} type="text" />
          <h3>Age (years)</h3>
          <input ref={userAgeRef} type="number" />
          {/* <input value={name} onChange={inputAdded} type="text" /> */}
          {/* <input value={age} onChange={inputAdded} type="number" /> */}
          <Button>Add User</Button>
        </form>
      </div>
    </Card>
  );
}

export default Form;
