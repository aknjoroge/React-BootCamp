import styles from "./checkout.module.css";
import { useRef, useContext } from "react";
import AppContext from "../context-storage/appcontext";
function CheckoutForm(props) {
  let context = useContext(AppContext);
  let nameInput = useRef();
  let emailInput = useRef();
  let cityInput = useRef();
  let addressInput = useRef();
  async function submitHandler(event) {
    event.preventDefault();

    let data = {
      name: nameInput.current.value.trim(),
      email: emailInput.current.value.trim(),
      city: cityInput.current.value.trim(),
      address: addressInput.current.value.trim(),
      cartData: context.items,
      totalAmount: context.totalAmount,
    };

    if (
      data.name == "" ||
      data.email == "" ||
      data.city == "" ||
      data.address == ""
    ) {
      alert("Fill in data");
      return;
    }

    try {
      let response = await fetch(context.ordersUrl, {
        method: "POST",
        body: JSON.stringify(data),
      });

      let resdata = await response.json();

      context.deleteItem();
      props.closeCart();

      alert("success");
    } catch (error) {
      console.log("TC-765", error);
      alert("Error Occured");
    }
  }

  return (
    <form onSubmit={submitHandler} action="#">
      <h2 className={styles.heading}>Billing info</h2>
      <input
        className={styles.inputs}
        type="text"
        name=""
        ref={nameInput}
        required
        id=""
        placeholder="name"
      />
      <input
        className={styles.inputs}
        type="email"
        name=""
        ref={emailInput}
        required
        id=""
        placeholder="email"
      />
      <input
        className={styles.inputs}
        type="text"
        name=""
        required
        ref={cityInput}
        id=""
        placeholder="city"
      />
      <input
        className={styles.inputs}
        type="text"
        name=""
        required
        ref={addressInput}
        id=""
        placeholder="address"
      />
      <button
        type="button"
        onClick={props.display}
        className={styles["btn--red"]}
      >
        Cancel
      </button>
      <button type="submit" className={styles["btn--green"]}>
        place order
      </button>
    </form>
  );
}

export default CheckoutForm;
