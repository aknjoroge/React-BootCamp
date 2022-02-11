import Filter from "../Filter/filter";
import Card from "../Ui/card";
import ExpenseList from "./expenselist";
import { useState } from "react";
import ExpenseChart from "./ExpenseChat";
function Expenses(props) {
  let [filterDate, setFilterDate] = useState("2020");

  function selectedDate(dateData) {
    setFilterDate(dateData);
    console.log(dateData);
  }
  let filteredYear = props.data.filter(function (element) {
    return element.date.split(" ")[2] == filterDate;
  });

  return (
    <div>
      <Filter selected={filterDate} onDateSelected={selectedDate} />
      <ExpenseChart expensedata={filteredYear} />
      <Card>
        <ExpenseList data={filteredYear} />
      </Card>
    </div>
  );
}
export default Expenses;
