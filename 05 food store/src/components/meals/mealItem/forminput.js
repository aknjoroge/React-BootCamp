import React, { Fragment } from "react";
import styles from "./forminput.module.css";

let FormInput = React.forwardRef(function (props, ref) {
  return (
    <Fragment>
      <div className={styles.input}>
        <label>Amount</label>
        <input ref={ref} defaultValue="1" type="number" />
      </div>
    </Fragment>
  );
});
export default FormInput;
