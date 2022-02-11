import "./newExpense.css";
import Form from "./inputForm";
import { useState } from "react";

function NewExpense(props) {
  let [formActive, setformActive] = useState(false);

  function changeFormVisibility() {
    setformActive(function (prevData) {
      return !prevData;
    });
  }

  function getFormData(formData) {
    let receivedData = {
      ...formData,
      id: Math.random().toString(),
    };
    props.onReceivingData(receivedData);
  }
  if (!formActive) {
    return (
      <div className="new-expense">
        <button onClick={changeFormVisibility}>Add Expense</button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <Form onFormSave={getFormData} hideForm={changeFormVisibility}></Form>
      </div>
    );
  }
}

export default NewExpense;
