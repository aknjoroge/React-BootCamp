import Chart from "../Chart/chart";

function ExpenseChart(props) {
  let chartpoints = [
    { value: 0, label: "Jan" },
    { value: 0, label: "Feb" },
    { value: 0, label: "Mar" },
    { value: 0, label: "Apr" },
    { value: 0, label: "May" },
    { value: 0, label: "jun" },
    { value: 0, label: "Jul" },
    { value: 0, label: "Aug" },
    { value: 0, label: "Sep" },
    { value: 0, label: "Oct" },
    { value: 0, label: "Nov" },
    { value: 0, label: "Dec" },
  ];

  props.expensedata.forEach((element) => {
    let monthNumber = new Date(element.date).getMonth();
    chartpoints[monthNumber].value += element.amount;
  });

  return <Chart data={chartpoints} />;
}
export default ExpenseChart;
