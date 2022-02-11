import style from "./card.module.css";
function Card(props) {
  return (
    <div style={{ marginTop: props.marginTop + "px" }} className={style.card}>
      {props.children}
    </div>
  );
}

export default Card;
