import "./inputForm.css";
import { useState } from "react";
function Inputform(props) {
  let [title, setTitle] = useState(" ");
  let [dates, setdates] = useState(" ");
  let [prices, setprices] = useState(" ");
  /*
  let [inputs, setinputs] = useState({
    name: "",
    price: "",
    date: "",
  });
  setinputs(function (prevData) {
    return {
      ...prevData,
      name: "aq",
    };
  });
  
  */

  function changeHandler(e) {
    if (e.target.type === "number") {
      // console.log("number");
      setprices(e.target.value);
    }
    if (e.target.type === "date") {
      setdates(e.target.value);
      //console.log("Date");
    }
    if (e.target.type === "text") {
      setTitle(e.target.value);
      //console.log("Text");
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    let formData = {
      title,
      amount: prices,
      date: new Date(dates).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    props.onFormSave(formData);

    setprices("");
    setdates("");
    setTitle("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Expense Title </label>
          <input type="text" value={title} onChange={changeHandler} />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="1"
            value={prices}
            step="1"
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            value={dates}
            type="Date"
            min="2020-12-12"
            max="2023-12-12"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={props.hideForm}>Cancel</button>
      </div>
    </form>
  );
}
export default Inputform;
