import React from "react";

import "./Modal.css";

const modal = (props) => {
  console.log("TC-8", props.state);
  let cssClasses = [
    "Modal",
    props.state == "entering" || props.state == "entered"
      ? "ModalOpen"
      : props.state == "exiting" || props.state == "exited"
      ? "ModalClosed"
      : "none",
  ];

  return (
    <div className={cssClasses.join(" ")}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
