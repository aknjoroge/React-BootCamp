import AppContext from "./appcontext";
import { useEffect, useReducer } from "react";

function ContextProvider(props) {
  function reducerHandler(prevdata, action) {
    if (action.type === "ADD") {
      let newData = prevdata.concat(action.data);

      return newData;
    }
    if (action.type === "UPDATED") {
      let UpdatedData = [...prevdata];
      return UpdatedData;
    }
    if (action.type === "DELETE") {
      let UpdatedData = [...action.data];
      return UpdatedData;
    }
    if (action.type === "FORMAT") {
      return [];
    }
    return prevdata;
  }
  let itemsArray = [];

  let [items, setitemsData] = useReducer(reducerHandler, itemsArray);

  function additemHandler(dataSent) {
    if (dataSent.type) {
      let itemindex = items.findIndex(function (element) {
        return element.id == dataSent.data.id;
      });
      if (itemindex != -1) {
        let itemsCopy = Object.assign(items[itemindex]);
        itemsCopy.amount += dataSent.data.amount;

        let updateObject = {
          type: "UPDATED",
          data: itemsCopy,
        };

        setitemsData(updateObject);
      } else {
        setitemsData(dataSent);
      }
    }
  }
  function removeitemHandler(id) {
    let itemindex = items.findIndex(function (element) {
      return element.id == id;
    });

    let selectedItem = items[itemindex];
    if (selectedItem.amount == 1) {
      let newArry = items.filter(function (element) {
        return element.id != id;
      });
      let deleteObject = {
        type: "DELETE",
        data: newArry,
      };
      setitemsData(deleteObject);
    }
    if (selectedItem.amount > 1) {
      let itemsCopy = Object.assign(items[itemindex]);
      itemsCopy.amount -= 1;
      let updateObject = {
        type: "UPDATED",
        data: itemsCopy,
      };
      setitemsData(updateObject);
    }
  }
  function deleteHandler() {
    let deleteObject = {
      type: "FORMAT",
      data: [],
    };
    setitemsData(deleteObject);
  }

  let contextValues = {
    items,
    availableItems: [],
    admiPassword: "123",
    adminName: "admin",
    totalAmount: 0,
    ordersUrl: `https://fakeFirebaseURL-default-rtdb.firebaseio.com/orders.json`,
    itemsUrl: `https://fakeFirebaseURL-default-rtdb.firebaseio.com/items.json`,
    additems: additemHandler,
    removeitems: removeitemHandler,
    deleteItem: deleteHandler,
  };

  (function () {
    if (contextValues.items.length > 0) {
      let prices = contextValues.items.map(function (element) {
        return element.price * element.amount;
      });
      let totalPrices = prices.reduce(function (acc, value) {
        return acc + value;
      });
      contextValues.totalAmount = totalPrices;
    }
  })();

  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  );
}
export default ContextProvider;
