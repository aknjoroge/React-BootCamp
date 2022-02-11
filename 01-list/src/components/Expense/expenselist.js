import ExpenseItem from "./expenseItem";
import "./expenselist.css";
function ExpenseList(props) {
  if (props.data.length === 0) {
    return <p className="expenses-list__fallback">No Expense was found</p>;
  } else {
    console.log("Tc-88", props.data);

    return props.data.map(function (element, index) {
      return (
        <div className="expenses-list" key={index}>
          <ExpenseItem
            title={element.title}
            amout={element.amount}
            date={element.date}
          ></ExpenseItem>
        </div>
      );
    });

    // return props.data.map(function (element) {
    //   return (
    //     <div className="expenses-list" key={element.id}>
    //       <ExpenseItem
    //         title={element.title}
    //         amout={element.amount}
    //         date={element.date}
    //       ></ExpenseItem>
    //     </div>
    //   );
    // });
  }
}
export default ExpenseList;
