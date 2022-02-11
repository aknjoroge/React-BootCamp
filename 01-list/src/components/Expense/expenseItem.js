import { useState } from "react";
import "./expenseItem.css";
import Card from "../Ui/card";
import ExpenseDate from "./expenseDate";

function Expense(props) {
  let [title, changeTitle] = useState(props.title);

  let [mode, setmode] = useState(true);

  let modeSwitch;

  if (mode) {
    modeSwitch = "Light";
  } else {
    modeSwitch = "Dark";
  }

  function switchMode() {
    setmode(function (curerntmode) {
      return !curerntmode;
    });
  }

  function handler() {
    changeTitle("Upated");
  }

  return (
    <Card className={` ${mode ? "expense-item" : "expense-item-light"} `}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        <h1> {title}</h1>
        <p className="expense-item__price">${props.amout - 1}</p>
      </div>
      <button onClick={handler}>Update</button>
      <button onClick={switchMode}>{modeSwitch}</button>
    </Card>
  );
}

export default Expense;
