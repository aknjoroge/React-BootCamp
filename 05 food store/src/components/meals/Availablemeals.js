import styles from "./Availablemeals.module.css";
import { Fragment } from "react";
import Mealitem from "./mealItem/mealitem";
import Card from "../Ui/card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 20.5,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 15.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 10.9,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 10,
  },
];

function Availablemeals() {
  return (
    <Fragment>
      <div className={styles.meals}>
        <ul>
          <Card>
            {DUMMY_MEALS.map(function (element, index) {
              return <Mealitem key={index} data={element} />;
            })}
          </Card>
        </ul>
      </div>
    </Fragment>
  );
}
export default Availablemeals;
