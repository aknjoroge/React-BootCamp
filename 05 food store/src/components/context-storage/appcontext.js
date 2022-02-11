import React from "react";

let AppContext = React.createContext({
  items: [],
  totalAmount: 0,
  additems: () => {},
  removeitems: () => {},
});

export default AppContext;
