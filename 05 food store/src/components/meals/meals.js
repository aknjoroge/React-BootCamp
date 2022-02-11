import Availablemeals from "./Availablemeals";
import MealsSummary from "./summurymeals";
import { Fragment } from "react";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <Availablemeals />
    </Fragment>
  );
}

export default Meals;
