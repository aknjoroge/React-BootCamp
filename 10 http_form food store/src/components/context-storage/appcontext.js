import React from "react";

let AppContext = React.createContext({
  items: [],
  totalAmount: 0,
  availableItems: [],
  admiPassword: "",
  adminName: "",
  ordersUrl: "",
  itemsUrl: "",
  additems: () => {},
  removeitems: () => {},
  deleteItem: null,
});

export default AppContext;
