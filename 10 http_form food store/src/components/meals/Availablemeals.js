import styles from "./Availablemeals.module.css";
import { Fragment } from "react";
import Mealitem from "./mealItem/mealitem";
import Card from "../Ui/card";
import Modal from "../Ui/modal";
import AppContext from "../context-storage/appcontext";
import meals from "./mealData";
import { useEffect, useState, useContext } from "react";
/*
add to fire-Base 
fetch
loading
error
add form on cart
validate form with reducerr
pass form data to another file
get orders sent
Ui- for submiting order,clear cart
*/

function Availablemeals(props) {
  let context = useContext(AppContext);
  let [availableMealData, setAvailableMealData] = useState([]);
  let [isloading, setisloading] = useState(true);
  let [isEmpty, setisEmpty] = useState(false);

  useEffect(async function () {
    let response = await fetch(context.itemsUrl);
    let data = await response.json();
    let databaseItems = [];

    for (let key in data) {
      let res = data[key];

      res.forEach((itemRec) => {
        databaseItems.push({
          id: itemRec.id,
          description: itemRec.description,
          name: itemRec.name,
          price: itemRec.price,
        });
      });
      if (databaseItems.length > 0) {
        setAvailableMealData(function (prevData) {
          return databaseItems;
        });
        setisloading(function (prevData) {
          return false;
        });
        setisEmpty(function (prevData) {
          return false;
        });
        return;
      }
      setisloading(function (prevData) {
        return false;
      });
      setisEmpty(function (prevData) {
        return true;
      });
    }

    // getData();
  }, []);

  console.log("TC-72", context.availableItems);

  let loadingModal = (
    <Modal>
      <div className={styles.loading}>
        <h2>Loading..</h2>
        <div className={styles.loader}></div>
        <p>Please Wait </p>
      </div>
    </Modal>
  );

  return (
    <Fragment>
      {isloading && loadingModal}
      <div className={styles.meals}>
        <ul>
          {!isloading && !isEmpty && (
            <Card>
              {availableMealData.map(function (element, index) {
                return <Mealitem key={index} data={element} />;
              })}
            </Card>
          )}
          {isEmpty && <Card>No data found</Card>}
        </ul>
      </div>
    </Fragment>
  );
}
export default Availablemeals;
