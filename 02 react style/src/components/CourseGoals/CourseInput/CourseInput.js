import React, { useState } from "react";
//import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setisValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setisValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  /*
  let CustomDiv = styled.div`
    margin: 0.5rem 0;

    font-size: ${function propsData(props) {
      if (props.deviceSize == "large") {
        return "25px";
      } else {
        return "16px";
      }
    }};
    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
    }

    & input {
      display: block;
      width: 100%;
      border: 1px solid #ccc;
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }

    & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }
  `;
  */

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <CustomDiv deviceSize="large"> */}
      <div className={styles["form-control"]}>
        <label className={`${isValid ? " " : styles["invalid-form_label"]}`}>
          Course Goal
        </label>
        <input
          className={`${isValid ? " " : styles["invalid-form_input"]}`}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      {/* </CustomDiv> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
