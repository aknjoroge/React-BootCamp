// import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";
import { useState } from "react";

function App() {
  let [modalIsOpen, setmodalIsOpen] = useState(false);

  function closeModalHandler(event) {
    event.preventDefault();
    setmodalIsOpen(function (prevData) {
      return !prevData;
    });
  }

  return (
    <Transition in={modalIsOpen} timeout={300}>
      {(state) => (
        <div className="App">
          <h1>React Animations</h1>
          <Modal state={state} closed={closeModalHandler} />

          <Backdrop show={modalIsOpen} />
          <button className="Button" onClick={closeModalHandler}>
            Open Modal
          </button>
          <h3>Animating Lists</h3>
          <List />
        </div>
      )}
    </Transition>
  );
}
export default App;
