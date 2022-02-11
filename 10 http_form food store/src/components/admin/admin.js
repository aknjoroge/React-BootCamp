import styles from "./admin.module.css";
import { useRef, useState, useContext } from "react";
import AppContext from "../context-storage/appcontext";
import adminFunctions from "./adminFunctions";
import Card from "../Ui/card";
import Modal from "../Ui/modal";
function AdminPage() {
  //state
  let [showform, setshowform] = useState(false);
  let [logegdin, setlogegdin] = useState(false);
  let [hasError, sethasError] = useState(false);
  let [isLoading, setisLoading] = useState(false);
  let [orderData, setorderData] = useState([]);
  let [showOrders, setshowOrders] = useState(false);

  //input & creds
  let context = useContext(AppContext);

  let nameInput = useRef();
  let passInput = useRef();
  let adminpass = context.admiPassword;
  let adminname = context.adminName;

  //urls
  let itemsUrl = context.itemsUrl;
  let ordersUrl = context.ordersUrl;

  //functions
  function authoriseAdmin(event) {
    event.preventDefault();
    if (
      nameInput.current.value === adminname &&
      passInput.current.value === adminpass
    ) {
      setlogegdin(function (prevData) {
        showForm();
        return true;
      });
      return;
    }

    alert("Incorrect credentials");
  }

  function showForm() {
    setshowform(function (prevData) {
      return !prevData;
    });
  }
  function logout() {
    setshowform(function (prevData) {
      return false;
    });
    setlogegdin(function (prevData) {
      return false;
    });
  }

  function setError() {
    sethasError(function (prevData) {
      return !prevData;
    });
  }
  function loadingController() {
    setisLoading(function (prevData) {
      return !prevData;
    });
  }

  async function ordersHandler(params) {
    let { status, orders } = await adminFunctions.viewOrder(context.ordersUrl);

    setorderData(function (prevData) {
      return orders;
    });
    setshowOrders(function (prevData) {
      return true;
    });
    console.log("TC-88", orders);
  }

  function hideOrders(params) {
    setshowOrders(function (prevData) {
      return false;
    });
  }

  return (
    <div className={styles.container}>
      {!showform && !logegdin && (
        <button onClick={showForm} className={styles["btn--green"]}>
          Load Admin
        </button>
      )}
      <div>
        {hasError && (
          <Modal>
            <div className={styles.error}>
              <h2>Error</h2>
              <p>Something went wrong</p>
              <button onClick={setError} className={styles["btn--red"]}>
                Close
              </button>
            </div>
          </Modal>
        )}
        {isLoading && (
          <Modal>
            <div className={styles.loading}>
              <h2>Loading..</h2>
              <div className={styles.loader}></div>
              <p>Please Wait </p>
            </div>
          </Modal>
        )}
        {showOrders && (
          <Modal>
            <div className={styles.orders}>
              <h2>Orders</h2>
              <button onClick={hideOrders}>close</button>
              <table className={styles.table} border="1px solid">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Total</th>
                  <th>Cart</th>
                </tr>

                {orderData.map(function (item) {
                  return (
                    <tr>
                      <td>{item.name} </td>
                      <td> {item.email} </td>
                      <td>{item.city} </td>
                      <td>{item.address} </td>
                      <td>{item.totalAmount} </td>
                      <td>
                        {item.cartData.map(function (cartitem) {
                          return (
                            <div>
                              <p> ID: {cartitem.id} </p>
                              <p> Name: {cartitem.name} </p>
                              <p> Price: {cartitem.price} </p>
                              <p> Amount: {cartitem.amount} </p>
                            </div>
                          );
                        })}{" "}
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </Modal>
        )}
      </div>
      {showform && (
        <div>
          <form onSubmit={authoriseAdmin} action="#">
            <input
              className={styles.inputs}
              type="text"
              ref={nameInput}
              name=""
              required
              id=""
              placeholder="name"
            />
            <input
              className={styles.inputs}
              type="password"
              name=""
              required
              ref={passInput}
              id=""
              placeholder="password"
            />
            <button type="submit" className={styles["btn--green"]}>
              login
            </button>
          </form>
          <button
            onClick={showForm}
            type="button"
            className={styles["btn--red"]}
          >
            Cancel
          </button>
        </div>
      )}
      {logegdin && (
        <div>
          <button
            onClick={() => {
              return adminFunctions.saveData(
                itemsUrl,
                setError,
                loadingController
              );
            }}
            className={styles["btn--blue"]}
          >
            Save Data
          </button>
          <button onClick={ordersHandler} className={styles["btn--green"]}>
            View Orders
          </button>
          {/* <button className={styles["btn--blue"]}>Load Data</button> */}
          <button onClick={logout} className={styles["btn--red"]}>
            Log out
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
