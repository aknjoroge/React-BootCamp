import { useState, useEffect } from "react";
import useCounter from "../hooks/use-counter";

import Card from "./Card";

const BackwardCounter = () => {
  let counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
