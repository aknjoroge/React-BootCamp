import styles from "./mealitemform.module.css";
import { Fragment, useState, useRef } from "react";
import FormInput from "./forminput";

function MealForm(props) {
  let [inputAmountValid, setinputAmountValid] = useState(true);
  let inputAmountRef = useRef();
  function formHandler(event) {
    event.preventDefault();
    if (
      +inputAmountRef.current.value <= 0 ||
      +inputAmountRef.current.value > 5
    ) {
      setinputAmountValid(false);
      return;
    }
    setinputAmountValid(function (prevdata) {
      return true;
    });
    props.addmeal(+inputAmountRef.current.value);
  }
  return (
    <Fragment>
      <form onSubmit={formHandler} className={styles.form}>
        <FormInput ref={inputAmountRef} />
        <button>Add to cart</button>
        {!inputAmountValid && <p> Please Enter a valid Amount (1-5) </p>}
      </form>
    </Fragment>
  );
}
export default MealForm;
