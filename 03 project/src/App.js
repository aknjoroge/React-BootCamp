import React from "react";
import Form from "./Components/form/userForm";
import Modal from "./Components/modal/modal";

import reactDom from "react-dom";
import RenderList from "./Components/user/listRenderer";
import { useState, Fragment } from "react";
function App() {
  let usersData = [];

  let [errMessage, seterrMessage] = useState("");
  let [users, setUser] = useState(usersData);

  let [isValid, setisValid] = useState(true);

  function changeValidity() {
    setisValid(true);
  }
  function setError(message) {
    seterrMessage(message);
    setisValid(false);
  }
  function formSubmmit(data) {
    setUser(function (prevdata) {
      return [...prevdata, data];
    });
  }

  let modalVariable = (
    <Modal
      title="Invalid Input"
      validHandler={changeValidity}
      message={errMessage}
    />
  );
  // {!isValid ? modalVariable : " "}
  return (
    <Fragment>
      {!isValid
        ? reactDom.createPortal(
            modalVariable,
            document.getElementById("modal-portal")
          )
        : " "}

      <Form submitHandler={formSubmmit} validHandler={setError} />
      <RenderList data={users} />
    </Fragment>
  );
}

export default App;
