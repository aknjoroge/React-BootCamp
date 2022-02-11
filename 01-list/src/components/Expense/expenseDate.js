import "./expenseDate.css";
import Card from "../Ui/card";
function Expensedate(props) {
  return (
    <Card className="expense-date">
      <h1 className="expense-date__month">{props.date}</h1>
    </Card>
  );
}
export default Expensedate;
