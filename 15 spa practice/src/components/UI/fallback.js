import { Fragment } from "react";
import Header from "../layout/header";
import LoadingSpinner from "./LoadingSpinner";

let FallbackUI = function () {
  return (
    <Fragment>
      <Header></Header>
      <div className="centered">
        <h1>Starting Application</h1>
        <LoadingSpinner></LoadingSpinner>
      </div>
    </Fragment>
  );
};

export default FallbackUI;
