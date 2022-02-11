import "./chart.css";
import ChatBar from "./chartBar";
function Chart(props) {
  let values = [];
  props.data.forEach((element) => {
    values.push(element.value);
  });

  let maxheight = Math.max(...values);

  return (
    <div className="chart">
      {props.data.map(function (element, index) {
        return (
          <ChatBar
            key={element.label}
            value={element.value}
            maxValue={maxheight}
            label={element.label}
          />
        );
      })}
    </div>
  );
  //
}
export default Chart;
