import Availablemeals from "./Availablemeals";
import MealsSummary from "./summurymeals";
import { Fragment, useContext } from "react";

import { useEffect, useState } from "react";

function Meals() {
 

  return (
    <Fragment>
      <MealsSummary />
      <Availablemeals />
    </Fragment>
  );
}

export default Meals;
