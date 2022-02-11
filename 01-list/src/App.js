import Expenses from "./components/Expense/expenses";
import Newexpense from "./components/Form/newExpense";
import { useState } from "react";
function App() {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14).toLocaleDateString("en-us", options),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12).toLocaleDateString("en-us", options),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 2, 28).toLocaleDateString("en-us", options),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2023, 5, 12).toLocaleDateString("en-us", options),
    },
  ];

  let [expenseData, setexpendeData] = useState(expenses);

  function getExpenseData(data) {
    setexpendeData(function (prevData) {
      return [...prevData, data];
    });
  }
  return (
    <div>
      <Newexpense onReceivingData={getExpenseData} />
      <Expenses data={expenseData} setExpenseFilter={setexpendeData}></Expenses>
    </div>
  );
}
export default App;
