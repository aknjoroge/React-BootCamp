import styles from "./mealitem.module.css";
import React, { useCallback, Fragment, useContext } from "react";
import MealForm from "./mealitemform";
import AppContext from "../../context-storage/appcontext";
function Mealitem(props) {
  let contextData = useContext(AppContext);
  let AddMealData = useCallback(function (itemAmount) {
    contextData.additems({
      type: "ADD",
      data: {
        id: props.data.id,
        name: props.data.name,
        amount: itemAmount,
        price: props.data.price,
      },
    });
  }, []);
  return (
    <Fragment>
      <li className={styles.meal} key={props.data.id}>
        {true ? <h3>{props.data.name}</h3> : ""}
        <span className={styles.description}>{props.data.description}</span>
        <span className={styles.price}>Ksh {props.data.price}</span>
        <MealForm addmeal={AddMealData} />
      </li>
    </Fragment>
  );
}
export default React.memo(Mealitem);
